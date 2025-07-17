import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./lib/mongo.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({origin: process.env.CLIENT_URL, credentials: true}));
app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}` + "\n");
    connectDB();
});