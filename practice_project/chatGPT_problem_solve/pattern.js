// challenge accepted from chatGPT
// Patter 01
function patternOne(n){
    console.log("\nFrom Pattern 01\n")

    for (let i = 1; i <= n; i++){
        let pattern = ""
        for (let j = 1; j <= i; j++){
            pattern += "*"
        }
        console.log(pattern)
    }
}
patternOne(5)

// Pattern 02
function patternTwo(n){
    console.log("\nFrom Pattern 02\n")

    for (let i = 1; i <= n; i++){
        let pattern = ""
        for (let j = n; j >= i; j--){
            pattern += "*"
        } 
        console.log(pattern)
    }
}
patternTwo(5)

// Pattern 03
function patternThree(n){
    console.log("\nFrom Pattern 03\n")

    for (let i = 1; i <= n; i++){
        let pattern = ""
        for (let j = 1; j <= i; j++){
            pattern += j
        }
        console.log(pattern)
    }
}
patternThree(5)

// Pattern 04
function patternFour(n){
    console.log("\nFrom Pattern 04\n")

    for (let i = 1; i <= n; i++){
        let pattern = ""
    for (let j = 1; j <= (n + 1 - i); j++){
            pattern += j
        }
        console.log(pattern)
    }
}
patternFour(5)

// Pattern 05
function patternFive(n){
    console.log("\nFrom Pattern 05\n")
    for (let i = 1; i <= n; i++){
        let pattern = ""

        // space
        for (let x = 1; x <= n - i; x++){
            pattern += " "
        }

        // Star
        for (let j = 1; j <= i; j++){
            pattern += "*"
        }
        console.log(pattern)
    }
}
patternFive(5)

// Pattern 06
function patternSix(n){
    console.log("\nFrom Pattern 06\n")
    for (let i = 1; i <= n; i++){
        let pattern = ""

        // space
        for (let x = 1; x <= i; x++){
            pattern += " "
        }

        // Star
        for (let j = n; j >= i; j--){
            pattern += "*"
        }
        console.log(pattern)
    }
}
patternSix(5)

// Patter 07
function patternSeven(n){
    console.log("\nFrom Pattern 07\n")
    for (let i = 1; i <= n; i++){
        let pattern = ""
        // space
        for (let x = 1; x <= n - i; x++){
            pattern += " "
        }
        for (let j = 1; j <= i; j++){
            pattern += j
        }
        console.log(pattern)
    }
}
patternSeven(10)     // don't input over 9

//                PYRAMID PATTERN 
// Pattern 08
function patternEight(n){
    console.log("\nFrom Pattern 08\n")
    for (let i = 1; i <= n; i++){
        let pattern = ''

         // space
        for (let x = 1; x <= n - i; x++){
            pattern += " "
        }
        // Star
        for (let j = 1; j <= i * 2 - 1; j++){
            pattern += "*"
        }
        console.log(pattern)
        
    }
}
patternEight(5)

// Pattern 09
function patternNine(n){
    console.log("\nFrom Pattern 09\n")
    for (let i = n; i >= 1; i--){
        let pattern = ""

        // space
        for (let x = 1; x <= n - i; x++){
            pattern += " "
        }
        // star
        for (let j = 1; j <= i * 2 -1; j++){
            pattern += "*"
        }
        console.log(pattern)
    }
}
patternNine(5)

// Patter 10
function patternTen(n){
    console.log("\nFrom Pattern 10\n")
    for (let i = 1; i <= n; i++){
        let pattern = ""

        // space
        for (let x = 1; x <= n - i; x++){
            pattern += " "
        }

        for (let j = 1; j <= i * 2 - 1; j++){
            pattern += j
        }
        console.log(pattern)
    }
}
patternTen(5)

// Pattern 11
function patternEleven(){
    console.log("\nFrom Pattern 11\n")
    for (let i = 1; i <= 5; i++){
        let pattern = ""
        for (let j = 1; j <= i; j++){
                pattern += "*"
            }
        console.log(pattern)
    }
    for (let i = 4; i >= 1; i--){
        let pattern = ""
        for (let j = 1; j <= i; j++){
            pattern += "*"
        }
        console.log(pattern)
    }
}
patternEleven()

