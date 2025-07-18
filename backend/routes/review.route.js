import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getAllReviews, createReview, deleteReview } from "../controllers/review.controller.js";

const router = express.Router();

router.get("/", getAllReviews);
router.post("/", protectRoute, createReview);
router.delete("/:id", protectRoute, deleteReview);

export default router;