
function bgreet(msg){
    function na(name){
        return `${msg}, ${name}!`
    }
    return na("sha")
}
console.log(bgreet("hi"))

////////////////////////////////////////
function greet(msg){
    function greetings(name){
        return `${msg}, ${name}!`
    }
    return greetings
}
let gm = greet("Good Morning")
console.log(gm("Shawn"))
///////////////////////////////////////

//  For base of power in number
function base(b){
    return (n) => {
        let result = 1
        for (let i = 0; i < b; i++){
            result *= n
        }
        return result
    }
}

let base5 = base(5)
console.log(base5(2))
console.log(base5(3))
console.log(base5(5))






