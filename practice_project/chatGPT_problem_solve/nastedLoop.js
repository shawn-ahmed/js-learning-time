
// Nested Loop ব্যবহার করে নিচের Pattern তৈরি করো।
for (let i = 1; i <= 5; i++){
    let sum = ""
    for (let j = 1; j <= i; j++ ){
        sum += "*"
    }
    //console.log(sum)
}  
/*
    output  *
            **
            ***
            ****
            *****
*/

// 
for (let i = 5; i >= 1; i--){
    let sum = ""
    for (let j = 1; j <= i; j++){
        sum += "*"
    }
    //console.log(sum)
}
/*
    output  *****
            ****
            ***
            **
            *
*/
///////////////////////////////
for (let i = 1; i <= 5; i++){
    let sum = ""
    for (let j = 1; j <= i; j++){
        sum += j
    }
    //console.log(sum)
}
/* 
output  1
        12
        123
        1234
        12345
*/
////////////////////////////     Another Program

// another method copy from chatGPT
for (let i = 1; i <= 5; i++) {
    let pattern = "";

    // Space print করার জন্য
    for (let j = 1; j <= 5 - i; j++) {
        pattern += " ";
    }

    // Star print করার জন্য
    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
    }
    //console.log(pattern);
}

for (let i = 1; i <= 9; i = i+2){
    let sum = ""
    
    for (let k = 1; k <= (9 - i)/2; k++){
        sum += " "
    }

    for (let j = 1; j <= i; j++){
        sum += "*"
    }
    //console.log(sum)
}

//// ANOTHER Method    //////////
let sp = 4
for (let i = 1; i <= 9; i = i+2){
    let sum = ""
    
    for (let k = 1; k <= sp; k++){
        sum += " "
    }

    for (let j = 1; j <= i; j++){
        sum += "*"
    }
    console.log(sum)
    sp--
}