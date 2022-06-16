class Transaction {

    #credit
    #debit
    #balance;
    #date
    constructor() {
        this.#balance=0;
    }
    
    deposit(amount) {
       const date = this.getTodayDate();
       this.#date = date;
    
        if (amount < 0) {
            console.log('Deposit need to be greater than zero');
            return false;
        }
      
        this.#debit = amount;
   
        const total = this.updateBalance(this.#debit)
        return {date:this.#date,debit:this.#debit,total:total};
    }
    withdrawal(amount) {
        const date = this.getTodayDate();
        this.#date = date;
        
        const currentBalance = this.#balance;
        if (amount > currentBalance) {
            console.log('Cannot withdraw more the balance');
            return false;
        }
        this.#credit = amount;
        const withdraw = amount*-1;
        
        const total = this.updateBalance(withdraw)
        return {date:this.#date,credit:this.#credit,total:total};
    }
    updateBalance(amount){

        this.#balance = this.#balance + amount;
        return this.#balance;
       
    }
    getTodayDate(){
        const date=new Date();
        const day = date.getDate();
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        const fulldate = day+'/'+month+'/'+year;
        return fulldate;
    }
   
}
module.exports = Transaction;
const Statement = require('./statement');
const myStatement = new Statement();
const account = new Transaction();
myStatement.addTransaction(account.deposit(100));
myStatement.addTransaction(account.withdrawal(50));
myStatement.addTransaction(account.deposit(10));
console.log(myStatement.getTransaction());