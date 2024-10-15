"use strict";
//Création de fonction constructive
const Books = function (title, author, totalPages) {
  this.title = title;
  this.author = author;
  this.totalPages = totalPages;
};

Books.prototype.resume = function () {
  console.log(
    `Le livre "${this.title}" a été écrit par ${this.author} et comporte ${this.totalPages} pages`
  );
};

const book1 = new Books("Le petit Principe", "Antoint de Saint-Exupéry", 70);
const book2 = new Books("Etranger", "Albert Camus", 100);

book1.resume();
book2.resume()
