///////////////////////////////////
///////    Math Funscton    ///////
///////////////////////////////////

// console.log(Math.E)
// console.log(Math.PI)

// let x = 4.268

// console.log(Math.round(x))   //  Returns x rounded to its nearest integer
// console.log(Math.ceil(x))    //  Returns x rounded up to its nearest integer
// console.log(Math.floor(x))   //  Returns x rounded  to its nearest integer

// console.log(Math.pow(2, 3))
// console.log(Math.sqrt(81))

// let a = -3.59
// console.log(Math.abs(a))

// console.log(Math.max(30,43, 32,12,46))
// console.log(Math.min(30,43, 32,12,46))
 
    ///////////////////////////////////
    ///////    Date Funscton    ///////
    ///////////////////////////////////

let date = new Date()
// console.log(date.toDateString())
// console.log(date.toTimeString())
// console.log(date.toLocaleString())
// console.log(date.toLocaleTimeString())
// console.log(date.toLocaleDateString())

// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())
// console.log(date.getDay())

// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds() + " sec")

// const d = new Date("2021-2-18")
// console.log( d.getYear() - 100)

// console.log(date)
// date.setMonth(10)
// console.log(date.getMonth())

// date.setDate(25)
// console.log(date.getDate())

    //// Deffirence of two date  /////

// let date1 = new Date("2016-04-12")
// let date2 = new Date("2016-04-07")
// let deff = date1 - date2

// console.log(deff / (1000 * 60 * 60 * 24))

//////////// Previous 7 days   /////////////

// date.setDate(date.getDate() - 7)
// console.log(date)

////////////////////////////////////////////

// =============    বয়স বের করার পদ্ধতি   ==========

let birthYear = 2004
let currentYear = date.getFullYear()
let age = currentYear - birthYear
console.log(`Your are ${age} Years old.\nYour next age is ${age + 1}`)








