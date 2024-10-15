"use strict";

class Account {
  constructor(owner, currency, pin, movement) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movement = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account ${this.owner}`);
  }

  deposit(value) {
    this.movement.push(value);
  }
  withdrawa(value) {
    this.deposit(-value);
  }
}
const acc1 = new Account("Jullien", "GNF", 111);

acc1.movement.push(250);
acc1.movement.push(-100);
