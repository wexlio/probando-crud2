
import Product from "../models/product.model.js"
import {uploadImage, deleteImage, updateImage} from "../utils/cloudinary.js"
import fs from "fs-extra"
// import {v2 as cloudinary} from "../utils/cloudinary.js"
import methodOverride from "method-override"

//api json

export async function renderJsonProducts (req, res){
    try {
        const products = await Product.find()
        res.send(products)
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    
}

//new products
export function renderProdutForm (req, res){
    try {
        res.render("form_and_products")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }
    
}

export async function createNewProduct (req, res){
    
    try {
        const { title, price } = req.body;
    
        console.log(req.files) 
    
        console.log(req.body)
    
        const products = new Product ({
            title, 
            price,
        })
    
        if (req.files?.image) {
            const uploadCloudinary = await uploadImage(req.files.image.tempFilePath)
    
            products.image = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
    
            await fs.unlink(req.files.image.tempFilePath)
    
        }
    
        await products.save();
    
        console.log(products.image.secure_url)
        console.log(products.image)
    
        res.redirect("/products")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

}

//all products
export async function renderProducts (req, res){

    try {
        // res.render("home")
        // res.send("showing products")
        const product = await Product.find().lean();
        
        res.render("Home", {product})
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }
}

//update products
export async function renderEditForm (req, res){
    
    try {
        const products = await Product.findById(req.params.id).lean()
        console.log(products.image)
        console.log(products)
        console.log(req.files, 200)
        res.render("edit_form", {products})
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

}

export async function updateProduct (req, res){
    try {
        const {id} = req.params
        // console.log(req.body)
        console.log(req.files, 999)
        const productUpdating = await Product.findByIdAndUpdate(id, req.body, {
          new: true
        })
    
        
        if (req.files != null) {
            if (productUpdating.image?.public_id) {
                const result = await deleteImage(productUpdating.image.public_id)
                // console.log(result,226)
            }
        }
        
        if (req.files?.image) {
            // console.log(req.files.image.tempFilePath, 224)  
            const uploadCloudinary = await uploadImage(req.files.image.tempFilePath)
            
            productUpdating.image = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.image.tempFilePath)
              
        }

        await productUpdating.save()
    
        res.redirect("/products")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }
}

//delete products
export async function deleteProducts (req, res){

    try {
        const eraser = await Product.findByIdAndDelete(req.params.id)
    
        if (!eraser) return res.status(400).json({
            "message": "Product does not exists"
          })
        if (eraser.image?.public_id) {
            const result = await deleteImage(eraser.image.public_id)
            // console.log(result)
        }
    
        res.redirect("/products")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          }) 
    }
}


