let mark = -4

// only if else condition
if (mark >= 90 && mark <= 100){console.log("you got A+")}
else if (mark >= 80 && mark < 90){console.log("you got A")}
else if (mark >= 70 && mark < 80){console.log("you got B")}
else if (mark >= 60 && mark < 70){console.log("you got c")}
else if (mark >= 50 && mark < 60){console.log("you got D")}
else if (mark >= 0 && mark < 50){console.log("you got F")}
else {console.log("Invalid Input")}

// function Use
function getGrade(mark){
    if (typeof mark !== "number" || mark < 0 || mark > 100){
        return "Invalid Input"
    }
    else if (mark >= 90 && mark <= 100){return "A+"}
    else if (mark >= 80 && mark < 90){return "A"}
    else if (mark >= 70 && mark < 80){return "B"}
    else if (mark >= 60 && mark < 70){return "C"}
    else if (mark >= 50 && mark < 60){return "D"}
    
    else {return "Fail"}
}
console.log(getGrade(20))
console.log(getGrade(64))
console.log(getGrade(89))
console.log(getGrade(53))
console.log(getGrade(0))
console.log(getGrade(124))
console.log(getGrade(-3))
console.log(getGrade("12"))

// একটি সংখ্যা Positive, Negative অথবা Zero কিনা Nested Ternary Operator ব্যবহার করে বের করো।
let number = -2
console.log((number < 0) ? "Negative" : (number > 0) ? "Positive" : "Zero")




