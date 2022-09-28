import Product from "../models/product.model.js"
import Portada from "../models/portada.model.js"
import Categoria from "../models/categoria.model.js"
import Configs from "../models/configs.model.js"


// export async function viewPage (req, res) {

//     try {
        
//         const products = await Product.find().lean()

//         res.render("view-page", {products})

//     } catch (error) {
//         console.log("error ptm")
//     }

// }

export async function viewPage (req, res) {
    try {
        
        res.redirect("/index.html")

    } catch (error) {
        console.log("error ptm")
    }
}

