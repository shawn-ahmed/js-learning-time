/*
let rect = {
    width : 100,
    height : 40,
    details : function (){
        console.log("I am a Rectangle")
        console.log("My width " + this.width)
        console.log("My height " + this.height)
    }
}
rect.details()
*/

//// Factory pattern
let rectTemplet = function (width, height){
    return {
        width : width,
        height : height,
        details : function (){
            console.log("My width " + this.width)
            console.log("My height " + this.height)
        }
    }
}
let rect1 = rectTemplet(20,4).details()

// Constructor pattern
let Ractengle = function (width, height){
    this.width = width
    this.height = height
    this.details = function (){
        console.log("My width " + this.width)
        console.log("My height is " + this.height)
    }
}

let rectA = new Ractengle(20, 8)
rectA.details()

