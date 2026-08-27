// For Letter Grade

function getGrade(marks){
    if (marks > 100 || marks < 0){
        console.log("Invalid Marks")
    }
    else if (marks <= 100 && marks >= 90){
        console.log("A+")
    }
    else if (marks < 90 && marks >= 80){
        console.log("A")
    }
    else if (marks < 80 && marks >= 70){
        console.log("B")
    }
    else if (marks < 70 && marks >= 60){
        console.log("C")
    }
    else if (marks < 60 && marks >= 50){
        console.log("D")
    }
    else if (marks < 50){
        console.log("Fail")
    }
}
// getGrade(87)
// getGrade(3)
// getGrade(103)

// একটি সংখ্যা Positive, Negative অথবা Zero কিনা Nested Ternary Operator ব্যবহার করে বের করো।
function numberType(num){
    console.log((num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero")
}
// numberType(0)

//একটি switch ব্যবহার করে আজকের দিনের নাম return করো।
function today(){
    let today = new Date().getDay()
    switch (today){
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Turesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thusday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
    }
}
// console.log(today())

// Calculator Function তৈরি করো যেখানে Operator (+ - * / %) switch দিয়ে Handle করতে হবে।

function whatDo(num1, num2, operator){
    switch (operator){
        case "+":
            console.log(num1 + num2)
            break
        case "-":
            console.log(num1 - num2)
            break
        case "*":
            console.log(num1 * num2)
            break
        case "/":
            console.log(num1 / num2)
            break
        case "%":
            console.log(num1 % num2)
            break
    }
}
// whatDo(12,2, "+")
// whatDo(12,2, "-")
// whatDo(12,2, "*")
// whatDo(12,2, "/")
// whatDo(12,2, "%")

//Leap Year Check করো কিন্তু Nested if ব্যবহার করা যাবে না।

function leapYear(value){
    if (value % 400 === 0){
        console.log(value + " is leap year")
    }
    else if(value % 4 === 0 && value % 100 !== 0 ){
        console.log(value + " is leap year")
    }
    else {
        console.log(value + " is not leap year")
    }
}
// leapYear(2024)

/////////////////             Loop + Nested Loop               ///////////////
//১ থেকে ১০০ পর্যন্ত এমন সংখ্যা print করো যেগুলো ৩ এবং ৫ উভয় দ্বারা বিভাজ্য।
function divisible35(num){
    for (let i = 1; i <= num; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log(i)
        }
    }
}
// divisible35(100)

//১ থেকে N পর্যন্ত Prime Number print করো।

// At first checkt it is a prime or not
function isPrime(num){
    if (num < 2){
        return false
    }

    for (let i = 2; i < num; i++){
        if (num % i === 0){
            return false
        }
    }
    return true
}

// print prime number if upper functions was passed
let totalCount = 30
for (let i = 1; i <= totalCount; i++){
    if (isPrime(i)){
        // console.log(i)
    }
}

// another method
function printPrimes(n){
    for (let num = 2; num <= n; num++){
        let isPrime = true
        for (let i = 2; i < num; i++){
            if(num % i === 0){
                isPrime = false
                break
            }
        }
        if (isPrime){
            console.log(num)
        }
    }
}
// printPrimes(11)

//একটি সংখ্যার সব Factor বের করো।
function findFactor(num){
    let result = []
    for ( let i = 1; i <= num; i++){
        if (num % i === 0){
            result.push(i)
        }
    }
    return result
}
// console.log(findFactor(12))

// efficient approach
function factors(num){
    let result = []
    for (let i = 1; i * i <= num; i++){
        if (num % i === 0){
            result.push(i)
            if (i !== num / i){
                result.push(num / i)
            }
        }
    }
    return result.sort((a, b) => a - b)
}
// console.log(factors(16))

// একটি সংখ্যা Perfect Number কিনা বের করো।
function isPerfect(num){
    // if num = 1, then sum = 1. then it's return true. But 1 is not a perfect number.
    if (num < 2){
        return false
    }
    let sum = 1
    for (let i = 2; i * i <= num; i++){
        if (num % i === 0){
            sum += i
            if (i !== num / i){
                sum += (num / i)
            }
        }
    }
    return sum === num
}
// console.log(isPerfect(6))
// console.log(isPerfect(30))
// console.log(isPerfect(-4))

// একটি সংখ্যা Armstrong Number কিনা বের করো।
///                            ((((((((    chatGPT ratting this code 10/10      ))))))))
function isArmstrong(num){
    let digit = num.toString().split('').map(Number)
    let numLength = digit.length
    let sum = 0
    for (let item of digit){
        sum += (item**numLength)
    }
    return sum === num
}
// console.log(isArmstrong(153))

//                         Make some Pattern usint loops
// Pattern 01
function patternOne(n){
    for (let i = 1; i <= n; i++){
        let pattern = ""
        for (let j = 1; j <= i; j++){
            pattern += "*"
        }
        console.log(pattern)
    }
}
// patternOne(5)

// Patter 02
function patternTwo(n){
    for (let i=1; i <= n; i++){
        let pattern = ""
        for (let j=n; j >= i; j--){
            pattern += "*"
        }
        console.log(pattern)
    }
}
// patternTwo(5)

// Pattern 03
function patternThree(n){
    for (let i = 1; i <= n; i++){
        let pattern = ""
        for (let j = 1; j <= i; j++){
            pattern += j
        }
        console.log(pattern)
    }
}
// patternThree(5)

// Pattern 04
function patternFour(n){
    for (let i = 1; i <= n; i++){
        let pattern = ""
        // for space
        for (let x = 1; x <= n - i; x++){
            pattern += " "
        }
        // Star
        for (let j = 1; j <= (2 * i -1); j++){
            pattern += "*"
        }
        console.log(pattern)
    }
}
patternFour(5)
