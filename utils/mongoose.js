import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

export function connectMongoDb(){
    try {
        mongoose.connect(MONGODB_URI)
        console.log("database connect for me firts time")
      } catch (error) {
        console.error(error)
      }
}    

