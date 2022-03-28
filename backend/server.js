import morgan from "morgan";
import productRoutes from "./routes/productsRoutes.js";
import express from "express";

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use(productRoutes);

export default app;
