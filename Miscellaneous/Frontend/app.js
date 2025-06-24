// let arr = [1, 2, 3, 4];
// arr.sayHello = ()=> {
//     console.log("hello, i am an array");
// };
// function PersonMaker(name, age){
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hi, my name is ${this.name} `);
//         }
//     };
//     return person;
// }
function Person(name, age) {
    this.name = name;
    this.age = age;
    }
    Person.prototype.talk = function () {
    console.log(`Hi, my name is ${this.name}`);
    };
    let p1 = new Person("adam", 25);
    let p2 = new Person("eve", 25);