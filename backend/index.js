import app from "./server.js"
import {PORT} from "./config/config.js"
import {connectDB} from "./db/db.js"


connectDB()



app.listen(PORT, ()=>console.log("listening",PORT))