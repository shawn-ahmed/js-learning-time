// create cart
class Cart{
    constructor(name, price, quantity){
        this.name = name
        this.price = price
        this.quantity = quantity
    }
}
let cart1 = []
// add product function
function addProduct(arr, name, price, quantity) {
    arr.push(new Cart(name, price, quantity))
}

// add some products
addProduct(cart1, "phone", 12000, 4)
addProduct(cart1, "laptop", 24500, 2)
addProduct(cart1, "PC", 3000, 7)

// remove product function
function removeProduct(arr, name){
    for (let i = 0; i < arr.length; i++){
        if (arr[i].name === name){
            arr.splice(i, 1)
        }
    }
}

// remove products
removeProduct(cart1, "laptop")

// cart1.splice()
console.log(cart1)