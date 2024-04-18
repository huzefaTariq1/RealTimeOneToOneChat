import express from "express"
import { config } from "dotenv"
const app=express()


config()
const PORT=process.env.PORT ||5000  

app.get("/",(req,res)=>{
res.send("hello")
})

app.listen(PORT,()=>console.log(`server runninmg on ${PORT}`))