"use strict";

const Users = function (name, email) {
  this.name = name;
  this.email = email;
};

Users.prototype.affiche = function () {
  console.log(`Nom: ${this.name}  Email: ${this.email}`);
};

Users.prototype.changeEmail = function (newEmail) {
  this.newEmail = newEmail;
  console.log(`The email adress was updated and de new email is :${this.newEmail}`);
};

const user1 = new Users("Diallo Ibrahima","ibrahim@gmail.com")
const user2 = new Users("Diallo Mamadou","mamadou@gmail.com")
user1.affiche()
user2.affiche()

user2.changeEmail("kouradia@gmail.outlook")

