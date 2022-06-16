const Statement = require("../src/statement.js");
const Transaction = require("../src/transaction.js");

describe("Show banking ", () => {
    let account, myStatement;
    beforeEach(() => {
        account = new Transaction();
        myStatement = new Statement();
    })
    it("Deposit", () => {
        const expected =
        [
            { date: '16/6/2022', debit: 100, total: 100 }
        ]
            
        myStatement.addTransaction(account.deposit(100));
        
        const result = myStatement.getTransaction();

        expect(result).toEqual(expected);
    });
    it("Deposit with amount under 0", () => {
        const expected =[]
            
        const result=myStatement.addTransaction(account.deposit(-10));
       
       
        expect(result).toEqual(expected);
    });
    it("Withdraw", () => {
        const expected =
        [
            { date: '16/6/2022', debit: 100, total: 100 },
            { date: '16/6/2022', credit: 50, total: 50 },
           
        ];
        myStatement.addTransaction(account.deposit(100));
        myStatement.addTransaction(account.withdrawal(50));
        const result = myStatement.getTransaction();
        expect(result).toEqual(expected);
    });
    it("Withdraw with more than balance", () => {
        const expected =
        [
            { date: '16/6/2022', debit: 100, total: 100 }
           
        ];
        myStatement.addTransaction(account.deposit(100));
        myStatement.addTransaction(account.withdrawal(110));
       
        const result = myStatement.getTransaction();
        console.log('Result: ' , result);
        expect(result).toEqual(expected);
    });
    it("Mix Transaction", () => {
        const expected =
        [
            { date: '16/6/2022', debit: 100, total: 100 },
            { date: '16/6/2022', credit: 50, total: 50 },
            { date: '16/6/2022', debit: 10, total: 60 }
        ];
        myStatement.addTransaction(account.deposit(100));
        myStatement.addTransaction(account.withdrawal(50));
        myStatement.addTransaction(account.deposit(10));
        const result = myStatement.getTransaction();
        expect(result).toEqual(expected);

    })

});

