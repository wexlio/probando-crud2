
import Product from "../models/product.model.js"
// import {uploadImage, deleteImage} from "../utils/cloudinary.js"
import fs from "fs-extra"
// import {v2 as cloudinary} from "../utils/cloudinary.js"

//new products
export function renderProdutForm (req, res){
    res.render("form_and_products")
    
}

export async function createNewProduct (req, res){
    
    const { title, price } = req.body;

    console.log(req.files)

    const product = new Product ({
        title, 
        price,
    })

    

    await product.save();

    res.send("creating products")
}

//all products
export async function renderProducts (req, res){
    // res.render("home")
    // res.send("showing products")
    const product = await Product.find().lean();
    res.render("Home", {product})
}

//update products
export function renderEditForm (req, res){
    // res.render("form_and_products")
    res.send("updating products")
}

export function updateProduct (req, res){
    // res.render("form_and_products")
    res.send("updating products")
}

//delete products
export function deleteProducts (req, res){
    // res.render("Home")
    res.send("deleting products")
}


