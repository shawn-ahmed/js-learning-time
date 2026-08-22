// new Date function use
let today = (new Date()).getDay()

switch (today) {
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thusday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;

    default: 
        console.log("Sorry. Date not found")
}

////////////////////////////////////  
// If you use return, don't use break

function getDayName(day){
    switch (day) {
        case 1:
            return "Sunday"
        case 2:
            return "Monday"
        case 3:
            return "Tuesday"
        case 4:
            return "Wednesday"
        case 5:
            return "Thusday"
            break;
        case 6:
            return "Friday"
        case 7:
            return "Saturday"
        default:
            return "Invalid Input"
    }
}
// console.log(getDayName(2))
// console.log(getDayName(6))

//////////////////////////////////////////////////////
// Problem:- Leap Year Check করো কিন্তু Nested if ব্যবহার করা যাবে না।
function leapYear(year){
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        return "Leap year"
    }
    else{return "Not leap year"}
}

console.log(leapYear(2030))




