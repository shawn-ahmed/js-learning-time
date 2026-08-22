
let a = 23;
let b = 3.43556
let str = "32.653"
//     // This is return number as a String
// console.log(b.toString())
// console.log(b.toFixed(2))   // 3.44
// console.log(b.toPrecision(2))  // 3.4
// console.log((4232).toExponential(1))  // 4.23e+1

//     // this is return number as a number(when the number is a string)
// console.log(Number(str))
// console.log(parseInt(str))
// console.log(parseFloat(str))

// console.log(Number.parseInt(str))
// console.log(Number.parseFloat(str))

// ////======= ANOTHER CHAPTER ========
// This is concatenent chapter

let text1 = "I'm "
let text2= 22 
let text3= " year's old "

console.log(text1 + text2 + text3)
console.log((text1.concat(text2)).concat(text3))
console.log(text1.concat(text2, text3))
// Without var call & concatenent
console.log("I'm " + 22 + " year's old")

//String Template Literal
console.log(`I'm ${text2} ${text3}`)

