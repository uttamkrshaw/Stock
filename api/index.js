require('dotenv').config()
const express = require("express")
const connection = require("./db/connection")
const app = express()

app.use(express.json())
app.use("/api/v1",require("./routes/api"))

app.get("/",(req,res)=>{
    res.json({status:"Success",msg:"Welcome To Stock Tutor Backend!"})
})

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`Server is Up & Running At Port ${process.env.port}`);
    } catch (error) {
        console.log(error)
    }
})