function bankAccount(acc_name,acc_num,acc_balance){
    this.name=acc_name;
    this.num=acc_num;
    this.Balance=acc_balance;
  this.Withdraw = function(withdraw) {
    if (withdraw > this.Balance) {
        console.log("-----------      Paisa nahi hai bhai       ---------");
    } else {
        this.Balance = this.Balance - withdraw;
    }
};
    this.Deposit = function(deposit){
        this.Balance = this.Balance+deposit;
        return this.Balance;
    };
    this.displayBankAccount = function(){
        console.log("acc_Name  :"+this.name);
        console.log("acc_Number :"+this.num);
        console.log("Acc_Balance :"+this.Balance);
    };

}
let Account = new bankAccount("swarit", 696969, 2106);
console.log("--------    bankaccount information   -------");
Account.displayBankAccount();
Account.Deposit(2000);
console.log("--------    bankaccount after deposit     --------");
Account.displayBankAccount();
Account.Withdraw(10000);
console.log("--------    bankaccount after withdraw     --------");
Account.displayBankAccount();