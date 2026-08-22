// Character Count
let str = "programming"
let count = {}
for (let char of str){
    // যদি এই অক্ষর আগে থেকেই Object-এ থাকে
    if (count[char]){
        count[char]++
        // তাহলে সংখ্যা ১ বাড়াও
    } else {
        // না থাকলে প্রথমবার এসেছে, তাই ১ দিয়ে শুরু করো
        count[char] = 1
    }
}
for (let key in count){
    // Character এবং কতবার এসেছে তা প্রিন্ট করো
    console.log(`${key} : ${count[key]}`)
}

////////////////////////////////////////////////////
///  একটি String-এ কতটি vowel আছে বের করো।   ///
///////////////////////////////////////////////////
function vowelCount(str){
    let count = 0
    for (let v of str.toLowerCase()){
        // if (v == "a" || v == "e" || v == "i" || v == "o" || v =="u" ){
        //     count++
        // }

        // another method
        if ("aeiou".includes(v)){count++}
        
    }
    return "Vowel : " + count
}
console.log(vowelCount("Golam Mostafa"))

/////////////////////////////////////////////////////////
///  একটি Array-তে কয়টি Even Number আছে বের করো।   ///
/////////////////////////////////////////////////////////
let arr = [2, 3, 6, 12, 15, 11, 24, 18]
let evenCount = 0
for (let even of arr){
    if (even%2 === 0){
        evenCount++
    }
}
console.log("Count Even Number from array: "+ evenCount)

///////////////////////////////
//////   Sum of Array   ///////
///////////////////////////////
let sumForArray = [5, 10, 15, 20]
let sumOfArray = 0
for (let sum of sumForArray){
    sumOfArray += sum
}
console.log("Sum of Array : " + sumOfArray)

// Alternative code
for (let i = 0; i < sumForArray.length; i++){
    sumOfArray += sumForArray[i]
}
                // !IMPORTANT: Don't console twice sumOfArray. Run only one console of this section
//console.log(sumOfArray)  

////////////////////////////////////////////
///  Array-এর সবচেয়ে বড় সংখ্যা বের করো   ///
////////////////////////////////////////////
function findLargestNum(){
    let number = [12, 15, 11, 24, 38, 18]
    let max = number[0]
    for (let largest of number){
        if (largest > max){
            max = largest
        } 
    }
    return max
}
console.log(findLargestNum())

// another method
function findMax(){
    let arr = [5, 10, 15, 20]
    let max = arr[0]
    for (let i = 0; i <= arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
console.log(findMax())

/////////////////////////////////////
///  String উল্টো করে প্রিন্ট করো।   ///
/////////////////////////////////////
function reverseStr(str){
    let name = "shawn"
    let reverse =""
    for (let rev of str){
        reverse = rev + reverse
    }
    return reverse
}
console.log(reverseStr("Bangladesh"))

// Using for loop
let rWord = "shawn"
let reverse = ""
for (let i = rWord.length -1; i >= 0; i--){
    reverse += rWord[i]
}
//console.log(reverse)

////////////////////////////////////////////////////////////
///  একটি Sentence-এ প্রতিটি Word কতবার এসেছে বের করো   ///
////////////////////////////////////////////////////////////

function wordCount(){
    let text = "cat dog cat bird cat dog"
    let newText = text.split(" ")
    let wordObj = {}
    for (let count of newText){
        if (wordObj[count]){
            wordObj[count]++
        }
        else {wordObj[count] = 1}
    }
    for (let key in wordObj){
        console.log(`${key} : ${wordObj[key]}`)
    }
}
wordCount()

///////////////////////////////////////////////////
///  Object-এর সব Subject-এর Mark প্রিন্ট করো।   ///
///////////////////////////////////////////////////
function printMark(){
    let marks = {
        "Math": 80,
        "English": 75,
        "ICT": 95
    }
    for (let key in marks){
        console.log(`${key} : ${marks[key]}`)
    }
}
printMark()

//////////////////////////////////
///  find Duplicate Characters  ///
//////////////////////////////////
function duplicateChar(){
    let word = "banana"
    let obj = {}
    for (let count of word){
        if (obj[count]){
            obj[count]++
        }
        else {obj[count] = 1}
    }
    for (let key in obj){
        if (obj[key] >= 2){
            console.log("Duplicate Leter : " + key)
        }
    }
}
duplicateChar()

/////////////////////////////////////////////
///  Count Positive and Negative Numbers  ///
/////////////////////////////////////////////
function negOrPos(){                    // এটি সম্পূর্ন আমার চেষ্টা ///
    let num = [-5, 8, -2, 6, 0, 9, -1]
    let numObj = {}
    let posArr = []
    let negArr = []
    let zeroArr = []
    for (let value of num){
        if (value > 0){
                numObj['positive'] = posArr.push(value)
            }
        else if (value < 0 ){
            numObj['negative'] = negArr.push(value)
        }
        else{
            numObj['zero'] = zeroArr.push(value)
        }
    }
    for (let key in numObj){
        console.log(`${key} : ${numObj[key]}`) 
    }
}
// negOrPos()           // Output is comment

/////   Help in charGPT  // Another method    ////////////
function negOrPos2(){
    let num = [-5, 8, -2, 6, 0, 9, -1]
    let positive = 0
    let negative = 0
    let zero = 0
    for (let value of num){
        if (value > 0){
                positive++
            }
        else if (value < 0 ){
            negative++
        }
        else{
           zero++
        }
    }
    console.log("Positive : " + positive)
    console.log("Negative : " + negative)
    console.log("zero : " + zero)
}
negOrPos2()

let test_01 = (() => {
    let arr = [1,-3,5,0,-5,-2,0,2,3]
    let posSum = 0
    for (let index of arr){
        if(index < 0){
            posSum += index
        }
    }
    console.log(posSum)
})()


///////////////////////////////////////////////////////////////
///  একটি String-এ প্রথম Non-Repeating Character বের করো।  ///
///////////////////////////////////////////////////////////////

function nRepChar(){
    let word = "aacdde"
    let obj = {}
    for (let char of word){
        // if (obj[char]) {
        //     obj[char]++
        // }
        // else {obj[char] = 1}

        obj[char] = (obj[char] || 0) + 1
    }
    // যদি আমাকে সব Non-Repeating Character বের করতে বলা হয় তাহলে in loop চলাবে/
    // for (let key in obj){
    //     if (obj[key] == 1){
    //         console.log(key)
    //     }
    // }
    
    for (let char of word){
        if (obj[char] === 1){
            return char
        }
    }
}
console.log(nRepChar())
