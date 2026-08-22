class Person{
    #age;
    constructor(name, age){
        this.name = name
        this.#age = age
    }
    get age(){
        return this.#age
    }
    set age(value){
        if (value > 0){
            return this.#age = value
        }
    }
}

let p1 = new Person("Azad", 21)

console.log(p1.age)

p1.age = 23
console.log(p1.age)

////////////////////////////////////////////
/////         Getter and Setter       ///// 
////////////////////////////////////////////

// getter

class user{
    constructor (name){
        this._name = name
    }
    get name(){             // get name() এটি-ই হলো Getter
        return this._name
    }
}
let user1 = new user("Jabed")
console.log(user1._name)
console.log(user1.name)
// Note: এইখানে get use করাতে name function আর ফাংশন নেই, তাই একে কল করার সময় property আকারে কল করতে হয়। 





