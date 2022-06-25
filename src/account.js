const Transaction = require('./transaction');
const Statement = require('./statement');
class Account {


    #balance
    #transactions

    constructor() {
        this.#balance = 0;
        this.#transactions = new Statement();
    }

    deposit(date, amount) {
        //const date = this.#getTodayDate();

        if (amount < 0) {
            console.log('Deposit need to be greater than zero');
            return false;
        }

        const total = this.#updateBalance(amount);
        const myTransaction = new Transaction(date, 0, amount, total);

        this.#transactions.addTransaction(myTransaction.getTransaction());
        return true;

    }
    getStatement(){
        return this.#transactions.getStatement();
    }
    withdrawal(date, amount) {
        //const date = this.#getTodayDate();
        const currentBalance = this.#balance;
        if (amount > currentBalance) {
            console.log('Cannot withdraw more the balance');
            return false;
        }
        const withdraw = amount * -1;
        const total = this.#updateBalance(withdraw)
        const myTransaction = new Transaction(date, amount, 0, total);
        this.#transactions.addTransaction(myTransaction.getTransaction());
       
        return true;

    }
    #updateBalance(amount) {

        this.#balance = this.#balance + amount;
        return this.#balance;

    }
    #getTodayDate() {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const fulldate = day + '/' + month + '/' + year;
        return fulldate;
    }

}
module.exports = Account;

const account = new Account();
account.deposit('10/01/2022', 1000);
account.deposit('13/01/2022', 2000);
account.withdrawal('14/01/2022', 500);
console.log(account.getStatement());
/*
const myStatement = new Statement();
myStatement.addTransaction(account.deposit('10/01/2022', 1000));
myStatement.addTransaction(account.deposit('13/01/2022', 2000));
myStatement.addTransaction(account.withdrawal('14/01/2022', 500));
console.log(myStatement.getStatement());
console.log(myStatement.printStatement());*/