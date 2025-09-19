<<<<<<< HEAD
=======
// let  arr = [1,2,3,4,5,6];
// arr.forEach( function(ele){
//     console.log(ele);
// });

// Maps

// let num = [1,2,3,4];
// let double  =num.map((ele)=>{
//     return ele * 2;
// })
// let num = [1,2,3,4,5];
// let double = num.map((ele)=>{
//     return ele * ele;
// })

//Filters

// let num = [1,2,3,4,5,6,7,8,9,10,11,12];
//     let ans = num.filter((ele) =>
// {
//     return ele % 2 ==1; // odd condition would be true and even would be false
// })

//Reduce

// let num = [1,2,3,4];
// let finalValue = num.reduce((res, ele) => res +ele
// );
// console.log(finalValue);

//Problem

//let arr = [1,2,3,,2,4,3,5,9];
// let max = 0;
// for (let  i =0; i<arr.length;i++){
//     if (max <arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

// problem with reduce

// let max = arr.reduce((max,ele)=>{
//     if (max <ele){
//         return ele;
//     }else{
//         return max;
//     }
// });

//Practice prolem

// let num = [10,20, 30, 40, 50];
// let ans = num.every((ele) => ele % 10==0);
// console.log(ans);

// distructuring

// let names = ["Tony","Bruce","amilly","Brock","anna","clay"];
// let [winner,runnerup,secondrunnerup,...other] = names;

// Distructuring in objects

const student ={
    name : "yash",
    age : 21,
    subjects : ["maths", "English", "Hindi"],
    username : "yashveer3422@gmail.com",
    password : "anbdsf",
};
let {username,password} = student;
>>>>>>> 4cb6e13493d12959ac1639b560468b3ac3a4703c
