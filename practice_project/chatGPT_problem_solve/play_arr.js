////////////////////////////////////////////////////////////////////////////////////////
////   একটি Function লিখো যেটা Infinite সংখ্যক Argument-এর Sum Return করবে।   /////////
////////////////////////////////////////////////////////////////////////////////////////

function infiniteSum (...numbers){
    let sum = 0
    for(let argument of numbers){
        sum += argument
    }
    return sum
}

// console.log(infiniteSum(20,30,10))

// another method
function infiSum (...args){
    return args.reduce((sum, number) => sum + number, 0)
}
// console.log(infiSum(20,10,30))

// another method
function infiTotal(...args){
    let total = 0
    for (let i of args){
        total += i
    }
    return total
}
// console.log(infiTotal(2,3,4,5))

////////////////////////////////
////   2nd largest number   ////
////////////////////////////////
let arr0 = [5,9,2,4,6,8]
function secondLargest(arr){
    let largest = arr[0]
    let secondLargest = arr[0]
    for (let num of arr){
        if (num > largest){
            secondLargest = largest
            largest = num
        } else if (num > secondLargest && num < largest){
            secondLargest = num
        }
    }
    return secondLargest

}
// console.log(secondLargest(arr0))

////////////////////////////////
////   2nd largest number   ////
////////////////////////////////
function secSmallest(arr){
    let smallest = arr[0]
    let secSmallest = arr[0]
    for (let num of arr){
        if (num < smallest){
            secSmallest = smallest
            smallest = num
        }
        else if (num < secSmallest && num > smallest){
            secSmallest = num
        }
    }
    return secSmallest
}
// console.log(secSmallest([3,7,9,2,6]))

/////////////////////////////////////
////   একটি Array Rotate করো।   ////
/////////////////////////////////////

function rotateArr(arr, k){
    let n =  arr.length
    // k = k % n    // for unnessary rotate reduces
    let rotate = arr.slice(n-k).concat(arr.slice(0, n-k))
    return rotate
}

// console.log(rotateArr([1,2,3,4,5], 2))

/////////////////////////////////////
////   একটি Array Chunk করো।   ////
/////////////////////////////////////

function chunkArr(arr, size){
    let genArr = []
    for (let i = 0; i < arr.length; i += size){
        genArr.push(arr.slice(i, i + size))
    }
    return genArr
}
// console.log(chunkArr([2,3,4,5,6,7,8], 3))

/////////////////////////////////////////////
////   একটি Nested Array Flatten করো।   ////
/////////////////////////////////////////////

function flatNesArr(arr){
    let result = []
    for (let item of arr){
        if (Array.isArray(item)){
            result.push(...flatNesArr(item))
        }
        else {
            result.push(item)
        }
    }
    return result
}
let nesArr = [1,[2,3],[4,[5]]]
// console.log(flatNesArr(nesArr))

/////////////////////////////////
////   Array Shuffle করো।   ////
////////////////////////////////

function shuffleArray(arr){
    let result = [...arr]
    for (let i = result.length -1; i > 0; i--){
        const randomIndex = Math.floor(Math.random() * (i + 1))

        const temp = result[i];
        result[i] = result[randomIndex];
        result[randomIndex] = temp;
    }

    return result
}
let shArr = [2,3,4,5,7]
console.log(shuffleArray(shArr))
console.log(shuffleArray(shArr))
console.log(shuffleArray(shArr))
console.log(shuffleArray(shArr))





