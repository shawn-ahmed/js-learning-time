/* 
function Student(name, age, cgp){
    this.name = name;
    this.age = age;
    this.cgp = cgp;
    }

let student1 = new Student("shawn", 23, 3.45)
console.log(student1.name) 
*/ 
// Object literal
let student1 = {
    name : "Shawn",
    class : 8,
    roll : 21,
    address : {
        distric : "Noakhali",
        upozilla : "Senbagh",
        village : "South-Manikpur"
    }
}
console.log(student1.address.upozilla)

// Object Constructor
let obj1 = new Object()
obj1.name = "Alif"
obj1.roll = 26
obj1.address = "Noakhali"
console.log(obj1)

// Constructor Function
function Stdnt(name, age){
    this.name = name;
    this.age = age;
}
let stdnt1 = new Stdnt("Abir", 13)
let stdnt2 = new Stdnt("Jakir", 17)
console.log(stdnt1)

//factory function
function createStdnt(name, age){
    return {
        name,
        age
    }
}
let student01 = createStdnt("Jamil", 23)
console.log(student01)

// ES-6 class
class Person {
    constructor (name, age){
        this.name = name;
        this.age = age
    }
}
let p1 = new Person("Jasim", 26)
console.log(p1)

// How to access key, if key had space  /////
let person = {
    "full name" : "Saiful Islam",
    "parmanent-address" : "Senbagh, Noakhali"
}
console.log(person["full name"])  // This is the way
console.log(person["parmanent-address"])  // This is the way

// let obj01 = {
//     name,
//     age,
//     gender,
// }
// console.log(obj01)

// Dynamic Property
const key = "email";
const user = {};
user[key] = "rahim@gmail.com";

console.log(user);
/////////////////////////////////////////
let yourEmail = "gmshawn@gmail.com"
let userInfo = {
    "user name" : "shawn",
    gmail : yourEmail,
}
console.log(userInfo["user name"])
console.log(userInfo.gmail)
//////////////////////////////////////////

let objLoop = {
    name : "Sagor",
    age : 24,
    country : "Bangladesh"
}
let output = "";
for (let x in objLoop){
    output += objLoop[x] + " "
}
console.log(output)

console.log("country" in objLoop)
console.log(objLoop)

// Object.entries()
let prsn = {
    name : "Jabir",
    age : 25,
    city : "New York"
}
console.log(Object.entries(prsn))  //output [ [ 'name', 'Jabir' ], [ 'age', 25 ], [ 'city', 'New York' ] ]

for ([propertyName, propertyValue] of Object.entries(prsn)){
    console.log(propertyName, propertyValue)
}

// Object.values()
console.log(Object.keys(prsn))
console.log(Object.values(prsn))

let prsn2 = Object.assign({}, prsn)
console.log(prsn2)