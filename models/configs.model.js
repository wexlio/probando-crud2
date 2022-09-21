import mongoose from "mongoose"

const configsSchema = new mongoose.Schema({
    nombreTienda:{
        type: String,
        trim: true,
        require: true,
        default: "Tienda Master"
    },
    imgTienda: {
        public_id: String,
        secure_url: String,
    },
    slogan:{
        type: String,
        trim: true,
        require: true,
        default: "Tienda Whatsapp, todo lo que buscas está..."
    },
    imgSlogan: {
        public_id: String,
        secure_url: String,
    },
    colorPrincipalPagina:{
        type: String,
        trim: true,
        require: true,
        default: "#00F"
    }
}, {
    timestamps: true
})

export default mongoose.model("Configs", configsSchema, "Configs111")
