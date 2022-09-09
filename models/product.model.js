import mongoose from "mongoose"
// import { model } from "mongoose"

const productSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        require: true,
        unique: true
    },
    price: {
        type: Number,
        trim: true,
    },
    image: {
        public_id: String,
        secure_url: String,
    }
}, {
    timestamps: true
})

export default mongoose.model("Product", productSchema, "ProductosPruebaCrud")



