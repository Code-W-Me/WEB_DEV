const mongoose = require("mongoose");
const Schema = mongoose.Schema;

main()
.then(()=> console.log("connection succesful"))
.catch((err)=> console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}
const orderSchema = new mongoose.Schema ({
    items : String,
    price : Number,
});

const customerSchema = new mongoose.Schema ({
    name : String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref:"Order",
        },
    ],
});

const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);

const addCustomer = async() =>{
    let cust1 = new Customer({
        name: "Rahul Kumar",
    });
    let order1 = await Order.findOne({items : "VadaPav"});
    let order2 = await Order.findOne({items : "PavBhaji"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result = await cust1.save();
    console.log(result);
};
addCustomer();


// const addOrders = async() =>{
//   let res = await Order.insertMany([
//         {items : "PavBhaji", price: 50},
//         {items : "VadaPav", price: 10},
//         {items : "Dosa", price: 50}
//     ]);
//     console.log(res);
// }
// addOrders();
