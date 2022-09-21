import Categoria from "../models/categoria.model.js"
import {uploadImage, deleteImage} from "../utils/cloudinary.js"
import fs from "fs-extra"


export async function renderCategorias (req, res){

    try {

        const categorias = await Categoria.find().lean();

        res.render("view-category", {categorias})
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("get mostrar todas las categorias")
}

export async function renderCategoriasForm (req, res){

    try {
        res.render("form-category")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }
    // res.send("get mostrar formulario para agregar las categorias")
}

export async function createNewCategoria (req, res){

    try {
        
        const { textoCategoria } = req.body

        const categorias = new Categoria ({ textoCategoria })

        if (req.files?.imgCategoria) {
            const uploadCloudinary = await uploadImage(req.files.imgCategoria.tempFilePath)
            categorias.imgCategoria = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgCategoria.tempFilePath)  
        }

        await categorias.save();
    
        // console.log(products.image.secure_url)
        // console.log(products.image)
    
        res.redirect("/categorias-style")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("post agregar nueva categoria")
}

export async function renderEditCategoriasForm (req, res){

    try {
        const categorias = await Categoria.findById(req.params.id).lean()
        // console.log(products.image)
        // console.log(products)
        // console.log(req.files, 200)
        res.render("edit-form-category", { categorias })
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("get mostrar formulario para editar categoria")
}

export async function updateCategorias (req, res){

    try {
        const {id} = req.params
        // console.log(req.body)
        console.log(req.files, 999)
        const categoriasUpdating = await Categoria.findByIdAndUpdate(id, req.body, {
          new: true
        })
    
        
        if (req.files != null) {

            if (categoriasUpdating.imgCategoria?.public_id) {
                const result = await deleteImage(categoriasUpdating.imgCategoria.public_id)
            }

        }
        
        if (req.files?.imgCategoria) {

            const uploadCloudinary = await uploadImage(req.files.imgCategoria.tempFilePath)
            
            categoriasUpdating.imgCategoria = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgCategoria.tempFilePath)
              
        }
        
        //--------Actualizar y Guardar productos

        await categoriasUpdating.save()
    
        res.redirect("/categorias-style")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("put editar categoria")
}

export async function deleteCategorias (req, res){

    try {
        const eraser = await Categoria.findByIdAndDelete(req.params.id)
    
        if (!eraser) return res.status(400).json({
            "message": "Categoria does not exists"
          })

        if (eraser.imgCategoria?.public_id) {
            const result = await deleteImage(eraser.imgCategoria.public_id)
        }

        res.redirect("/categorias-style")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          }) 
    }

    // res.send("delete borrar categoria")
}

