let student = {
    name : "shawn",
    age : 24,
    address : {
        city : "Noakhali",
        village : "South Manikpur"
    }
}
console.log(student.address.city)
console.log(student.name)
console.log(student["name"])

let key = "country"
let person = {
    name : "Azad",
    [key] : "Bangladesh"
}
console.log(person[key])





