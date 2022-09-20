import Portada from "../models/portada.model.js"
import {uploadImage, deleteImage} from "../utils/cloudinary.js"
import fs from "fs-extra"

export async function renderJsonPortadas (req, res){

    try {
        const portadas = await Portada.find()
        res.render("json-api-portadas", {portadas})
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    } 

    // res.send("json de portadas")
}
export async function renderPortadasForm (req, res){

    try {
        res.render("form-portadas")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send(" get formulario para agregar portadas")
}
export async function createNewPortada (req, res){

    try {
        const { 
            textoPortada1
            } = req.body;
    
        // console.log(req.files) 
    
        console.log(req.body)
    
        const portadas = new Portada ({
            textoPortada1
        })
    
        if (req.files?.imgPortada1) {
            const uploadCloudinary = await uploadImage(req.files.imgPortada1.tempFilePath)
            portadas.imgPortada1 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgPortada1.tempFilePath)  
        }
        
    
        await portadas.save();
    
        // console.log(products.image.secure_url)
        // console.log(products.image)
    
        res.redirect("/portadas-style")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("post para creacion de portadas")
}
export async function renderPortadas (req, res){

    try {
        // res.render("home")
        // res.send("showing products")
        const portadas = await Portada.find().lean();

        res.render("view-portadas", {portadas})
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("get mostrar todas las portadas agregadas")
}
export async function renderEditPortadaForm (req, res){

    try {
        const portadas = await Portada.findById(req.params.id).lean()
        // console.log(products.image)
        // console.log(products)
        // console.log(req.files, 200)
        res.render("edit-form-portadas", {portadas})
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("get mostrar formulario para editar portadas")
}
export async function updatePortadas (req, res){

    try {
        const {id} = req.params
        // console.log(req.body)
        console.log(req.files, 999)
        const portadasUpdating = await Portada.findByIdAndUpdate(id, req.body, {
          new: true
        })
    
        
        if (req.files != null) {

            if (portadasUpdating.imgPortada1?.public_id) {
                const result = await deleteImage(portadasUpdating.imgPortada1.public_id)
            }

        }
        
        if (req.files?.imgPortada1) {

            const uploadCloudinary = await uploadImage(req.files.imgPortada1.tempFilePath)
            
            portadasUpdating.imgPortada1 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgPortada1.tempFilePath)
              
        }
        
        //--------Actualizar y Guardar productos

        await portadasUpdating.save()
    
        res.redirect("/portadas-style")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("put para edutar portadas")
}
export async function deletePortadas (req, res){

    try {
        const eraser = await Portada.findByIdAndDelete(req.params.id)
    
        if (!eraser) return res.status(400).json({
            "message": "Portada does not exists"
          })

        if (eraser.imgPortada1?.public_id) {
            const result = await deleteImage(eraser.imgPortada1.public_id)
        }

        res.redirect("/portadas-style")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          }) 
    }

    // res.send("delete para borrar portadas")
}

