///  1-100 পর্যন্ত সে সংখ্যা গুলোর যোগফল যেগুলো 3 & 5 দ্বারা বিভাজ্য ////

let i = 1
let sum = 0

while (i <= 100){
    if (i%3 === 0 && i%5 === 0){
        console.log(`${sum} + ${i} = ${sum += i}`)
    }
    i++
}

//////////  If you don't how many times this code is running then use While loop  //////


let x = 1
while (x<100){
    console.log(x)
    x--
}



