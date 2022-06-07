/* exported Bank */

/*
Constructor takes no params

Constructor function sets two properties
  this.nextAccountNumber = 1
  this.accounts = []

Add three methods to the Bank.prototype property
  * Account.prototype.openAccount = function (holder, balance)
    * var newAccount = new Account(this.nextAccountNumber, holder)
    * var validStartBalance = newAccount.deposit(balance) // holds true if it is a valid balance amount
    * (for below, reverse it so main functionality is not in if statement)
    * if validStartBalance // will check if it's a valid balance
      * var newlyCreatedAcctNum = newAccount.number;
      * this.accounts.push(newAccount)
      * increment this.nextAccountNumber
      * return newlyCreatedAcctNum
    * (implied else) return null
  * ...type.getAccount = function (number)
    * Loop through this.accounts
    * If number === this.accounts[i].number
      * return this.accounts[i]
    * (implied else) return null
  * ...type.getTotalAssets = function ()
    * Create var to store total (var currentTotalAssets = 0)
    * Loop through this.accounts
      * Add this.accounts[i].getBalance() to total balance
    * return currentTotalAssets
*/

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  var newAccount = new Account(this.nextAccountNumber, holder);
  var validStartBalance = newAccount.deposit(balance);
  if (!validStartBalance) {
    return null;
  }
  var newlyCreatedAcctNum = newAccount.number;
  this.accounts.push(newAccount);
  this.nextAccountNumber++;
  return newlyCreatedAcctNum;
};

Bank.prototype.getAccount = function (number) {
  for (var acctIdx = 0; acctIdx < this.accounts.length; acctIdx++) {
    if (number === this.accounts[acctIdx].number) {
      return this.accounts[acctIdx];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var currentTotalAssets = 0;
  for (var acctIdx = 0; acctIdx < this.accounts.length; acctIdx++) {
    currentTotalAssets += this.accounts[acctIdx].getBalance();
  }
  return currentTotalAssets;
};
