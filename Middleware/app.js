const express = require("express");
const app = express();
const  ExpressError = require("./ExpressError");

app.get("/", (req,res)=>{
    res.send();
});

app.listen(8080,()=>{
    console.log("Server is listening to port 8080");
});