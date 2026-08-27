let person = {
    name : "shawn",
    age : 23,
    address : {
        city : "Noakhali",
        country : "Bangladesh"
    }
}
let {name, age, address: {city, country}} = person 

console.log(name, age, city, country)