"use strict";
//création des fonction constructive
const Person = function (firstName, brithYear) {
  this.firstName = firstName;
  this.brithYear = brithYear;
};
const Amad = new Person("Amadou", 2000);
const Oumar = new Person("Oumar", 2000);
const Conte = new Person("conte", 2000);

console.log(Amad);
console.log(Oumar);
console.log(Conte);

//prototype

Person.prototype.calcAge = function() {
    console.log(2024 - this.brithYear);
};
console.log(Person.prototype);
Amad.calcAge()
Oumar.calcAge()

//exécution de la fonction constructive on use l'operateur "new"

new Person("Diallo", 2000);
