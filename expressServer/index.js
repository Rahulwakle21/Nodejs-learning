const express = require('express')
const http =require("http")

const app = express();


app.get("/" , (req,res)=>{
    return res.send("hello from home page")
})
 
app.get("/about" , (req,res)=>{
    return res.send("hello from About page" + req.query.name)
})


const myServer = http.createServer(app)
myServer.listen(8000,()=> console.log("started"))