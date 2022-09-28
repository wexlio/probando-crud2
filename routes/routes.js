import { Router } from "express";
import { renderProdutForm, createNewProduct, renderProducts, renderEditForm, updateProduct, deleteProducts, renderJsonProducts, updateImgProduct } from "../controllers/index.controllers.js";
import { renderProdutForm2, createNewProduct2, renderProducts2, renderJsonProducts2, renderEditForm2, updateProduct2, deleteProducts2 } from "../controllers/products.controllers.js"
import { renderJsonPortadas, renderPortadasForm, createNewPortada, renderPortadas, renderEditPortadaForm, updatePortadas, deletePortadas } from "../controllers/portadas.controllers.js"
import { renderCategoriasForm, createNewCategoria, renderCategorias, renderEditCategoriasForm, updateCategorias, deleteCategorias } from "../controllers/categorias.controllers.js"
import { renderConfigsForm, createNewConfigs, renderConfigs, renderEditConfigsForm, updateConfigs, deleteConfigs } from "../controllers/configs.controllers.js"
import { viewPage } from "../controllers/viewPage.controllers.js"

const router = Router();

// router.get("/", renderProducts2)

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

//ROUTES OF CATEGORIAS

// router.get("/api3", renderJsonCategorias)
//new products
router.get("/categorias-style/add", renderCategoriasForm)

router.post("/categorias-style/add", createNewCategoria)

//get all product(s)
router.get("/categorias-style", renderCategorias)

//edit products
router.get("/categorias/edit-style/:id", renderEditCategoriasForm)

router.put("/categorias/edit-style/:id", updateCategorias)

// router.put("/products/edit/img-style/:id", updateImgProduct2)

// //delete products
router.delete("/categorias/delete-style/:id", deleteCategorias)

//ROUTES OF configs

// router.get("/api3", renderJsonCategorias)
//new configs
router.get("/configs-style/add", renderConfigsForm)

router.post("/configs-style/add", createNewConfigs)

//get all configs(s)
router.get("/configs-style", renderConfigs)

//edit configs
router.get("/configs/edit-style/:id", renderEditConfigsForm)

router.put("/configs/edit-style/:id", updateConfigs)

// router.put("/products/edit/img-style/:id", updateImgProduct2)

// //delete configs
router.delete("/configs/delete-style/:id", deleteConfigs)


// View page 

router.get("/", viewPage)



export { router }

