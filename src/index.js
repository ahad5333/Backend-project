//require('dotenv').config({path:'./env'})
// more improved version of dotenv
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({

    path:"./env"
})


connectDB().then(()=>{
    app.listen(process.env.PORT||3000);
    console.log("server is running at port:")
})
.catch((err)=>{
    console.log("mongo db connection failed !!", err)
})











/*import express from "express";

const app = express()
;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}}`)
        app.on("error",(error)=>{
            console.log("errr:", error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is litening on port${process.env.PORT}`)
        })
        
    } catch (error) {
        console.log("Error:" ,error)
        throw error
        
    }
})()*/