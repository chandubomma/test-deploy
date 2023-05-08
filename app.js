require('dotenv').config()

const express =require("express");
const app = express();
const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`server runnung on port : ${port}`);
})

app.get('/',(req,res)=>{
    res.status(200).send('<h1>Hello!, from Chandu Bomma</h1>')
})

