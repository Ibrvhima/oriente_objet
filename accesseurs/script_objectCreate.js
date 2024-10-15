"use strict";

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const youssouf = Object.create(PersonProto);

youssouf.firstName = "Youssouf";
youssouf.birthYear = 2000;
youssouf.calcAge();

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (fullName, birthYear, school, level) {
  PersonProto.init.call(this, fullName, birthYear);
  this.school = school;
  this.level = level;
};

StudentProto.introduce = function () {
  console.log(
    `Bonjour, je suis ${this.fullName}. Je suis étudiant à ${this.school} et je suis en ${this.level}.`
  );
};
const kerfala = Object.create(StudentProto);
kerfala.init("Kerfala soumah", 2010, "UFG", "Terminal");
kerfala.introduce()
