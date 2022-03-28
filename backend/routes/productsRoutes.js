import { Router } from "express";
import {
  getProducts,
  getProduct,
  createtProducts,
  deleteProducts,
  updateProducts,
} from "../controller/productsControllers.js";

const productRoutes = Router();

productRoutes.get("/products", getProducts);

productRoutes.get("/products/:id", getProduct);

productRoutes.post("/products", createtProducts);

productRoutes.delete("/products/:id", deleteProducts);

productRoutes.put("/products/:id", updateProducts);

export default productRoutes;
