import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { createProject, deleteProject, getAllProjects, getProject, getFeaturedProject, toggleFeaturedProject } from "../controllers/project.controller.js";

const router = express.Router();

router.get("/", getAllProjects);
router.get("/featured", getFeaturedProject);
router.post("/", protectRoute, createProject);
router.delete("/:id", protectRoute, deleteProject);
router.patch("/:id", protectRoute, toggleFeaturedProject);
router.get("/:id", getProject);