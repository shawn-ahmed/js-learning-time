// problem:- Calculator Function তৈরি করো যেখানে Operator (+ - * / %) switch দিয়ে Handle করতে হবে।

function calculator(a,x,b){
    switch(x){
        case "+":
            return a + b;          // if you use return, don't use break.
        case "-":
            return a - b;
        case "*":
            return a*b;
        case "/":
            return a / b;
        case "%":
            if (b === 0){
                return "Error: modulas by zero"
            }
            return a % b;
        default:
            return "Input a valid number"
    } 
}
console.log(calculator(2,"%", 1))











