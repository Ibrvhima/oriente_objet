"use strict";
const Cars = function (marque, modele) {
  this.marque = marque;
  this.modele = modele;
};

Cars.prototype.description = function () {
  console.log(`C'est une voiture ${this.marque} ${this.modele}`);
};

const car1 = new Cars("Toyota", "Corrola");
const car2 = new Cars("Nissan", "Almera");

car1.description()
car2.description()
