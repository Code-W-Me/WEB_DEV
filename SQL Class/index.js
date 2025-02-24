const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const  express = require("express");
const app = express();
const path = require("path");

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

const connection = mysql.createConnection({
 host : 'localhost',
    user : 'root',
    database : 'delta_app',
    password: "YashVeer",
});
let getRandomUser = ()=> {
    return [
       faker.string.uuid(),
       faker.internet.userName(), // before version 9.1.0, use userName()
       faker.internet.email(),
       faker.internet.password(),
    ];
  };



app.get("/",(req,res)=>{
    let q = `select count(*) from user`;

try {connection.query(q,(err,result)=>{
    if(err) throw err;
    let count =result[0]["count(*)"];
    res.render("home.ejs",{count});
});
}catch(err){
    console.log(err);
    res.send("some error in DB");
}
});
app.get("/user",(req,res)=>{
    let q = `select * from user`;

try {connection.query(q,(err,users)=>{
    if(err) throw err;
    // res.send(result);
    res.render("showuser.ejs",{users});
    
});
}catch(err){
    console.log(err);
    res.send("some error in DB");
}
});
//edit Route
app.get("/user/:id/edit",(req,res) => {
    let {id} = req.params;
    let q = `SELECT FROM user WHERE userId = '${id}'`;

    try {connection.query(q,(err,result)=>{
        if(err) throw err;
        let user = result[0];
        res.render("edit.ejs",{user});   
    });
    }catch(err){
        console.log(err);
        res.send("some error in DB");
    }
});


app.listen("8080",() =>{
    console.log("server is listening to port 8080");

});

    // connection.end();




  