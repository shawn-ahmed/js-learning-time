let person = [
    {
        name : "Sojib",
        age : 24
    },
    {
        name : "Jaker",
        age : 19
    },
    {
        name : "Abid",
        age : 21
    },
    {
        name : "Jabed",
        age : 23
    }
]
let number = [2,-3,-8,0,4,5,4,7,-1,6]

let newArr = person.toSorted((a, b) => (a.name).localeCompare(b.name))
console.log(newArr)
let newAgeArr = person.toSorted((a, b) => (a.age) - (b.age))
console.log(newAgeArr)
let newNumber = number.toSorted((a,b) => a - b)
console.log(newNumber)

let numForSome = number.some((a) => a === 0)
console.log(numForSome)    // if at least one item match the condition. Then it's retuen true

let numForEvery = number.every((value) => value >= 0)
console.log(numForEvery)   // all items match the condiiton. Other wise it's return False.






