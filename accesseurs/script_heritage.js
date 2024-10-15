"use strict";
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }

  get fullName() {
    return this._fullName;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert("Le nom complet doit inclure un espace.");
  }

  static greet = function () {
    console.log("Bonjour!");
  };
}

class Student extends Person {
  constructor(fullName, birthYear, school, level) {
    super(fullName, birthYear);
    this.school = school;
    this.level = level;
  }

  introduce() {
    console.log(
      `Bonjour, je suis ${this.fullName}. Je suis étudiant à ${this.school} et je suis en ${this.level}.`
    );
  }

  calcAge() {
    console.log(
      `I'm student at ${this.school} and I have ${2024 - this.birthYear} years old`
    );
  }
}

const mory = new Student("Mory Koulibaly", 2000, "UGANC", "L3");
mory.introduce();
mory.calcAge()
