const { contentType } = require("express/lib/response");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

main()
.then(()=> console.log("connection succesful"))
.catch((err)=> console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}
const userSchema = new mongoose.Schema ({
    username : String,
    email: String
});

const postSchema = new mongoose.Schema({
    content : String,
    likes : Number,
    user : {
        type : Schema.Types.ObjectId,
        ref: "User"
    }
})

const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);

const addData = async() =>{
    let user = await User.findOne({username :"rahul_Kumar"});
    let post2 = new Post({
        content :"Bye Bye",
        likes : 2
    });
    post2.user = user;
    await post2.save();

}
addData();