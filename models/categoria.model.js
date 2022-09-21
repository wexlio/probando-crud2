import mongoose from "mongoose"

const categoriaSchema = new mongoose.Schema({
    textoCategoria:{
        type: String,
        trim: true,
        require: true
    },
    imgCategoria: {
        public_id: String,
        secure_url: String,
    }
}, {
    timestamps: true
})

export default mongoose.model("Categoria", categoriaSchema, "Categoria111")
