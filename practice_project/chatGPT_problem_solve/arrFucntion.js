//   map() use

//   map() ব্যবহার করে সব Number-এর Square বের করো।
let arr1 = [2,3,4,5]
let squareArr1 = arr1.map((value) => value * value)
// console.log(squareArr1)

//                                                      chatGPT Problem
// Problem 01
const users = [
  { name: "Rahim", age: 22, skills: ["JS", "React"] },
  { name: "Karim", age: 17, skills: ["Python"] },
  { name: "Jamal", age: 25, skills: ["Java", "Spring", "SQL"] }
];
let modiUsers = users.map(function (user){
    let text = `${user.name} is ${user.age} years old and knows ${user.skills.length} ${user.skills.length === 1 ? "skill" : "skills"}`
    return text
})
// console.log(modiUsers)

// Problem 02
const products = [
  { name: "Laptop", price: 80000, quantity: 2 },
  { name: "Phone", price: 30000, quantity: 3 },
  { name: "Mouse", price: 1500, quantity: 5 }
];
let detailsProduct = products.map(function (product){
    return  `${product.name} : ${product.quantity} x ${product.price} = ${product.quantity * product.price}`
})
// console.log(detailsProduct)

// problem 03
const students = [
  { name: "Rahim", marks: 85 },
  { name: "Karim", marks: 62 },
  { name: "Jamal", marks: 45 },
  { name: "Hasan", marks: 90 }
];

let result = students.map(function (student){
    function getGrade(marks){
        if (marks >= 80){
            return "A"
        }
        else if (marks >= 60){
            return "B"
        }
        else {
            return "C"
        }
    }
    // getGrade(student.marks)

    return {
        name : student.name,
        marks : student.marks,
        grade : getGrade(student.marks)
    }
})
console.log(result)






