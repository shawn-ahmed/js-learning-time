// ১ থেকে ১০০ পর্যন্ত এমন সংখ্যা print করো যেগুলো ৩ এবং ৫ উভয় দ্বারা বিভাজ্য।
/*
for (let i = 1; i <= 100; i++){
    if (i%3 === 0 && i%5 === 0){
        console.log(i)
    }
}
*/
//  ১ থেকে N পর্যন্ত Prime Number print করো।
/*
let num = 10
for (let i = 2; i <= num; i++){
    let isPrime = true;
    for (let j = 2; j < i; j++){
        if (i%j === 0){
            isPrime = false
            break
        }
    }
    if (isPrime){
        console.log(i)
    }
}
*/

////////////////////////////////////////////////////
/////    একটি সংখ্যার সব Factor বের করো।    ////////
////////////////////////////////////////////////////

let digit = 12
let factorNum = []
for (let i = 1; i <= digit; i++){
    let isFactor = false
    for (let j = i; j <= i; j++){
        if (digit % j === 0){
            isFactor = true
            break
        }
    }
    if (isFactor){
        factorNum.push(i)
    }
}
console.log(factorNum)

///  Another Method for find Factor
function findFactor(n){
    let factor = []
    for (let i = 1; i <= n; i++){
        if (n % i === 0){
            factor.push(i)
        }
    }
    return factor
}
console.log(findFactor(12))

//   Alternative for big Integer
function seeFactor (number){
    let factor = []
    for (let i=1; i*i <= number; i++){
        if (number%i === 0){
            factor.push(i);

            if (i !== number / i){
                factor.push(number / i)
            }
        }
    }return factor.sort((a,b) => a -b) 
}
console.log(seeFactor(112))
////////   DONE   //////  CLOSE   ////////





