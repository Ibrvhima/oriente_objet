"use strict";

class Account {
  _movement = [];
  locale = navigator.language;

  constructor(owner, currency, pin, movement) {
    this.owner = owner;
    this.currency = currency;
    //protected property
    this._pin = pin;

    console.log(`Thanks for opening an account ${this.owner}`);
  }
  getMovement() {
    return this._movement;
  }
  //DEPOT
  deposit(value) {
    this._movement.push(value);
  }

  //RETRAIT
  withdrawa(value) {
    this.deposit(-value);
  }
  //PRETER DE L'ARGENT
  approveLoan(value) {
    return true;
  }
  resquestLoan(value) {
    if (this.approveLoan(value)) {
      this.deposit(value);
      console.log("Loan approuved");
    }
  }
}
const acc1 = new Account("Jullien", "GNF", 111);

acc1.deposit(250);
acc1.withdrawa(100);
acc1.getMovement.push();
acc1._movement.push(-100);
