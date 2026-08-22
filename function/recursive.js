function sayHi(n){
    if (n === 0){
        return
    }
    console.log("HI! I am calling")
    sayHi(n-1)

}
sayHi(6)

//////
function sum(n){
    if (n === 1){
        return 1
    }
    return n + sum(n-1)
}
console.log(sum(3))

function fact(n){
    if (n === 1){
        return 1
    }
    return n * fact(n-1)
}

console.log(fact(4))

let arr = [3,4,2,6,4]
function sumOfArr(array, lastIndex){
    if (lastIndex < 0){
        return 0
    }
    return arr[lastIndex] += sumOfArr(array, lastIndex - 1)
}
console.log(sumOfArr(arr, arr.length -1))








