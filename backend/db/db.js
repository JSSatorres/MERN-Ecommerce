import mongoose from "mongoose"
import { MONGO_URI } from "../config/config.js";


export async function connectDB (){
    try{
        const ProductDB  = await mongoose.connect()
        console.log("conecto to db ", ProductDB.connection.name );
    }catch(error){
        console.error(error);
    }
}