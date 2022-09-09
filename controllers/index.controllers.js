
import Product from "../models/product.model.js"
import {uploadImage, deleteImage} from "../utils/cloudinary.js"
import fs from "fs-extra"
// import {v2 as cloudinary} from "../utils/cloudinary.js"
import methodOverride from "method-override"


//new products
export function renderProdutForm (req, res){
    res.render("form_and_products")
    
}

export async function createNewProduct (req, res){
    
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

    res.redirect("/products")
}

//all products
export async function renderProducts (req, res){
    // res.render("home")
    // res.send("showing products")
    const product = await Product.find().lean();
    res.render("Home", {product})
}

//update products
export async function renderEditForm (req, res){
    const products = await Product.findById(req.params.id).lean()
    console.log(products.image)
    console.log(products)
    res.render("edit_form", {products})
}

export async function updateProduct (req, res){
    const {id} = req.params
    const productUpdating = await Product.findByIdAndUpdate(id, req.body, {
      new: true
    })
    console.log(productUpdating)  
    // console.log(req.body)
    // console.log(id)
    res.redirect("/products")
}

//delete products
export async function deleteProducts (req, res){
    console.log(req.params)
    // Product.findByIdAndDelete(req.params.id)

    const eraser = await Product.findByIdAndDelete(req.params.id)
    const result = await deleteImage(eraser.image.public_id)
    
    console.log(result)

    res.redirect("/products")
}


