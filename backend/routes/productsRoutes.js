import { Router } from "express";
import { getProducts,getProduct,createtProducts,deleteProducts,updateProducts } from "../controller/productsControllers.js";

const router = Router();

router.get("/products",getProducts)

router.get("/products/:id",getProduct)

router.post("/products",createtProducts)

router.delete("/products/:id",deleteProducts)

router.put("/products/:id",updateProducts)

export default router;



