import mongoose from "mongoose";
import { DB_Name } from "../constants.js";
const connectDB = async ()=>{
    try{
       const connectionInstance = await mongoose.connect(`mongodb+srv://ahad123:ahad123@cluster0.yzzikh2.mongodb.net/${DB_Name}`);

       console.log(`\n Mongodb connected !! db host: ${connectionInstance.connection.host}`);

    }catch(error){
        console.log("mongodb connection Failed",error);
        process.exit(1)
    }

}
export default connectDB;