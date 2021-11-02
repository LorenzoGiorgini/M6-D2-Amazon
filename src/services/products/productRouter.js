import { Router } from "express";
import productsHandlers from "../products/productEndpoints.js"

const router  = Router();

router.get("/" , productsHandlers.getAllProducts)

router.post("/", productsHandlers.postNewProduct)

router
    .route("/:id")
        .put(productsHandlers.updateProduct)
        .delete(productsHandlers.deleteProduct)
        .get(productsHandlers.getProductById)

export default router