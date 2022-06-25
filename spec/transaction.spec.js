const Account = require("../src/account.js");

describe("Show banking ", () => {
    let account;
    beforeEach(() => {
        account = new Account();
      
    })
    it("Deposit", () => {
        const expected =
        [
            { date: '16/6/2022', debit: 0, credit: 100, total: 100 },
           
        ]
       
       account.deposit('16/6/2022',100);
        
        const result = account.getStatement();

        expect(result).toEqual(expected);
    });
    it("Deposit with amount under 0", () => {
        const expected =false;
            
        const result=account.deposit('16/6/2022',-10);
       
       
        expect(result).toEqual(expected);
    });
    it("Withdraw", () => {
        const expected =
        [
            { date: '16/6/2022', debit: 0, credit: 100, total: 100 },
            { date: '16/6/2022', debit: 50, credit: 0, total: 50 }
        ]
        account.deposit('16/6/2022',100);
        account.withdrawal('16/6/2022',50);
        const result = account.getStatement();
        expect(result).toEqual(expected);
    });
    it("Withdraw with more than balance", () => {
        const expected =
        [
            { date: '16/6/2022', debit: 0, credit: 100, total: 100 }      
        ]
        account.deposit('16/6/2022',100);
        account.withdrawal('16/6/2022',110);
       
        const result = account.getStatement();
        console.log('Result: ' , result);
        expect(result).toEqual(expected);
    });
    it("Mix Transaction", () => {
        const expected =
        [
            { date: '10/01/2012', debit: 0, credit: 1000, total: 1000 },
            { date: '13/01/2012', debit: 0, credit: 2000, total: 3000 },
            { date: '14/01/2012', debit: 500, credit: 0, total: 2500 }
        ]
        account.deposit('10/01/2012',1000);
        account.deposit('13/01/2012',2000);
        account.withdrawal('14/01/2012',500);
        const result = account.getStatement();
        expect(result).toEqual(expected);

    })

});

