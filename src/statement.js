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
    printTransaction() {
        const header = "date || credit || debit || balance " + "\n";
        const between = " || ";
        let main = "";
        for (const eachTransaction of this.#Transaction) {
            main += eachTransaction.date + between;
            const key = Object.keys(eachTransaction);

            console.log('key: ', key, typeof key);
            if (key[1] === "credit") {
                console.log('');
                main += eachTransaction.credit + between;
            } else {
                main += '-' + between;
            }
            if (key[1] === "debit") {
                main += eachTransaction.debit + between;
            } else {
                main += '-' + between;
            }
            main += eachTransaction.total + "\n";

        }
        const allTransactions = header + main;

        return allTransactions;
    }
    getTransaction() {
        return this.#Transaction;
    }
}
module.exports = Statement;
