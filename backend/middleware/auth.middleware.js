import jwt from "jsonwebtoken";
import Admin from "../models/admin.model";

export const protectRoute = async (req, res, next) => {
    try{
        const accessToken = req.cookies.accessToken;
        if (!accessToken) {
            return res.status(401).json({ message: "Unauthorized - no access token found" });
        }
        try {
            const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
            const admin = await Admin.findById(decoded.adminId).select("-password");
            
            if(!admin) {
                return res.status(401).json({ message: "Unauthorized - no such admin found" });
            }
            req.admin = admin;
            next();
        } catch (error) {
            if(error.name === "TokenExpiredError") {
                return res.status(401).json({ message: "Unauthorized - access token expired" });
            }
            throw error;
        }
    } catch (error) {
        console.log("Error in auth middleware: ", error.message);
        res.status(401).json({ message: "Unauthorized - Invalid access token" });
    }
}