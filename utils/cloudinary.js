import { v2 as cloudinary } from "cloudinary"
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
})

export async function uploadImage(filePath) {
    return await cloudinary.uploader.upload(filePath, {
        folder: "pruebasCrud2"
      })
}

export async function deleteImage(publicId) {
    return await cloudinary.uploader.destroy(publicId)
}

export async function updateImage(from_public_id, to_public_id) {
    return await cloudinary.uploader.rename(from_public_id, to_public_id)
}

