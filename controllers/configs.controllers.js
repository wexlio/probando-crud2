import Configs from "../models/configs.model.js"
import {uploadImage, deleteImage} from "../utils/cloudinary.js"
import fs from "fs-extra"


export async function renderConfigs (req, res) {

    try {
        
        
        const configs = await Configs.find().lean();
        // console.log(req.body, 199)
        // if (configs.nombreTienda == undefined || configs.imgTienda == undefined || configs.slogan == undefined || configs.imgSlogan == undefined || configs.colorPrincipalPagina == undefined) {
            
        //     console.log(configs.colorPrincipalPagina)
        //     res.render("form-configs", { configs })            
        // }
        // else if (configs.nombreTienda != undefined || configs.imgTienda != undefined || configs.slogan != undefined || configs.imgSlogan != undefined || configs.colorPrincipalPagina != undefined) {
            
            res.render("view-configs", { configs })            

        // }
        // console.log(configs.colorPrincipalPagina)


    } catch (error) {
        
        return res.status(500).json({
            "message": error.message
          })

    }

    // res.send("get mostrar configs")

}
export async function renderConfigsForm (req, res) {

    try {

        const configs = await Configs.find().lean();

        // console.log(configs.length, 399)

        if (configs.length <= 0) {
            
            res.render("form-configs")

        }

        else {
            console.log(req.params.id, 777)
            const configs = await Configs.findById(req.params.id).lean()
            // console.log(products.image)
            // console.log(products)
            // console.log(req.files, 200)
            res.render("edit-form-configs", { configs })
        }
        
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("get mostrar formulario para crear configs")

}
export async function createNewConfigs (req, res) {

    try {
        
        // console.log(req.body)
        // console.log(req.files)

        const { nombreTienda, slogan, colorPrincipalPagina } = req.body

        const configs = new Configs ({ nombreTienda, slogan, colorPrincipalPagina })

        if (req.files?.imgTienda) {
            const uploadCloudinary = await uploadImage(req.files.imgTienda.tempFilePath)
            configs.imgTienda = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgTienda.tempFilePath)  
        }

        if (req.files?.imgSlogan) {
            const uploadCloudinary = await uploadImage(req.files.imgSlogan.tempFilePath)
            configs.imgSlogan = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgSlogan.tempFilePath)  
        }

        await configs.save();
    
        // console.log(products.image.secure_url)
        // console.log(products.image)
    
        res.redirect("/configs-style")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("post crear nueva config")

}
export async function renderEditConfigsForm (req, res) {

    try {
        const configs = await Configs.findById(req.params.id).lean()
        // console.log(products.image)
        // console.log(products)
        // console.log(req.files, 200)
        res.render("edit-form-configs", { configs })
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("get mostrar formulario para editar configs")

}
export async function updateConfigs (req, res) {

    try {
        const {id} = req.params
        // console.log(req.body)
        // console.log(req.files, 999)
        const configsUpdating = await Configs.findByIdAndUpdate(id, req.body, {
          new: true
        })
    
        
        if (req.files != null) {

            if (configsUpdating.imgTienda?.public_id) {
                const result = await deleteImage(configsUpdating.imgTienda.public_id)
            }
            if (configsUpdating.imgSlogan?.public_id) {
                const result = await deleteImage(configsUpdating.imgSlogan.public_id)
            }

        }
        
        if (req.files?.imgTienda) {

            const uploadCloudinary = await uploadImage(req.files.imgTienda.tempFilePath)
            
            configsUpdating.imgTienda = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgTienda.tempFilePath)
            
        }

        if (req.files?.imgSlogan) {

            const uploadCloudinary = await uploadImage(req.files.imgSlogan.tempFilePath)
            
            configsUpdating.imgSlogan = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgSlogan.tempFilePath)
              
        }
        
        //--------Actualizar y Guardar productos

        await configsUpdating.save()
    
        res.redirect("/configs-style")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("put editar configs")

}
export async function deleteConfigs (req, res) {

    try {
        const eraser = await Configs.findByIdAndDelete(req.params.id)
    
        if (!eraser) return res.status(400).json({
            "message": "Configs does not exists"
          })

        if (eraser.imgTienda?.public_id) {
            const result = await deleteImage(eraser.imgTienda.public_id)
        }
        if (eraser.imgSlogan?.public_id) {
            const result = await deleteImage(eraser.imgSlogan.public_id)
        }

        res.redirect("/configs-style")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          }) 
    }


    // res.send("get mostrar configs")

}




