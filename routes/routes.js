import { Router } from "express";
import { renderProdutForm, createNewProduct, renderProducts, renderEditForm, updateProduct,deleteProducts, renderJsonProducts } from "../controllers/index.controllers.js";
import methodOverride from "method-override"

const router = Router();

router.get("/", (req, res) => {
    res.render("Home");
})

//new products
router.get("/products/add", renderProdutForm)

router.post("/products/add", createNewProduct)

//get all product(s)
router.get("/products", renderProducts)

router.get("/api", renderJsonProducts)

router.get("/products/add/:id", renderProdutForm)

//edit products
router.get("/products/edit/:id", renderEditForm)

router.put("/products/edit/:id", updateProduct)

//delete products
router.delete("/products/delete/:id", deleteProducts)

export { router }

