const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.get("/",(req,res)=>
{
    res.send("Hello world")
});

app.get('/twitter',(req,res) =>{

    res.send("Aditya Matkar");
});

app.get('/login',(req,res)=>
{
    res.send("<h1>Pls Login at chai Aur Code</h1>")
})

app.get("/youtube",(req,res)=>
{
    res.send("<h2>Chai Aur Code</h2>")
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is listenign on POrt ${port}`);
});