import express from "express"
import { config } from "dotenv"
import connectToMongoDB from "./db/connectToMongoDb.js"
import authRoutes from "./routes/auth.routes.js"

const app=express()


config()
const PORT=process.env.PORT ||5000  

app.use(express.json())  //parse jsonpayload (from req.body)
app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    connectToMongoDB()
console.log(`server runninmg on ${PORT}`)
})