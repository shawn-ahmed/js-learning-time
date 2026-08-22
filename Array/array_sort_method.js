/////  some js method change the original array. But if you want don't change original array then you can try [...Array].method(). This is create a new array. //////

let fruits = ["Mnago","Banana",'Watermelon',"Blueberry","Orange"]

let num1 = [100, 20, 4, 14]
console.log(num1.sort((a,b) => {return b - a}))

// const products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 800 },
//   { name: "Keyboard", price: 1500 },
//   { name: "Monitor", price: 18000 }
// ];
// console.log(products)

/*
let stdnt = [
    {name:"Sagor", marks:82},
    {name:"Limon", marks:64},
    {name:"Anis", marks:74},
    {name:"Javed", marks:54}
];
stdnt.sort((a,b) => a.marks - b.marks)  // Low marks to High marks
console.log(stdnt)

stdnt.sort((a,b) => b.marks - a.marks)  // Low marks to High marks
console.log(stdnt)

stdnt.sort((a,b) => a.name.localeCompare(b.name))  // Alphabetically sort
console.log(stdnt)   */

let fruits1 = fruits.toSorted()
console.log(fruits1)

console.log(fruits.reverse())
console.log(fruits.toReversed())
console.log(fruits)

/*
const users = [
    { name: "Rajib", age: 25 },
    { name: "Karim", age: 18 },
    { name: "Alim", age: 30 }
];

let ageSorted = users.toSorted((a,b) => a.age - b.age)
console.log(ageSorted)

let nameSorted = users.toSorted((a,b) => a.name.localeCompare(b.name))
console.log(nameSorted)
*/

const numbers = [10, 20, 5, 30, 3];
// console.log(Math.min(...numbers))

let min = numbers[0]             //  Home made minimum 
let max = numbers[0]             // home made maximun

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min){
        min = numbers[i]
    }
    if (numbers[i] > max){
        max = numbers[i]
    }
}
console.log("Minimum = " + min)
console.log("Maximum = " + max)

// array sum
let sum = 0
for (let i=0; i<numbers.length; i++){
    sum += numbers[i]
}
console.log("Sum = " + sum)
// Only Even number sum           // For see Array numbers = [10, 20, 5, 30, 3];
let evenSum = 0
for (let i=0; i<numbers.length; i++){
    if (numbers[i]%2 === 0){
        evenSum += numbers[i]
    }
}
console.log(evenSum)
// find data
let find = 100
let isFound = false
for (let i=0; i<numbers.length; i++){
    if (numbers[i] === find){
        console.log("Data found at Index : " + i)
        isFound = true
        break;
    }
}
if(!isFound){
    console.log("Data not found")
}
// for reversing array              // For see Array numbers = [10, 20, 5, 30, 3];
for(let i=0; i < Math.floor(numbers.length / 2); i++){
    let temp = numbers[i];
    numbers[i] = numbers[numbers.length - 1 - i]
    numbers[numbers.length - 1 - i] = temp 
}
console.log(numbers)
console.log(numbers.reverse())




