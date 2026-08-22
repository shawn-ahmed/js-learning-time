/*
let score = [230, 323, 632, 623, 523, 753, 639]
let max = score[0]

function highestScore() {
    for (let i = 0; i < score.length; i++){
        if (score[i] > max){
            max = score[i]
        }
    }
}
console.log(max)
*/


let scores = [230, 323, 632, 623, 523, 753, 639]
function highestScore(scores) {
    let max = scores[0]

    for (let i = 0; i < scores.length; i++){
        if (scores[i] > max){
            max = scores[i]
        }
    }
    return max
}
let maxScore = highestScore(scores)
console.log(maxScore)








