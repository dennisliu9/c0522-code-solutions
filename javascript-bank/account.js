/* exported Account */

/*
Constructor will take two params, begin with three properties
  .number = number
  .holder = holder
  .transactions = []
Add three methods to the Account.prototype property
  * .deposit(amount)
    * Check if amount is a number and > 0
    * Also check that it is not a NaN, and that it is an integer
      * If so, create a new Transaction object
        * var newTransact = new Transaction('deposit', amount)
        * this.transactions.push(newTransact)
  * .withdraw(amount)
    * Do the same as deposit, but the transaction will have 'withdrawal' as the param
  * .getBalance()
    * Create two variables, totalDeposits and totalWithdrawals and set to 0
    * Loop through this.transactions
      * If current transaction[type] === 'deposits', += totalDeposits
      * Likewise for withdrawals
    * return deposits - withdrawals
*/

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (typeof amount !== 'number' || amount <= 0 || isNaN(amount) || !Number.isInteger(amount)) {
    return false;
  }
  var newTransaction = new Transaction('deposit', amount);
  this.transactions.push(newTransaction);
  return true;
};

Account.prototype.withdraw = function (amount) {
  if (typeof amount !== 'number' || amount <= 0 || isNaN(amount) || !Number.isInteger(amount)) {
    return false;
  }
  var newTransaction = new Transaction('withdrawal', amount);
  this.transactions.push(newTransaction);
  return true;
};

Account.prototype.getBalance = function () {
  var totalDeposits = 0;
  var totalWithdrawals = 0;

  for (var txIdx = 0; txIdx < this.transactions.length; txIdx++) {
    if (this.transactions[txIdx].type === 'deposit') {
      totalDeposits += this.transactions[txIdx].amount;
    } else {
      totalWithdrawals += this.transactions[txIdx].amount;
    }
  }

  return totalDeposits - totalWithdrawals;
};
