
// Some method of creting Object
// object literal
let p1 = {
    name : "Selim",
    age : 24
}

// new Object
let p2 = new Object()
p2.name = "Alif"
p2.age = 21
console.log(Object.values(p2))

//Construction Function
function user(name, age){
    this.name = name
    this.age = age
}
let p3 = new user("Abir", 25)
let p4 = new user("Baser", 21)
console.log(p3)

// Class
class person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
let p5 = new person("Alamin", 19)
console.log(p5)


