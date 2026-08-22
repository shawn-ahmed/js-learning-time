
let userName = prompt("Inter your name : ")
let income = parseFloat(prompt("Type your Income : "))
let expNum = parseFloat(prompt("How many expense you have : "))


if ( isNaN(income) || isNaN(expNum) || income <= 0 || expNum < 0 ){
    alert("Please Type a valid number")
} else {
    let totalExpenses = 0
    let expenses = []
    //collect expense dynamically
    for(let i = 1; i <= expNum; i++){
       // let expenses = []
        let expense = parseFloat(prompt(`Enter Expense ${i} : `))

        if (isNaN(expense) || expense < 0){
            alert("Please Type a valid number. Or set it $0 ")
            expense = 0
        }
        expenses.push(expense)
        totalExpenses += expense
        // Expenses Array [100, 200, 300, 400]
        // commet bellow loop. Because সমস্যাটা মূলত expenses array তুমি for loop-এর ভিতরে declare করেছো, তাই প্রতিবার loop চললে নতুন একটা empty array তৈরি হচ্ছে।
       /* for (let index = 0; index < expenses.length; index++){  
            totalExpenses += expenses[index] 
        }  */
    }
    // let userName, income, expense;
    
    let tax = income*0.1;
    let tCost = totalExpenses + tax;
    let newBalance = income - tCost;
    let saving = Math.max(0, newBalance * 20/100);

    let forSavingValid;

    // tax is total income of 10%. So that I decide if total income of 10% are saving this is Excelent
    // Detarmine the financial health status

    let finStatus = "";
    if (saving >= tax){
        finStatus = "Excelent! Your saving are well"
    }
    else if (saving >= income*0.07){
        finStatus = "Good! You have decent savings amount"
    }
    else if (saving >= income*0.04){
        finStatus = "Needs improvement. Consider reducing expenses"
    }
    else {
        finStatus = "Critical! Yous savings are too low."
    }

      // Check if expenses exced income
        let overSendingMessage = "";
        if(tCost > income){
        overSendingMessage = "Warning! You are spending over thna income";
    }

    console.log("Budget tracker project");
    console.log("User Name : " + userName.toUpperCase());
    console.log("Income : $" + income);
    console.log("Expense : $" + totalExpenses);
    console.log("Tax deduction (10%) : $" + tax);
    console.log("Remaining balance : $" + newBalance);
    console.log("Saving (20% of balance) : $" + saving)
    console.log(finStatus)

    if(overSendingMessage){
        console.log(overSendingMessage)
    }
}


   

    
    






