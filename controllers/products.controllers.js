import Product from "../models/product.model.js"
import {uploadImage, deleteImage} from "../utils/cloudinary.js"
import fs from "fs-extra"


export async function renderJsonProducts2 (req, res){
    try {
        const products = await Product.find()
        res.render("json-api-productos", {products})
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    } 
}


//new products
export function renderProdutForm2 (req, res){
    try {
        res.render("form1")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }
    
}

export async function createNewProduct2 (req, res){
    
    try {
        const { 
            categoria, 
            nombre, 
            precio,
            descuento,
            descripcion1,
            descripcion2,
            descripcion3,
            descripcion4,
            descripcion5 } = req.body;
    
        // console.log(req.files) 
    
        console.log(req.body)
    
        const products = new Product ({
            categoria,
            nombre, 
            precio,
            descuento,
            descripcion1,
            descripcion2,
            descripcion3,
            descripcion4,
            descripcion5
        })
    
        if (req.files?.imagen1) {
            const uploadCloudinary = await uploadImage(req.files.imagen1.tempFilePath)
            products.imagen1 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imagen1.tempFilePath)  
        }
        if (req.files?.imagen2) {
            const uploadCloudinary = await uploadImage(req.files.imagen2.tempFilePath)
            products.imagen2 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imagen2.tempFilePath)  
        }
        if (req.files?.imagen3) {
            const uploadCloudinary = await uploadImage(req.files.imagen3.tempFilePath)
            products.imagen3 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imagen3.tempFilePath)  
        }
        if (req.files?.imagen4) {
            const uploadCloudinary = await uploadImage(req.files.imagen4.tempFilePath)
            products.imagen4 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imagen4.tempFilePath)  
        }
        if (req.files?.imagen5) {
            const uploadCloudinary = await uploadImage(req.files.imagen5.tempFilePath)
            products.imagen5 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imagen5.tempFilePath)  
        }
        if (req.files?.imgDescripcion1) {
            const uploadCloudinary = await uploadImage(req.files.imgDescripcion1.tempFilePath)
            products.imgDescripcion1 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgDescripcion1.tempFilePath)  
        }
        if (req.files?.imgDescripcion2) {
            const uploadCloudinary = await uploadImage(req.files.imgDescripcion2.tempFilePath)
            products.imgDescripcion2 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgDescripcion2.tempFilePath)  
        }
        if (req.files?.imgDescripcion3) {
            const uploadCloudinary = await uploadImage(req.files.imgDescripcion3.tempFilePath)
            products.imgDescripcion3 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgDescripcion3.tempFilePath)  
        }
        if (req.files?.imgDescripcion4) {
            const uploadCloudinary = await uploadImage(req.files.imgDescripcion4.tempFilePath)
            products.imgDescripcion4 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgDescripcion4.tempFilePath)  
        }
        if (req.files?.imgDescripcion5) {
            const uploadCloudinary = await uploadImage(req.files.imgDescripcion5.tempFilePath)
            products.imgDescripcion5 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgDescripcion5.tempFilePath)  
        }
    
        await products.save();
    
        // console.log(products.image.secure_url)
        // console.log(products.image)
    
        res.redirect("/products-style")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

}

//all products
export async function renderProducts2 (req, res){

    try {
        // res.render("home")
        // res.send("showing products")
        const product = await Product.find().lean();

        res.render("view-all-products", {product})
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }
}

