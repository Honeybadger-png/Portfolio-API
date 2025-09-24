import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.log("Couldnt connect to DB");
        process.exit(1);
    }
}