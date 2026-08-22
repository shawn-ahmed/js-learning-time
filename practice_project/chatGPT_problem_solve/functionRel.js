let str = "banana"
let count = {}
// এটি String এর প্রতিটি Character কে একে একে বের করে 
for (let char of str){
    if (count[char]){
        count[char]++
    } else{
        count[char] = 1
    }
}
//এটি Object-এর সব key ঘুরে ঘুরে প্রিন্ট করে।
for (let key in count){
    console.log(`${key} : ${count[key]}`)
}