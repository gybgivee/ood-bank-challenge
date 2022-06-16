const Transaction = require('./transaction');
class Account {


    #balance

    constructor() {
        this.#balance=0;
    }
    
    deposit(amount) {
       const date = this.#getTodayDate();
     
    
        if (amount < 0) {
            console.log('Deposit need to be greater than zero');
            return false;
        }
      
        const total = this.#updateBalance(amount);
        const myTransaction = new Transaction(date,amount,0,total);
         return myTransaction.getTransaction();
       
    }
    withdrawal(amount) {
        const date = this.#getTodayDate();
    
        const currentBalance = this.#balance;
        if (amount > currentBalance) {
            console.log('Cannot withdraw more the balance');
            return false;
        }
        const withdraw = amount*-1;
        const total = this.#updateBalance(withdraw)
        const myTransaction = new Transaction(date,0,amount,total);
         return myTransaction.getTransaction();
        
    }
    #updateBalance(amount){

        this.#balance = this.#balance + amount;
        return this.#balance;
       
    }
    #getTodayDate(){
        const date=new Date();
        const day = date.getDate();
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        const fulldate = day+'/'+month+'/'+year;
        return fulldate;
    }
   
}
module.exports = Account;
const Statement = require('./statement');
const myStatement = new Statement();
const account = new Account();

myStatement.addTransaction(account.deposit(100));
myStatement.addTransaction(account.withdrawal(50));
myStatement.addTransaction(account.deposit(10));

console.log(myStatement.getStatement());
console.log(myStatement.printStatement());