import mongoose from "mongoose"
import { MONGO_URI } from "../config/config.js";


export async function connectDB (){
    try{
        const ProductDB  = await mongoose.connect(MONGO_URI)
        // console.log("conecto to db ", ProductDB.connection.name );
        console.log("conecto to db ");
    }catch(error){
        console.error(error);
    }
}