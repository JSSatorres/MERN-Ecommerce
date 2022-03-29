import morgan from "morgan";
import fileUpload from "express-fileupload"
import productRoutes from "./routes/productsRoutes.js";
import express from "express";
import cors from "cors"

const app = express();
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"./upload"
}))

app.use(productRoutes);

export default app;
