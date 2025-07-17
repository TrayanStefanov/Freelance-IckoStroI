import Project from "../models/project.model.js";
import { redis } from "../lib/redis.js";
import cloudinary from "../lib/cloudinary.js";

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({}).sort({ createdAt: -1 });
        res.json({ projects });
    } catch (error) {
        console.log("Error in getProjects controller: ", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

export const getProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.json({ project });
    } catch (error) {
        console.log("Error in getProject controller: ", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

export const createProject = async (req, res) => {
    try {
        const { title, description, images } = req.body;
        if (images) {
            cloudinaryResponse = await Promise.all(images.map((image) => cloudinary.uploader.upload(image, { folder: "projects" })));
            const uploadedImages = cloudinaryResponse.map((image) => image.secure_url);
        }
        const project = await Project.create({
            title,
            description,
            images: uploadedImages
        });
        res.status(201).json({ project });
    } catch (error) {
        console.log("Error in createProject controller: ", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

/*  Maybe later 
export const createProject = async (req, res) => {
    try {
        const { title, description, images } = req.body;
        const uploadedImages = images
            ? await Promise.all(images.map((image) => cloudinary.uploader.upload(image, { folder: "projects" })))
                .then((responses) => responses.map(({ secure_url }) => secure_url))
            : [];
        const project = await Project.create({ title, description, images: uploadedImages });
        res.status(201).json({ project });
    } catch (error) {
        console.log("Error in createProject controller: ", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
} 
*/

export const deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        if (project.images) {
            try{
                await Promise.all(project.images.map((image) => {
                    const publicId = image.split("/").pop().split(".")[0];
                    return cloudinary.uploader.destroy(`projects/${publicId}`);
                }));
                console.log("Images deleted successfully from cloudinary");
            } catch (error) {
                console.log("Error deleting images from cloudinary: ", error.message);
            }
        }
        await Project.findByIdAndDelete(req.params.id);
        res.json({ message: "Project deleted successfully" });
    } catch (error) {
        console.log("Error in deleteProject controller: ", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

export const toggleFeaturedProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if(project) {
            project.isFeatured = !project.isFeatured;
            const updatedProject = await project.save();
            await updateFeaturedProjectsCache();
            res.json({ updatedProject });
        } else {
            res.status(404).json({ message: "Project not found" });
        }
    } catch (error) {
        console.log("Error in toggleFeaturedProject controller: ", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

async function updateFeaturedProjectsCache() {
    try {
        const featuredProject = await Project.find({ isFeatured: true });
        await redis.set("featuredProject", JSON.stringify(featuredProject)); //7 days
    } catch (error) {
        console.log("Error updating featured projects cache: ", error.message);
    }
}