//update products
export async function renderEditForm2 (req, res){
    
    try {
        const products = await Product.findById(req.params.id).lean()
        // console.log(products.image)
        // console.log(products)
        // console.log(req.files, 200)
        res.render("edit_form", {products})
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

}

export async function updateProduct2 (req, res){
    try {
        const {id} = req.params
        // console.log(req.body)
        console.log(req.files, 999)
        const productUpdating = await Product.findByIdAndUpdate(id, req.body, {
          new: true
        })
    
        
        if (req.files != null) {
            if (productUpdating.imagen1?.public_id) {
                const result = await deleteImage(productUpdating.imagen1.public_id)
                // console.log(result,226)
            }
            if (productUpdating.imagen2?.public_id) {
                const result = await deleteImage(productUpdating.imagen2.public_id)
                // console.log(result,226)
            }
            if (productUpdating.imagen3?.public_id) {
                const result = await deleteImage(productUpdating.imagen3.public_id)
                // console.log(result,226)
            }
            if (productUpdating.imagen4?.public_id) {
                const result = await deleteImage(productUpdating.imagen4.public_id)
                // console.log(result,226)
            }
            if (productUpdating.imagen5?.public_id) {
                const result = await deleteImage(productUpdating.imagen5.public_id)
                // console.log(result,226)
            }

            //---DES2CRIPTIONS IMAGES deletes

            if (productUpdating.imgDescricion1?.public_id) {
                const result = await deleteImage(productUpdating.imgDescricion1.public_id)
                // console.log(result,226)
            }
            if (productUpdating.imgDescricion2?.public_id) {
                const result = await deleteImage(productUpdating.imgDescricion2.public_id)
                // console.log(result,226)
            }
            if (productUpdating.imgDescricion3?.public_id) {
                const result = await deleteImage(productUpdating.imgDescricion3.public_id)
                // console.log(result,226)
            }
            if (productUpdating.imgDescricion4?.public_id) {
                const result = await deleteImage(productUpdating.imgDescricion4.public_id)
                // console.log(result,226)
            }
            if (productUpdating.imgDescricion5?.public_id) {
                const result = await deleteImage(productUpdating.imgDescricion5.public_id)
                // console.log(result,226)
            }
        }
        
        if (req.files?.imagen1) {
            // console.log(req.files.image.tempFilePath, 224)  
            const uploadCloudinary = await uploadImage(req.files.imagen1.tempFilePath)
            
            productUpdating.imagen1 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imagen1.tempFilePath)
              
        }
        if (req.files?.imagen2) {
            // console.log(req.files.image.tempFilePath, 224)  
            const uploadCloudinary = await uploadImage(req.files.imagen2.tempFilePath)
            
            productUpdating.imagen2 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imagen2.tempFilePath)
              
        }
        if (req.files?.imagen3) {
            // console.log(req.files.image.tempFilePath, 224)  
            const uploadCloudinary = await uploadImage(req.files.imagen3.tempFilePath)
            
            productUpdating.imagen3 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imagen3.tempFilePath)
              
        }
        if (req.files?.imagen4) {
            // console.log(req.files.image.tempFilePath, 224)  
            const uploadCloudinary = await uploadImage(req.files.imagen4.tempFilePath)
            
            productUpdating.imagen4 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imagen4.tempFilePath)
              
        }
        if (req.files?.imagen5) {
            // console.log(req.files.image.tempFilePath, 224)  
            const uploadCloudinary = await uploadImage(req.files.imagen5.tempFilePath)
            
            productUpdating.imagen5 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imagen5.tempFilePath)
              
        }

        //----descriptions images updates

        if (req.files?.imgDescripcion1) {
            // console.log(req.files.image.tempFilePath, 224)  
            const uploadCloudinary = await uploadImage(req.files.imgDescripcion1.tempFilePath)
            
            productUpdating.imgDescripcion1 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgDescripcion1.tempFilePath)
              
        }
        if (req.files?.imgDescripcion2) {
            // console.log(req.files.image.tempFilePath, 224)  
            const uploadCloudinary = await uploadImage(req.files.imgDescripcion2.tempFilePath)
            
            productUpdating.imgDescripcion2 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgDescripcion2.tempFilePath)
              
        }
        if (req.files?.imgDescripcion3) {
            // console.log(req.files.image.tempFilePath, 224)  
            const uploadCloudinary = await uploadImage(req.files.imgDescripcion3.tempFilePath)
            
            productUpdating.imgDescripcion3 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgDescripcion3.tempFilePath)
              
        }
        if (req.files?.imgDescripcion4) {
            // console.log(req.files.image.tempFilePath, 224)  
            const uploadCloudinary = await uploadImage(req.files.imgDescripcion4.tempFilePath)
            
            productUpdating.imgDescripcion4 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgDescripcion4.tempFilePath)
              
        }
        if (req.files?.imgDescripcion5) {
            // console.log(req.files.image.tempFilePath, 224)  
            const uploadCloudinary = await uploadImage(req.files.imgDescripcion5.tempFilePath)
            
            productUpdating.imgDescripcion5 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgDescripcion5.tempFilePath)
              
        }
        
        //--------Actualizar y Guardar productos

        await productUpdating.save()
    
        res.redirect("/products-style")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }
}

// //Update images
// export async function updateImgProduct (req, res){
    
// }


//delete products
export async function deleteProducts2 (req, res){

    try {
        const eraser = await Product.findByIdAndDelete(req.params.id)
    
        if (!eraser) return res.status(400).json({
            "message": "Product does not exists"
          })
        if (eraser.imagen1?.public_id) {
            const result = await deleteImage(eraser.imagen1.public_id)
            // console.log(result)
        }
        if (eraser.imagen2?.public_id) {
            const result = await deleteImage(eraser.imagen2.public_id)
            // console.log(result)
        }
        if (eraser.imagen3?.public_id) {
            const result = await deleteImage(eraser.imagen3.public_id)
            // console.log(result)
        }
        if (eraser.imagen4?.public_id) {
            const result = await deleteImage(eraser.imagen4.public_id)
            // console.log(result)
        }
        if (eraser.imagen5?.public_id) {
            const result = await deleteImage(eraser.imagen5.public_id)
            // console.log(result)
        }
        if (eraser.imgDescripcion1?.public_id) {
            const result = await deleteImage(eraser.imgDescripcion1.public_id)
            // console.log(result)
        }
        if (eraser.imgDescripcion2?.public_id) {
            const result = await deleteImage(eraser.imgDescripcion2.public_id)
            // console.log(result)
        }
        if (eraser.imgDescripcion3?.public_id) {
            const result = await deleteImage(eraser.imgDescripcion3.public_id)
            // console.log(result)
        }
        if (eraser.imgDescripcion4?.public_id) {
            const result = await deleteImage(eraser.imgDescripcion4.public_id)
            // console.log(result)
        }
        if (eraser.imgDescripcion5?.public_id) {
            const result = await deleteImage(eraser.imgDescripcion5.public_id)
            // console.log(result)
        }
    
        res.redirect("/products-style")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          }) 
    }
}


