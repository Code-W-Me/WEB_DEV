// console.log("hello world");
// console.log("Yash Veer")
// let a=2;
// let b=3;
// console.log("sum is:",a+b);
// let pencilPrice=20;
// let penPrice=15;
// console.log(` the total price is: ${pencilPrice + penPrice} rupees`)

// conditional statement

// let firstName = "Yash"
// if (firstName =="Yash"){
//     console.log(`Welcome ${firstName}`)
// }
// const obj = {
//     1:"a",
//     2:"v",
//     null:"C",
//     undefined:"f",

// };
// const Student ={
//     name: "Yash",
//     age: 23,
//     City:"Delhi"
// }
// const Data = {
//     yash :{
//         Grade: "A++",
//         City:"Delhi",
//     },
//     Kartik :{
//         Grade : "A++",
//         City: "Sangli",
//     },
//     Nitesh :{
//         Grade : "A++",
//         City: "Jalgaon",
//     }
// }
//Q 1.to create the function to get sum 1 to n.
// function getSum(n){

//     let sum = 0;
//     for (let i=1; i<=n;i++){
//         sum += i;
//     }
//     return sum;
// }
// Q 2.create function that returns the concatenation of all strings in a array.
    // let str = ["hi","hello","bye","!"];

    // function  concat(str){
    //     let result= "";
    //     for(let i= 0; i<=str.length; i++){
    //         result += str[i];
    //     }
    //     return result;
    // }
// function oddOrEvenFactory(request){
//     if(request=="odd"){
//         let odd = function(n){
//             console.log(!(n%2==0));
//         }
//         return odd;
//     }else if(request = "even"){
//         let even  = function(n){
//             console.log(n%2==0);
//         }
//         return even;
//     }else{
//         console.log("Wrong answer");
//     }
// }
//     let request  = "odd";

// Implementing code using "this" Keyword
    // const Student={
    //     name:"yash",
    //     age:21,
    //     eng:90,
    //     math:88,
    //     phy:99,
    //     getAvg(){
    //         let avg =(this.eng + this.math + this.phy) / 3;
    //     console.log(avg); 
    //     }
        
    // }
    // Set Timeout
        // console.log("Hi there");
        // setTimeout (() => {
        //     console.log("Apna college");
        // }, 4000);
        // console.log("Welcome to");

// let firstName = "Yash"
// if (firstName =="Yash"){
//     console.log(`Welcome ${firstName}`)
// }

// let form = document.querySelector("form");
//     form.addEventListener("submit",function(event){
//         event.preventDefault();
//         let user = document.querySelector("#user");
//         let pass = document.querySelector("#pass");
//         console.log(user.value);
//         console.log(pass.value);
//     });
// function saveToDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4){
//             resolve("success : data was saved ");
//         }else{
//             reject("failure : weak connection");
//         }
//     });
// }

// saveToDb("apna college")
// .then(()=>{
//     console.log("data1 saved");
//     return saveToDb("helloworld");
// })
// .then(()=>{
//     console.log("data2 saved");
// })
// .catch(()=>{
//     console.log("promise was rejected");
// });

    // async function greet(){
    //     throw "weak Connection";
    //     return "hello!";
    // }
    // greet()
    // .then((result)=>{
    //     console.log("promise was resolved:",result);
        
    // })
    // .catch((err)=>{
    //     console.log("promise was rejected with an error:",err);
    // })
    function getNum(){
        //create new promise
        return new Promise((resolve,reject)=>{
            //setting up timeout
            setTimeout(()=>{
                let num = Math.floor(Math.random() *10)+1;
                console.log(num);
                // after calling random num call resolve if possible 
                resolve();
            },1000)
        });
    }
        // async function were used to call getNum function with awaits keyword
    async function demo() {
    // await keyword is used to hold each function for specific time period.(in this 1s)
        await getNum();
        await getNum();
        await getNum();
        await getNum();
        await getNum();
        await getNum();
        await getNum();
        await getNum();
        getNum();
    }