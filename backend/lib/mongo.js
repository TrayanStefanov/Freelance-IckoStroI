import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected successfully at: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}