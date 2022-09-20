import mongoose from "mongoose"

const portadaSchema = new mongoose.Schema({
    textoPortada1:{
        type: String,
        trim: true,
        require: true
    },
    imgPortada1: {
        public_id: String,
        secure_url: String,
    }
}, {
    timestamps: true
})

export default mongoose.model("Portada", portadaSchema, "Portadas111")
