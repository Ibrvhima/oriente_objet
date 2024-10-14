"use strictS";
const Animal = function (name, espece) {
  this.name = name;
  this.espece = espece;
};

Animal.prototype.parler = function () {
  console.log(`${this.name} fait du bruit`);
};

const Chien = function (name, espece, race) {
  Animal.call(this, name, espece);
  this.race = race;
};

Chien.prototype = Object.create(Animal.prototype);
Chien.prototype.construtor = Chien;

Chien.prototype.aboyer = function () {
  console.log(`${this.name} 🐕‍🦺 aboie`);
};

const animal = new Animal("Rex", "Section Cannine")
const dog = new Chien("Max", "Berger", 'Fraçais')

animal.parler()
dog.aboyer()
