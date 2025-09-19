const mongoose = require("mongoose");
const {schema} = mongoose;

main()
.then(()=> console.log("connection succesful"))
.catch((err)=> console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new mongoose.Schema ({
    username: String,
    addresses: [
        {
            location : String,
            city : String
        }
    ]
});
const User = mongoose.model("User",userSchema);
const addUsers = async()=>{
    let user1 = new User({
        username: "sherlocockholmes",
        addresses: [{
            location : "221B Baker Street",
            city : "London"
        }]
    })
    User.addresses.push({
        location : "P32 WallStreet",
        city : "London"
    });
    let result = await user1.save();
    console.log(result);
}
// addUsers();