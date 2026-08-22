
//  Library function for String

/* let text1 = "Banglasdesh"

console.log( text1 +" has a " + text1.length + " letter")
console.log(text1.charAt(3))
console.log(text1.at(3))

console.log(text1.slice(7, 9))

console.log(text1.toUpperCase())
console.log(text1.toLowerCase())
console.log(text1.toLowerCase())

let text2="hello"
let text3="I'm shawn"
console.log(text2.concat(" ", text1, " ", text3))     */


let newText1 = "I am"
let newText2 = "Shawn Ahmed"
let newText3 = newText1.concat(" ", newText2) 

console.log(newText3.slice(-11, -6))
console.log(newText2.length)

console.log(newText2[1])            // when index number not found it's return Undefined
console.log(newText2.charAt(1))     // when index number not found it's return  Empty String (" ") & not support Neg Index
console.log(newText2.at(1))         // This modern Method & it's support Neg Index

console.log(newText2.includes("med"))    // Exist or not (result boolean type)

console.log(newText2.indexOf("o"))
console.log(newText1.lastIndexOf('am'))

console.log(newText2.replace("Ahmed", "Forayezi"))

let name = "Shawn Ahmed"
let length = 0
while (true){
    if (name.charAt(length) == "d"){
        break
    } else{length++}
}
console.log(length)
