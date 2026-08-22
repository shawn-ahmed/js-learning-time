///////////////////////////////////
/////   myMap() Function   ////////
///////////////////////////////////

// let arr01 = [2,3,4,5,6]
// let double = arr01.map(num => num*2)
// console.log(double)

// I create a template for map function
function myMap(arr, callback){
    let result = []
    let index = 0
    for (let item of arr){
        result.push(callback(item, index, arr))
        index++
    }
    return result
}
// Then declear arr and function
let arr3 = [3,5,3]
let newArr3 = myMap(arr3, function(num, index) {
    return index + " : " + num * 2
})
// console.log(newArr3)

let arr = [5,6,7]
let newArr = myMap(arr, (num) => num * 2)
// console.log(newArr)

// let arr2 = [3,4,6]
// let newArr2 = myMap(arr2, "heloo")   // It's show an error. Because "heloo" isn't a funcion
// console.log(newArr2)


//////////////////////////////////////
////   myFilter() function   /////////
//////////////////////////////////////

// Create a template of filter functon
function myFilter(arr, callback) {
    let result = []
    for (let item of arr){
        if (callback(item) === true){result.push(item)}
    }
    return result
} 

let array = [2,3,5,4,6,8,5]
let result = myFilter(array, (num) => num > 5)
// console.log(result)

////////////////////////////////////
////   myFind() function   /////////
////////////////////////////////////

function myFind(arr, callback){
    for(let find of arr){
        if (callback(find)){
            return find
        }
    }
    return undefined
}

let ar = [9,3,5,7,2,8]
let findEle = myFind(ar, (num => num > 3))
// console.log(findEle)

////////////////////////////////////
////   myReduce() function   /////////
////////////////////////////////////

function myReduce(arr, callback, initialValue){
    let accumulator = initialValue;
    for (let item of arr){
        accumulator = callback(accumulator, item)
    }
    return accumulator
}
let r = [3,2,5,6,8]
let sumR = myReduce(r, (total, num) => total + num, 0)
// console.log(sumR)

let max = myReduce(r, (max, num) => max > num ? max : num, 0)
// console.log(max)

// forEach function created by me

let ar0r = [2,3,5]

function myForEach(array, callback){
    let index = 0
    for (let item of array){
        callback(item, index, array)
        index++
    }
}

myForEach(ar0r, function(value, ind, ar0r) {
    // console.log(arr)
})




