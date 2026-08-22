let Rectangle =  function (width, hight){
    this.width = width
    this.hight = hight

    let position = {
        x : 23,
        y : -6
    }

    let printPropertise = function (){
        // if i remove 'this' keyword, then this method are working. Otherwise bind the method with 'this' keyword
        console.log(`My width is ${this.width}`)
        console.log(`My hight is ${this.hight}`)
    }.bind(this)

    this.draw = function (){
        console.log(`I am a rectangle`)
        printPropertise()
        console.log(`Position X = ${position.x} & Y = ${position.y}`)
    }

    // this is the way of access for position object
    // this.getPostiton = function (){
    //     return position
    // }

    // another method for access postiton object
    // use getter and seeter method
    Object.defineProperty(this, "position", {
        get : function (){
            return position
        },
        set : function (value){
            position = value
        }
    })
}

let rect1 = new Rectangle(10, 20)

rect1.draw()
// console.log(rect1.getPostiton()) // way of access position object

rect1.position = {
    x : 30,
    z : 50
}
console.log(rect1.position) // from Object defineProperty




