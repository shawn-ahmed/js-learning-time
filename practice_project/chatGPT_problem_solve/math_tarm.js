//////////////////////////////////////////////////
///  একটি সংখ্যা Perfect Number কিনা বের করো।   ///
//////////////////////////////////////////////////

function findPerfect(n){
    // find factor number
    let factor = []
    for (let i = 1; i <= n; i++){
        if (n%i === 0){
            factor.push(i)
        }
    }
    // remove last Index
    let otherValue = factor.toSpliced(-1, 1)

    // sum of array without last index
    let sum = 0
    for (let i = 0; i < otherValue.length; i++){
        sum += otherValue[i]
    }

    //check this is perfect or not
    if (sum === n){
        return n + " is Perfect number"
    }
    else{
        return "This is not perfect number"
    }
}

console.log(findPerfect(28))  // Output

// Alternative way with very simplyfy

function isPerfectNum(number) {
    let sum = 0
    for (let i = 1; i < number; i++){
        if (number % i === 0){
            sum += i
        }
        return sum === number
    }
}
console.log(isPerfectNum(6))

/////////////////////////////////////////////////////
///  একটি সংখ্যা Armstrong Number কিনা বের করো।   ///
/////////////////////////////////////////////////////

function isArmstrong(number){
    let arr = [...String(number)].map(Number)
    let arrSum = 0
    for (let i = 0; i < arr.length; i++){
        let a = arr[i]**arr.length
        arrSum += a
    }
    return arrSum === number
}

console.log(isArmstrong(153))

// let x = "sdfrw"
// console.log(x.toString().split(""))
// console.log([...String(x)])

// alternative way with while loop
function isArmstrongNumber(n) {
    let original = n;
    let digits = n.toString().length;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum += digit ** digits;
        n = Math.floor(n / 10);
    }

    return sum === original;
}

console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(123)); // false


