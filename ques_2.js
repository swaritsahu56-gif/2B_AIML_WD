class BankAccount {

    static bankName = "SBI";
    static genInfo = "haa bhai";

    constructor(accountNo, holderName, balance) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }

    DisplayWithdraw(amount) {
        if (this.balance < amount) {
            console.log("balance na hai bhai");
        } else {
            this.balance = this.balance - amount;
            console.log("nikal gaye paise");
            console.log("new balance: " + this.balance);
        }
    }

    DisplayDeposit(amount) {
        this.balance = this.balance + amount;
        console.log("---------- deposit ho gya --------");
        console.log(this.balance);
    }

    DisplayBal() {
        console.log(this.balance);
    }

    static DisplaybankInfo() {
        console.log("Bank Name: " + BankAccount.bankName);
        console.log("Info: " + BankAccount.genInfo);
    }
}

let A1 = new BankAccount(205, "swarit", 2000);
let A2 = new BankAccount(220, "vikash", 3000);

BankAccount.DisplaybankInfo();

A1.DisplayDeposit(2000);
A1.DisplayBal();
A1.DisplayWithdraw(1000);
A1.DisplayWithdraw(3000);