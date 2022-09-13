import { Router } from "express";
import { renderProdutForm, createNewProduct, renderProducts, renderEditForm, updateProduct,deleteProducts, renderJsonProducts, updateImgProduct } from "../controllers/index.controllers.js";
import methodOverride from "method-override"

const router = Router();

router.get("/", renderProducts)

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

router.put("/products/edit/img/:id", updateImgProduct)

//delete products
router.delete("/products/delete/:id", deleteProducts)

export { router }

