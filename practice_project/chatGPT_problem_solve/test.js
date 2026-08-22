// forEach function created by me

let arr = [2,3,5]

function myMap(array, callback){
    let result = []
    let index = 0
    for (let item of array){
        result.push(callback(item, index, array))
        index++
    }
    return result
}

let newArr = myMap(arr, (x) => x+5)

console.log(newArr)
///////////////////////////////////////////////
function myReduce(arr, callback, initialValue){
    let result = initialValue
    for (let item of arr){
        result = callback(result, item)
    }
    return result
}

console.log(myReduce(arr, ((max, value) => max > value ? max : value), 0))
console.log(myReduce(arr, ((max, value) => Math.max(max, value)), 0))







