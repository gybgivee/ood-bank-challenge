class Statement {
    #Transaction

    constructor() {
        this.#Transaction = [];
    }
    addTransaction(transaction) {

        if (transaction === false) {
            return [];
        }
        this.#Transaction.push(transaction);


    }
    printStatement() {
        const header = "date || credit || debit || balance " + "\n";
        const between = " || ";
        let main = "";
        const reverseTransactions = this.#Transaction.reverse();
        for (const eachTransaction of reverseTransactions) {
           
            //const key = Object.keys(eachTransaction);

            main += eachTransaction.date + between;
            main += eachTransaction.credit + between;
            main += eachTransaction.debit + between;
            main += eachTransaction.total + "\n";

        }
        const allTransactions = header + main;

        return allTransactions;
    }
    getStatement() {
        return this.#Transaction;
    }
}
module.exports = Statement;
