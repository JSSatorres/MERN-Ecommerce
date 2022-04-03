import morgan from "morgan";
import fileUpload from "express-fileupload";
import productRoutes from "./routes/productsRoutes.js";
import express from "express";
import cors from "cors";

const app = express();
const whitelist = ["http://localhost:3002"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf === -1) {
      callback(null, true);
    } else {
      callback(new Error("not allowed by CORS"));
    }
  },
};
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);

app.use(productRoutes );

export default app;
