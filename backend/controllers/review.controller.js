import Review from "../models/review.model.js";
import cloudinary from "../lib/cloudinary.js";

export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({}).sort({ createdAt: -1 });
        res.json({ reviews });
    } catch (error) {
        console.log("Error in getAllReviews controller: ", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

export const createReview = async (req, res) => {
    try {
        const { client, rating, comment, image} = req.body;
        let cloudinaryResponse = null;
        if (image) {
            cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "reviews" });
        }
        const review = await Review.create({
            client,
            rating,
            comment,
            image: cloudinaryResponse ? cloudinaryResponse.secure_url : ""
        });
        res.status(201).json({ review });
    } catch (error) {
        console.log("Error in createReview controller: ", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

export const deleteReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }
        if (review.image) {
            const publicId = review.image.split("/").pop().split(".")[0];
        }
        try {
            await cloudinary.uploader.destroy(`reviews/${publicId}`);
            console.log("Image deleted successfully from cloudinary");
        } catch (error) {
            console.log("Error deleting image from cloudinary: ", error.message);
        }
        await Review.findByIdAndDelete(req.params.id);
        res.json({ message: "Review deleted successfully" });
    } catch (error) {
        console.log("Error in deleteReview controller: ", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}