const mongoose = require("mongoose");
const Chat = require("./Models/chat.js");


main()
.then(()=>{
    console.log("connection seccesful");
})
.catch((err)=> console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Messenger');
}


let allchats = [
    {
        from : "Nitesh",
        to : "Himanshu",
        msg : "messeges has been sending to data",
        created_at : new Date(),
    },
    {
        from : "Anurag",
        to : "Nikunj",
        msg : "messeges has been sended to Bhai",
        created_at : new Date(),
    },
    {
        from : "Putin",
        to : "Prajwal",
        msg : "messeges has been sended to prajwal",
        created_at : new Date(),
    }

]
Chat.insertMany(allchats);
