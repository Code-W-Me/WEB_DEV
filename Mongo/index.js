const mongoose = require('mongoose');

main().then(()=>{
    console.log("connetion is succesfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const UserSchema = new mongoose.Schema({
    name:String,
    email: String,
    age:Number,
});
const User = mongoose.model("User",UserSchema);
User.deleteOne({name: "Bruce"})
.then(res =>{
  console.log(res);
})
// User.findById("67d43cf500b5f3359b5aa995")
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// }); 
// User.insertMany ([
//     { name: "Tony", email: "tony@gmail.com", age: 50},
//       { name: "Bruce", email: "bruce@gmail.com", age: 47},
//       { name: "Peter", email: "peter@gmail.com", age: 30}, ])
//       .then((res) => { 
//       console.log(res); 
//     });
    

    // const user2 =new User({
    //     name: "vansh",
    //     email: "vansh123@gmail.com",
    //     age: 21,
    // });
    // user2.save();