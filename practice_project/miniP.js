
//////   PROJECT 1: PERSONAL INFORMATION CARD   ////////

let name, age,country, profession;
name = "shwan"
age = 23
country = "Bangladesh"
profession = "Unemplyee"

console.log(`
     ==================
          PROFILE
     ==================
    Name       : ${name}
    Age        : ${age}
    Country    : ${country}
    Profession : ${profession}
     ==================
    `)

        ///////   PROJECT 2: SIMPLE CALCULATOR ////////

    let num1 = 10
    let num2 = 3

    console.log(`
        Addition          (${num1} + ${num2})  = ${num1+num2}
        Subtraction       (${num1} - ${num2})  = ${num1-num2}
        Munltiplication   (${num1} * ${num2})  = ${num1*num2}
        Division(Integer) (${num1} / ${num2})  = ${(num1/num2).toFixed()}
        Remainder         (${num1} % ${num2})  = ${num1%num2}

        `)


         ///////   Shoping Bill Generator   ////////

    let sugarPrice = 120
    let sugarQuan = 2
    let sugarBill = sugarPrice*sugarQuan

    let milkPrice = 90
    let milkQuan = 3
    let milkBill = milkPrice*milkQuan

    let breadPrice = 50
    let breadQuan = 4
    let breadBill = breadPrice*breadQuan

    let grandTotal = sugarBill + milkBill + breadBill 
    let discount = 100

    console.log(`
                    ======== Shofing Bill =========
         Sugar : ${sugarPrice} TK x ${sugarQuan} KG  = ${sugarBill} TK
         Milk  : ${milkPrice} Tk x ${milkQuan} KG    = ${milkBill} TK
         Milk  : ${breadPrice} Tk x ${breadQuan} Pcs = ${breadBill} TK
         ------------------------------------
         Grand Total                   = ${grandTotal} TK
         Discount                      = 100 TK
         ------------------------------------
         Final Bill                    = ${grandTotal - discount}
        `)

