

function showGrade() {
    let marks = document.getElementById("marks").value

    if (marks >= 80 && marks <= 100){
        document.getElementById("result").innerHTML = "You got <b>A<sup>+</sup></b> & your Grade Point 5"
     }
     else if (marks >= 70 && marks < 80){
        document.getElementById("result").innerHTML = "You got <b>A</b> & your Grade Point 4"
     }
     else if (marks >= 60 && marks < 70){
        document.getElementById("result").innerHTML = "You got <b>A<sup>-</sup></b> & your Grade Point 3.5"
     }
     else if (marks >= 50 && marks < 60){
        document.getElementById("result").innerHTML = "You got <b>B</b> & your Grade Point 3"
     }
     else if (marks >= 40 && marks < 50){
        document.getElementById("result").innerHTML = "You got <b>C</b> & your Grade Point 2"
     }
     else if (marks >= 44 && marks < 40){
        document.getElementById("result").innerHTML = "You got <b>B</b> & your Grade Point 1"
     }
     else if (marks >= 1 && marks <= 32){
        document.getElementById("result").innerHTML = "You are <b>Failed</b>"
     }
     else{
        document.getElementById("result").innerHTML = "Please insart your valid marks"
     }
}

// =========    For Vowels & consonets find Project    ===========

function showType(){
    
    let letter = document.getElementById("letter").value.trim();

    if(letter === ""){
        alert("কিছু লিখুন!");
    }
    // else if(letter.length !== 1){alert("শুধুমাত্র একটি শব্দ লিখুন!")}
    else if (letter.length !== 1 || !/^[A-Za-z]$/.test(letter)){
        alert("শুধুমাত্র একটি ইংরেজি অক্ষর লিখুন!");
    }
    else{
        if (letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U" || letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u" ){
            document.getElementById("words").innerHTML = `${letter} is Vowel`;
        }
        else{
            document.getElementById("words").innerHTML = `${letter} is Consonent`;
        }
    }
}

