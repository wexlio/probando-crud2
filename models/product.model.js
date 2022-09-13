import mongoose from "mongoose"
// import { model } from "mongoose"

const productSchema = mongoose.Schema({
    categoria: {
        type: String,
        trim: true,
        require: true,
        unique: true
    },
    nombre: {
        type: String,
        trim: true,
        require: true,
        unique: true
    },
    precio: {
        type: Number,
        trim: true,
    },
    imagen1: {
        public_id: String,
        secure_url: String,
    },
    imagen2: {
        public_id: String,
        secure_url: String,
    },
    imagen3: {
        public_id: String,
        secure_url: String,
    },
    imagen4: {
        public_id: String,
        secure_url: String,
    },
    imagen5: {
        public_id: String,
        secure_url: String,
    },
    descuento: {
        type: Number,
        trim: true,
    },
    descripcion1: {
        type: String,
        trim: true,
        unique: true
    },
    imgDescripcion1: {
        public_id: String,
        secure_url: String,
    },
    descripcion2: {
        type: String,
        trim: true,
        unique: true
    },
    imgDescripcion2: {
        public_id: String,
        secure_url: String,
    },
    descripcion3: {
        type: String,
        trim: true,
        unique: true
    },
    imgDescripcion3: {
        public_id: String,
        secure_url: String,
    },
    descripcion4: {
        type: String,
        trim: true,
        unique: true
    },
    imgDescripcion4: {
        public_id: String,
        secure_url: String,
    },
    descripcion5: {
        type: String,
        trim: true,
        unique: true
    },
    imgDescripcion5: {
        public_id: String,
        secure_url: String,
    }
}, {
    timestamps: true
})

export default mongoose.model("Product", productSchema, "ProductosPruebaCrud")