// highly effective and efficient approach. fully optimized
function patternElevenP2(n){
    console.log("\nFrom Pattern 11.2\n")
    const middle = Math.ceil(n / 2)
    
    if (n%2===0){
        console.log("Please input a 'odd' number")
        return
    }
    for (let i = 1; i <= n; i++){
        const counts = (i <= middle) ? i : (n + 1) - i
        console.log("*".repeat(counts))
    }  
}
patternElevenP2(11)

// Pattern 12
function patternTwelve(){
    console.log("\nFrom Pattern 12\n")
    for (let i = 1; i <= 5; i++){
        let pattern = ""
        // space
        for (let x = 1; x <= 5 - i; x++){
            pattern += " "
        }
        // star
        for (let j = 1; j <= i*2-1; j++){
            pattern += "*"
        }
        console.log(pattern)
    }
    for (let i = 4; i >=1; i--){
        let pattern = ""
        //space 
        for(let x = 1; x <= 5 - i; x++){
            pattern += " "
        }
        //Star
        for (let j = 1; j <= i*2 -1; j++){
            pattern += "*"
        }
        console.log(pattern)
    }
}
patternTwelve()

// highly effective and efficient approach. fully optimized
function patternTwelveP2(n){
    console.log("\nFrom Pattern 12.2\n")
    const middle = Math.ceil(n / 2)

    // Validity check
    if (n % 2 === 0){
        console.log("Please, input a 'odd' number")
        return
    }
    
    for (let i = 1; i <= n; i++){
        let pattern = ""
        let space = i <= middle ? middle - i : i - middle
        pattern += (" ".repeat(space))
        
        let stars = i <= middle ? i*2 - 1 : ((n + 1) - i) * 2 -1
        pattern += ("*".repeat(stars))

        console.log(pattern)
    }
}
patternTwelveP2(11)

// Pattern 13
// Outer Diamond Shape
function patternThirteen(){
    console.log("\nFrom Pattern 13\n")
    // upper part
    for( let i = 5; i >= 1; i--){
        let pattern = ""

        // left side
        for( let l = 1; l <= i; l++){
            pattern += "*"
        }

        //middle or space side
        for (let m = 1; m <= 11 - 2 * i; m++){
            pattern += " "
        }

        // right part
        for (let r = i; r >= 1; r--){
            pattern += "*"
        }

        console.log(pattern)
    }

    // bottom part
    for (let i = 2; i <= 5; i++){
        let pattern = ""

        // left side
        for (let l = 1; l <= i; l++){ 
            pattern += "*"
        }

        //middle/space paer
        for(let m = 1; m <= 11 - i * 2; m++){
            pattern += " "
        }

        //right part
        for (let r = 1; r <= i; r++){
            pattern += "*"
        }
        console.log(pattern)
    }
}
patternThirteen()

//                 ////////////////    Last patter    \\\\\\\\\\\\\\\\

// pattern xx
function patternLast(){
    console.log("\nFrom Pattern END\n")

    for (let i = 1; i <= 5; i++){
        let pattern = ""
        for (let j = 1; j <= i; j++){
            pattern += i
        }
        console.log(pattern)
    }
    for (let i = 4; i >= 1; i--){
        let pattern = ""
        for (let j = 1; j <= i; j++){
            pattern += i
        }
        console.log(pattern)
    }
}
patternLast()

// pattern last 0.2
function patternLastP2(){
    console.log("\nFrom Pattern END Point 2\n")

    for (let i = 1; i <= 9; i++){
        let number = i <= 5 ? i : 10 - i
        let pattern = String(number).repeat(number)
        console.log(pattern)
    }
}
patternLastP2()


/*  for (let i = 1; i <= n; i++){
        let pattern = ''
        
    }
*/