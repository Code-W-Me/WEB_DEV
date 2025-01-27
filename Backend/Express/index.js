const express = require("express");
const app = express();
// 
    let port = 3000;
    app.listen(port,() =>{
        console.log(`app is lisenting on port: ${port}`);
    });
    app.get("/", (req,res)=>{
        res.send("you contacted to root path");
    });
    app.get("/apple", (req,res)=>{
        res.send("you contacted to apple path");
    });
    app.get("/orange", (req,res)=>{
        res.send("you contacted to orange path");
    });
    app.get("*", (req,res)=>{
        res.send("this path does not exist");
    });
    // app.use ((req,res)=>{
    //     console.log("requset granted");
    //     // res.send("Kaunse color ki chaddi pehni hai? hmm!");
    // })
    