import morgan from "morgan"
import router from "./routes/productsRoutes.js"
import express from"express"

const app = express()
app.use(express.json())
app.use (morgan("dev"))

app.use(router)

export default app;