/////////////////////////////////
///   Construction function   ///
/////////////////////////////////

function User(name, age){
  this.name = name
  this.age = age

  // this function is declar in this object. When I crete a Object from this templet, this functin is automacally excute and use more memory.
  this.say = function (){
    return "Hello! I am " + this.name
  }
}

let user1 = new User("Azad", 22)

console.log(user1)
console.log(user1.say())

///////////////////////////////////////////
function Person(name, roll){
  this.name = name
  this.roll = roll

  // Now I set a method in Person prototype. Not in Person Object
  Person.prototype.sayHello = function (){
    console.log(`Hello, I called by ${this.name} from Person prototype`)
  }
}

let person1 = new Person("Samir", 3)
console.log(person1)

person1.sayHello()

