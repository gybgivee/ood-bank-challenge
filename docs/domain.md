# Bank Domain Model

- Account
  - Properties
    - transactions: Transaction[]
    - balance: RealNumber
  - Methods
    - constructor()
    - deposit(amount :RealNumber)
    - withdrawal(amount: RealNumber)
    - #updateBalance(amount: RealNumber)
    - getBalance() : RealNumber
    - getTransactions() : Transaction[]
    - #getTodaysDate() : String
  
- Transaction
  - Properties
    - date: String
    - credit: RealNumber
    - debit: RealNumber
    - balance: RealNumber
  - Methods
    - constructor( date, credit, debit, balance )
      - this.date = date; this.credit = credit ...

- Statement
  - Properties
    - transactions: Transaction[]
  - Methods
    - constructor( transactions: Transaction[] )
      - this.transactions = transactions
    - printStatement()

const account = new Account();

account.deposit( 100.50 );
account.withdraw( 50.0 );
account.deposit( 1000 );
account.withdraw( 500 );

const statment = new Statment( account.getTransactions() )

statement.printStatement()

...

const anotherStatmentPrinter = new Statement( account.getTransactions() )

anotherStatmentPrinter.printStatement()

// THE END :)

Account.deposit( amount ) {
    // Code is same as you currently have
    // with one small change

    if ( any errors ) {
        return false;
    }

    const transaction = new Transaction( date, credit, 0, balance );
    this.transactions.push( transaction );

    return balance;
}

Statement.printStatment() {
    // Your existing code
}