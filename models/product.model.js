import mongoose from "mongoose"
// import { model } from "mongoose"


const productSchema2 = new mongoose.Schema({
    categoria:{
        type: String,
        trim: true,
        require: true
    },
    nombre: {
        type: String,
        trim: true,
        require: true,
        unique: false
    },
    precio: {
        type: Number,
        trim: true,
        unique: false,
        sparse:true
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
        unique: false,
        sparse:true
    },
    descripcion1: {
        type: String,
        trim: true,
        unique: false,
        sparse:true
    },
    imgDescripcion1: {
        public_id: String,
        secure_url: String,
    },
    descripcion2: {
        type: String,
        trim: true,
        unique: false,
        sparse:true
    },
    imgDescripcion2: {
        public_id: String,
        secure_url: String,
    },
    descripcion3: {
        type: String,
        trim: true,
        unique: false,
        sparse:true
    },
    imgDescripcion3: {
        public_id: String,
        secure_url: String,
    },
    descripcion4: {
        type: String,
        trim: true,
        unique: false,
        sparse:true
    },
    imgDescripcion4: {
        public_id: String,
        secure_url: String,
    },
    descripcion5: {
        type: String,
        trim: true,
        unique: false,
        sparse:true
    },
    imgDescripcion5: {
        public_id: String,
        secure_url: String,
    }
}, {
    timestamps: true
})

export default mongoose.model("Product", productSchema2)



