class Transaction{

    #credit
    #debit
    #total
    #date

    constructor(date,debit,credit,total){
        this.#date = date;
        this.#credit = credit;
        this.#debit = debit;
        this.#total = total;
    }
    
    getTransaction(){
        return {date:this.#date,debit:this.#debit,credit:this.#credit,total:this.#total}
    }
    
   
}
module.exports = Transaction;