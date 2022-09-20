import { Router } from "express";
import { renderProdutForm, createNewProduct, renderProducts, renderEditForm, updateProduct, deleteProducts, renderJsonProducts, updateImgProduct } from "../controllers/index.controllers.js";
import { renderProdutForm2, createNewProduct2, renderProducts2, renderJsonProducts2, renderEditForm2, updateProduct2, deleteProducts2 } from "../controllers/products.controllers.js"
import { renderJsonPortadas, renderPortadasForm, createNewPortada, renderPortadas, renderEditPortadaForm, updatePortadas, deletePortadas } from "../controllers/portadas.controllers.js"

const router = Router();

router.get("/", renderProducts2)

//new products
router.get("/products/add", renderProdutForm)

router.post("/products/add", createNewProduct)

//get all product(s)
router.get("/products", renderProducts)

router.get("/api", renderJsonProducts2)

router.get("/products/add/:id", renderProdutForm)

//edit products
router.get("/products/edit/:id", renderEditForm)

router.put("/products/edit/:id", updateProduct)

router.put("/products/edit/img/:id", updateImgProduct)

//delete products
router.delete("/products/delete/:id", deleteProducts)

//-------------------------------------------------

//New routes styles


// router.get("/", renderProducts2)


router.get("/api2", renderJsonProducts)
//new products
router.get("/products-style/add", renderProdutForm2)

router.post("/products-style/add", createNewProduct2)

//get all product(s)
router.get("/products-style", renderProducts2)

//edit products
router.get("/products/edit-style/:id", renderEditForm2)

router.put("/products/edit-style/:id", updateProduct2)

// router.put("/products/edit/img-style/:id", updateImgProduct2)

// //delete products
router.delete("/products/delete-style/:id", deleteProducts2)


//ROUTES OF PORTADAS

router.get("/api3", renderJsonPortadas)
//new products
router.get("/portadas-style/add", renderPortadasForm)

router.post("/portadas-style/add", createNewPortada)

//get all product(s)
router.get("/portadas-style", renderPortadas)

//edit products
router.get("/portadas/edit-style/:id", renderEditPortadaForm)

router.put("/portadas/edit-style/:id", updatePortadas)

// router.put("/products/edit/img-style/:id", updateImgProduct2)

// //delete products
router.delete("/portadas/delete-style/:id", deletePortadas)


export { router }

