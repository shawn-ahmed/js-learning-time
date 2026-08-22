let num1 = 21;
let num2 = 32;
let num3 = 81;

const result = num1 > num2 && num1 > num3 ? "A is grater then all" : num2 > num1 && num2 > num3 ? "B is grater than all" : "C is greter then all";

console.log(result)

///  Negative or positive number check

let num = -9;  // you can change this number
console.log(num > 0 ? "This is positive number" : num < 0 ? "This is negative number" : "This is Zero")

// Even OR Odd check
let x = 0
console.log(x%2 === 0 && x >= 1 ? `${x} is even number` : x === 0 ? "This is Zero" : x + " is odd number")

///////////////////////////
let a = 23
let b = 23
console.log((a>b) ? a + " is greater than " + b : (a ==b ) ? "They both are equal" : `${a} is less than ${b}`)

