class Animal{
    constructor (name){
        this.name = name
    }

    eat(){
        console.log(`${this.name} is eating`)
    }
    makeSound(){
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)
        this.name = name
    }
    makeSound(){
        console.log(`${this.name} is bark with Woof!`) // oberride the makeSound method
    }
    legs(){
        console.log(this.name + " has 4 legs")
    }
}
let dog = new Dog("dog")
dog.makeSound()
dog.eat()
dog.legs()