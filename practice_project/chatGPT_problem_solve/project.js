// একটি Shopping Cart তৈরি করো যেখানে Function থাকবে—

// addProduct()
// removeProduct()
// updateQuantity()
// calculateTotal()
// applyDiscount()
// checkout()

// Cart-এর Data অবশ্যই Array of Object আকারে রাখতে হবে।

// Starting Code Here

let  cart = [
    {product : "phone", price : 12000, quantity : 3},
    {product : "laptop", price : 34000, quantity : 5}
]
// console.log(cart)

// Add new Produnt
function addProduct(name, price, quantity){
    for (let i = 0; i < cart.length; i++){
        if (cart[i].product === name){
            console.log("This item already here")
            return
        }
    }
    cart.push({product : name, price : price, quantity : quantity})
}

addProduct("PC", 4000, 3)

// Remove Product
function removeProduct(name){
    for (let i = 0; i < cart.length; i++){
        if (cart[i].product === name){
            cart.splice(i, 1)
            return
        }
    }
}
removeProduct("laptop")

// Update Quantity
function updateQuantity(productName, value){
    for (let item of cart){
        if (item.product === productName){
            if(item.quantity + value < 1){
                console.log("Quantity can not be less then 1")
                return
            }
            item.quantity += value
            return
        }
    }
    
    console.log("This product doesn't exists")
}

updateQuantity("PC", 2)

// calculate total price

// if I calculate only seleced item then this is the way
function calculateTotal(arr, ...products){
    let total = 0
    for (let i = 0; i < arr.length; i++){
        
        for (let key in arr[i]){
            for (let item of products){
                if (arr[i][key] === item){
                    total += arr[i].price * arr[i].quantity
                }
            }
        }
    }
    console.log(total)
}
// calculateTotal(cart, "phone", "PC")

// another woy only for all carted items
function calculateAll(arr){
    let total = 0
    for (let item of arr){
        total += item.price * item.quantity
    }
    return total
}
// calculateAll(cart)

// if apply discount
function applyDiscount(value){
    let discount = calculateAll(cart) - (calculateAll(cart) * (value / 100))
    // console.log(`You pay only ${discount} (include ${value}% discount).`)

    return discount
}
// applyDiscount(10)

// check out all
function checkout(discount=0){
    if (cart.length == 0){
        console.log("Your cart is Empty")
        return
    }
    let total = calculateAll(cart)
    let finalPrice = applyDiscount(discount)

    console.log(`
        Total Price : ${total}
        Discount : ${discount}%
        You have to pay : ${finalPrice}
        `)
}


checkout(10)








