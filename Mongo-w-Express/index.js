const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./Models/chat.js");

app.set("views",path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

main()
.then(()=>{
    console.log("connection seccesful");
})
.catch((err)=> console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Messenger');
}
// let chat1 = new Chat({
//     from : "Yash",
//     to : "Kartik",
//     msg : "transferring message from yash to kartik",
//     created_at : new Date(),

// });
// chat1.save().then((res)=>{
//     console.log(res);

app.get("/chats", async (req,res) =>{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});

app.get("/",(req,res)=>{
    res.send("root is working");
})
app.listen(8080,()=>{
    console.log("Server is listening on port 8080");
});