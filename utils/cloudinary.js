import { v2 as cloudinary } from "clodinary"
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true
})

export async function uploadImage(filePath) {
    return await cloudinary.uploader.upload(filePath, {
        folder: "pruebasCrud2"
      })
}

export async function deleteImage(publicId) {
    return await cloudinary.uploader.upload.destroy(publicId)
}


