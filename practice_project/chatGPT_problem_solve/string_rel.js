
// একটি String-এর প্রতিটি Character কতবার এসেছে তা বের করো।
function repeatStrCount(str){
    let obj = {}
    let word = str.split("")
    for(let letter of word){
        if (obj[letter] !== undefined){
            obj[letter] += 1
        }
        else {
            obj[letter] = 1
        }
    }
    for (let key in obj){
        console.log(`${key} : ${obj[key]}`) 
    }
}
// repeatStrCount("banana")

//                  একটি String-এর সব Duplicate Character বের করো।
function findDuplicateChar(str){
    let obj = {}
    for (let char of str){
        if (obj[char]){
            obj[char] += 1
        }
        else {
            obj[char] = 1
        }
    }
    for (let key in obj){
        if (obj[key] > 1){
            console.log(key)
        }
    }
}
let str = "programming"
// findDuplicateChar(str)

//              একটি Sentence-এর প্রতিটি Word Reverse করো কিন্তু Sentence-এর Word Order পরিবর্তন করা যাবে না।
function reverseSen(sentence){
    let words = sentence.split(" ")
    let reversedWord = ""
    for (let word of words){
        let resultForWord = ""
        for (let i = word.length -1 ; i >= 0; i--){
            resultForWord += word[i]
        }
        reversedWord += (resultForWord + " ")
    }
    return reversedWord.trim()
}

let sentence = "I love javaScript"
// console.log(reverseSen(sentence))

//                          একটি Array-এর Missing Number বের করো।
function findMissingNum(arr){
    let expectedSum = 0
    for (let i = 1; i <= arr[arr.length - 1]; i++){
        expectedSum += i
    }
    let actualSum = 0
    for (let item of arr){
        actualSum += item
    }
    if (expectedSum !== actualSum){
        return expectedSum - actualSum
    }
    else {
        return "Nothing is missing"
    }
}

let arr = [1,2,4,5]
// console.log(findMissingNum(arr))