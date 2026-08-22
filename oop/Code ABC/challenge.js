function HouseRent(rent){
    this.rent = rent
}
HouseRent.prototype.nowRent = function (){
    return this.rent
}

HouseRent.prototype.increse = function (amount){
    this.rent += amount
}

HouseRent.prototype.decrese = function (amount){
    if (amount > 0){
        this.rent -= amount
    }
}

// static method
HouseRent.sayInfo = function (){
    console.log("my house rent is " + this.rent)
}

let newRent = new HouseRent(3500)
console.log(newRent.nowRent())

newRent.decrese(200)
console.log(newRent.nowRent())

newRent.increse(400)
console.log(newRent.nowRent())

//////////////////\\\\\\\\\\\\\\\\\\\
// class declar methods

class Salary{
    #salary;
    constructor(name, amount){
        this.name = name
        this.#salary = amount
    }

    increseSalary (amount){
        this.#salary += amount
    }

    decreseSalary (amount){
        this.#salary -= amount
    }

    nowSalary(){
        return "Now your salary is " + this.#salary
    }

}

const forJaved = new Salary("Javed", 12000)
console.log(forJaved)       // salary donn't show. Because the salary was a private. 
console.log(forJaved.nowSalary())

forJaved.increseSalary(3000)
console.log(forJaved.nowSalary())


