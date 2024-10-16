"use strict";

///////////////////////////////Création de la class Book

class Books {
  constructor(title, author, pubYear) {
    this.title = title;
    this.author = author;
    this.pubYear = pubYear;
    this.status = "available";
  }
  //////////////////////////////////loan a book
  loan() {
    if (this.status === "available") {
      this.status = "loaned";
      console.log(`The book ${this.title} is  loaned`);
    } else {
      console.log(`The book ${this.title} was loaned `);
    }
    return this;
  }

  /////////////////////////////////////////return book
  return() {
    if (this.status === "Loaned") {
      this.status = "available";
      console.log(`The book ${this.title} was returned.`);
    } else {
      console.log(`The book ${this.title} was not loaned`);
    }
    return this;
  }
}

/////////////////////////////////////Création de la class Utilisateur
class Users {
  //private property
  #sold = 0;

  constructor(userName) {
    this.userName = userName;
    this.loanHistory = [];
  }

  ///FOR LOAN A BOOK
  loanBook(book) {
    if (book.status === "available") {
      book.loan();

      this.loanHistory.push(book);
    } else {
      console.log(`The book ${this.title} is not available`);
    }
    return this;
  }

  ///FOR RETURN A BOOK
  returnBook(book) {
    const index = this.loanHistory.indexOf(book, 1);
    if (index !== -1) {
      book.return();

      this.loanHistory.splice(index, 1);
    } else {
      console.log(`The book ${this.title} was not loaned`);
    }
    return this;
  }

  displayHistory() {
    if (this.loanHistory.length === 0) {
      console.log(`The user ${this.userName} has not still loan a book`);
    } else {
      console.log(`${this.userName}'s loan history:`);
      this.loanHistory.forEach((book, index) => {
        console.log(`${index + 1}. ${book.title} of ${book.author}`);
      });
    }
    return this;
  }

  /// ajout de fond
  ajoutFonds(montant) {
    this.#sold += montant;
    console.log(`${montant} GNF a été ajouté au solde  de ${this.userName}`);
    return this;
  }
  /// PAYER LES FRAIS
  payerFrais(montant) {
    if (this.#sold >= montant) {
      this.#sold -= montant;
      console.log(`${this.userName} a payé ${montant} GNF pour les frais`);
    } else {
      console.log(`${this.userName} n'a pas assez d'argent`);
    }
    return this;
  }
  ///DISPLAYE SOLD

  displaySold() {
    console.log(`Le solde de ${this.userName} est: ${this.#sold} GNF`);
    return this;
  }
}

///////////////////////////CREATE THE LIBRARY CLASS
class Library {
  constructor() {
    this.books = [];
  }

  //add books
  addBooks(book) {
    this.books.push(book);
    console.log(
      `le livre ${book.title} de ${book.author} a été ajouter à la bibliotheque`
    );

    return this;
  }

  //rechercher un livre

  lookForBook(title) {
    const book = this.books.find((element) => element.title === title);
    if (book) {
      console.log(`livre trouvé: ${book.title} ${book.author} ${book.pubYear}`);
    } else {
      console.log(`le livre ${title} n'exist pas`);
    }
    return book;
  }
  /// afficher les livres disponnible
  displayAvailableBook() {
    console.log(`Les livres qui sont disponnible sont`);
    this.books.forEach((book) => {
      if (book.status === "available") {
        console.log(`${book.title} of ${book.author}`);
      }
    });
    return this;
  }
}

//////////////////////// HERE I CREATE USERS
const user1 = new Users("Mamadou Bah");
const user2 = new Users("Ibrahima Diallo");
const user3 = new Users("Aminata Barry");

console.log(user1);

////////////////////////////// HERE I CREATE BOOKS

const book1 = new Books("Enfant Noir", "Camara Laye", 2002);
const book2 = new Books("Le petit prince", "Antoine de saint", 1943);
const book3 = new Books("Etranger", "Alber Camus", 1942);

console.log(book1);

/////////////////// HERE I CREATE A LIBRARY
const library = new Library();
library.addBooks(book1).addBooks(book2).addBooks(book3);
console.log(library);

user1.loanBook(book1)
user2.loanBook(book2)
user1.ajoutFonds(100000)
user1.payerFrais(20000)
user1.displaySold()
console.log(user1);




