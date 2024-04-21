import express from "express"
import { config } from "dotenv"
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectToMongoDb.js"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js";


const app=express()


config()
const PORT=process.env.PORT ||5000  

app.use(express.json())  //parse jsonpayload (from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/messages", messageRoutes)

app.listen(PORT,()=>{
    connectToMongoDB()
console.log(`server runninmg on ${PORT}`)
})