// function create for Addition

function addition(a, b){
    result = a + b
    return result
}

console.log(addition(2, 5))

// IIFE function
let hi = (function(){
    console.log("Hello")
})

let hello = (() => {
    console.log("hiiiiiii")
})()

let sum = ((x, y) => {
    console.log(x+y)
})(2,5)

/*
((x,y) => {
    console.log(x+y)
})(4,7)

(function (x,y){
    console.log(x*y)
})(2,5)

(function diaplay(message){
    console.log(message)
})("hello")

*/
///////////////////////////////////////////////////////////////////////////////////

// function argument

let arr1 = [1,3,5]
let arr2 = [7,6,9]
let arr3 = [4,2,7]
let arr4 = ["s","3",7]

let sum1 = 0
for (let i = 0; i < arr1.length; i++){
    sum1 += arr1[i]
}
console.log(sum1)

function sumArr(a){
    let sum = 0
    for (let i = 0; i < a.length; i++){
        sum += a[i]
    }
    console.log(sum)
}
sumArr(arr4)

///////////////////////////////////////
///////     ARGUMENT OBJECT    ////////
///////////////////////////////////////
function sumAll(){
    let sum = 0
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    // return sum;
    console.log(sum)
}
// let sumetion = sumAll(2,4,1,4)
// console.log(sumetion)

sumAll(2,4,5,2)  // You can probide any number




