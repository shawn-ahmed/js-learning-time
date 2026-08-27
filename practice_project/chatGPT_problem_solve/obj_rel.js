
let person = [
    {
        name:"A", 
        salary:1000
    },
    {
        name:"B", 
        salary:3000
    }
]
function totalSalary(arr){
    let result = 0
    for (let i = 0; i < arr.length; i++){
       result += person[i].salary
    }
    return result
}
// console.log(totalSalary(person))

let students = [
    {name : "shawn", marks : 76},
    {name : "Jabed", marks : 81}, 
    {name : "Emon", marks : 60}
] 

let result = students.toSorted((a, b) => a.marks - b.marks)
console.log(result)

let arrPos = [4,6,2,7,8]
let checkPos = arrPos.every((a) => a > 0)
console.log(checkPos)

let arrSome = [3,5,-7,1]

let chckSm = arrSome.some((a) => a < 0)
console.log(chckSm)

let forModify = [
    {name:"A",active:true},
    {name:"B",active:false},
    {name:"C",active:true}
]
function getActive(arr){
    let result = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i].active){
            result.push(arr[i].name)
        }
    }
    return result
}

console.log(getActive(forModify))



