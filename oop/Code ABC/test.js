class User{
    constructor (name, age){
        this.user = name
        this.age = age
    }

    setAge(value){
        if (value >= 0){
           return this.age = value
        }
        else {return "Age cannot be negative"}
    }
    getAge(){
        return this.age
    }
}

let user1 = new User("Hasan", 20)
console.log(user1.getAge())

console.log(user1.setAge(-3))
