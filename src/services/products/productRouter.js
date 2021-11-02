import { Router } from "express";
import productsHandlers from "../products/productEndpoints.js"


//upload image
import multer from 'multer';
import { CloudinaryStorage } from "multer-storage-cloudinary"
import { v2 as cloudinary } from "cloudinary"

const router  = Router();

const cloudinaryStorage = new CloudinaryStorage({
	cloudinary,
	params: {
		folder: "Product-Folder"
	}
})

router.get("/" , productsHandlers.getAllProducts)

router.post("/",  multer({storage: cloudinaryStorage}).single("image_url") , productsHandlers.postNewProduct)

router
    .route("/:id")
        .put(multer({storage: cloudinaryStorage}).single("image_url"),productsHandlers.updateProduct)
        .delete(productsHandlers.deleteProduct)
        .get(productsHandlers.getProductById)

export default router