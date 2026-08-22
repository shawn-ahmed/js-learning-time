let date = new Date()
let today = date.getDay()

switch(today){
    case 0:
        console.log(`Today is Sunday`)
        break
    case 1:
        console.log(`Today is Monday`)
        break
    case 2:
        console.log(`Today is Tuesday`)
        break
    case 3:
        console.log(`Today is Wednesday`)
        break
    case 4:
        console.log(`Today is Thusday`)
        break
    case 5:
        console.log(`Today is Friday`)
        break
    case 6:
        console.log(`Today is Saturday`)
        break
    default: consoel.log(`This is not valide`)
}

//////////////////////////////////////

let digit = 3;
switch (digit){
    case 0: 
        console.log("Zero")
        break
    case 1: 
        console.log("One")
        break
    case 2: 
        console.log("Two")
        break
    case 3: 
        console.log("Three")
        break
    case 4: 
        console.log("Four")
        break
    case 5: 
        console.log("Five")
        break
    case 6: 
        console.log("Six")
        break
    case 7: 
        console.log("Seven")
        break
    case 8: 
        console.log("Eight")
        break
    case 9: 
        console.log("Nine")
        break
    default: console.log("This is not valid number")
}


//  This code is check vowel & consonent number
let letter = "e"
letter = letter.toLowerCase()

switch (letter){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("This is Vowel");
    break;
    default: console.log("This is consonent")
}











