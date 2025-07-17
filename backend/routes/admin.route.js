import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getAdmin, login, logout, refreshToken } from "../controllers/admin.controller.js";

const router = express.Router();

router.post("/login", login);
router.post("/logout", protectRoute, logout);
router.post("/refresh-token", refreshToken);
router.get("/profile", protectRoute, getAdmin);

export default router;