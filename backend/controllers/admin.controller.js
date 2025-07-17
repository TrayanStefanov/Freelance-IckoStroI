import { redis } from "../lib/redis.js";
import Admin from "../models/admin.model.js";
import jwt from "jsonwebtoken";

export const generateTokens = (adminId) => {
    const accessToken = jwt.sign({ adminId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
    const refreshToken = jwt.sign({ adminId }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
    return { accessToken, refreshToken };
}

export const storeRefreshToken = async (adminId, refreshToken) => {
    try {
        await redis.set(`refresh_token:${adminId}`, refreshToken, "EX", 7 * 24 * 60 * 60); //7 days
    } catch (error) {
        console.log("Error storing refresh token: ", error.message);
    }
}

export const setCookies = (res, accessToken, refreshToken) => {
    res.cookie("accessToken", accessToken, {
        httpOnly: true, // prevent XSS attacks, cross site scripting attack
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict", // prevents CSRF attack, cross-site request forgery attack
        maxAge: 15 * 60 * 1000, // 15 minutes
    });
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true, // prevent XSS attacks, cross site scripting attack
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict", // prevents CSRF attack, cross-site request forgery attack
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
}

export const login = async (req, res) => {
    try {

        const { email, password } = req.body;
        const admin = await Admin.findOne({ email }).select("+password");
        if (admin && (await Admin.findOne({ email }).comparePassword(password))) {
            const { accessToken, refreshToken } = generateTokens(admin._id);
            await storeRefreshToken(admin._id, refreshToken);
            setCookies(res, accessToken, refreshToken);
            res.json({
                _id: admin._id,
                name: admin.name,
                email: admin.email
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.log("Error in login controller: ", error.message);
        res.status(500).json({ message: "Server error", message: error.message });
    }
}

export const logout = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (refreshToken) {
            const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
            await redis.del(`refresh_token:${req.admin._id}`);
        }
        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");
        res.json({ message: "Logout successful" });
    } catch (error) {
        console.log("Error in logout controller: ", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }

}

export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) {
            return res.status(401).json({ message: "Unauthorized - no refresh token found" });
        }
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const storedToken = await redis.get(`refresh_token:${decoded.id}`);
        if(!storedToken !== refreshToken) {
            return res.status(401).json({ message: "Unauthorized - invalid refresh token" });
        }
        
        const accessToken = jwt.sign({ id: decoded.id} , process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
        res.cookie("accessToken", accessToken, {
            httpOnly: true, // prevent XSS attacks, cross site scripting attack
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict", // prevents CSRF attack, cross-site request forgery attack
            maxAge: 15 * 60 * 1000, // 15 minutes
        });
        res.json({ accessToken });
    } catch (error) {
        console.log("Error in refreshToken controller: ", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

export const getAdmin = async (req, res) => {
    try {
        res.json(req.admin);
    } catch (error) {
        console.log("Error in getAdmin controller: ", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}