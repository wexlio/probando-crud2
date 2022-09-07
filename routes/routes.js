import { Router } from "express";
import { renderProdutForm, createNewProduct, renderProducts, renderEditForm, updateProduct,deleteProducts } from "../controllers/index.controllers.js";

const router = Router();

router.get("/", (req, res) => {
    res.render("Home");
})

//new products
router.get("/products/add", renderProdutForm)

router.post("/products/add", createNewProduct)

//all products
router.get("/products", renderProducts)

//edit products
router.get("/products/edit:id", renderEditForm)

router.put("/products/edit/:id", updateProduct)

//delete products
router.delete("products/delete/:id", deleteProducts)

export { router }

