// my map function
function myMap(arr, callback){
    let result = []
    for (let i = 0; i < arr.length; i++){
        result.push(callback(arr[i], i, arr))
    }
    return result
}

let numbers = [1, 2, 3, 4, 5];
let result = myMap(numbers, function(num, index) {
    return num + index;
});
// console.log(result);


/////////                       নিজের myFilter() Function তৈরি করো।
function myfilter(arr, callback){
    let result = []
    for (let i = 0; i <= arr.length; i++){
        
        if (callback(arr[i], i, arr)){
            result.push(i)
        }
    } 
    return result
}
// console.log(myfilter([3,4,5], (value) => value >= 4))

////////                     নিজের myFind() Function তৈরি করো।
function myFind(arr, callback){
    for (let item = 0; item < arr.length; item++){
        if (callback(arr[item], item, arr)){
            return arr[item]
        }
    }
    return undefined
}
// console.log(myFind([3,4,5], (n) => n > 4))

////////                     নিজের myReduce() Function তৈরি করো।
function myReduce(arr, callback, initalValue){
   let accumulator = initalValue
   for (let i = 0; i < arr.length; i++){
        accumulator = callback(accumulator, arr[i], i, arr)
   }
   return accumulator
}
// console.log(myReduce([3,4,5], (n, v) => n + v, 0))

//                          দুটি Array Compare করে Common Element বের করো।
function checkCommon(arr1, arr2){
    let result = new Set()
    for (let outer of arr1){
        for (let inner of arr2){
            if (outer === inner){
                result.add(inner)
                break
            }
        }
    }
    return [...result]
}
let arr1 = [2,3,4,5]                //don't remove this 2 array
let arr2 = [5,3,7, 2 ,8]

// console.log(checkCommon(arr1, arr2))

//              দুটি Array Compare করে Unique Element বের করো।

function checkUnique(arr1, arr2){
    let result = []
    for (let item of arr1){
        if (!arr2.includes(item)){
            result.push(item)
        }
    }
    for (let item of arr2){
        if (!arr1.includes(item)){
            result.push(item)
        }
    }
    return result
}

// console.log(checkUnique(arr1, arr2))

//                                   একটি Array Rotate করো।
function rightRotate(arr, k) {
  k = k % arr.length;

  return arr.slice(-k).concat(arr.slice(0, -k));
}

const arrx = [1, 2, 3, 4, 5];

console.log(rightRotate(arrx, 2));
// [4, 5, 1, 2, 3]

//////////               একটি Array Chunk করো।

function chunk(arr, k){
    let result = []
    for (let i = 0; i < arr.length; i=i+k){
        result.push(arr.slice(i, i+k))
    }
    return result
}

let arrForChunk = [2,3,4,5,6,7,8,12]
console.log(chunk(arrForChunk, 3))

///                        একটি Nested Array Flatten করো।
function flatten(arr){
    let result = []
    for (let item of arr){
        if (Array.isArray(item)){
            result.push(...flatten(item))
        } else {
            result.push(item)
        }
    }
    return result
}
let arrFlatten = [1,[3, 4, [5]]]

console.log(flatten(arrFlatten))










