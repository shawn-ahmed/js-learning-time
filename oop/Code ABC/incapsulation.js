// Encaosulation with Data hiding
class BankAccount {
  #balance = 0;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

// let account = new BankAccount(1000)
// account.deposit(200)
// console.log(account.getBalance())

// console.log(account.#balance)

///////////////////////////////////
class NewAccount {
    constructor(amount) {
        this.balance = amount

    }
    deposit(amount){
        this.balance += amount
    }

    withdraw(amount){
        if (this.balance > amount){
            this.balance -= amount
        }
    }

    inAccount(){
        return this.balance
    }
}

// let newAcc = new NewAccount(500)
// newAcc.withdraw(400)
// console.log(newAcc.balance)

// console.log(newAcc.inAccount())







