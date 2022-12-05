"use strict";

import { addBooks, deleteBook } from "./Module/ui.js";

import { Title, author, registeredBooks } from "./Module/ui.js";
import { DateTime } from "./Module/luxon.js";
// const Title = document.querySelector(".title");
/* eslint-disable no-unused-vars */
// const date = new Date();
const showDateAndTime = document.querySelector(".date-and-time");
const ListMenu = document.querySelector(".list");
const AddMenu = document.querySelector(".add");
const ContactMenu = document.querySelector(".contactmenu");
const addButton = document.querySelector(".addbook");

const setTime = () => {
  showDateAndTime.innerHTML = DateTime.now().toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS
  );
};
setInterval(setTime, 1000);

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

let Books = [];

window.onload = () => {
  if (registeredBooks.innerHTML === "") {
    document.querySelector(".emptymsg").style.display = "block";
    registeredBooks.style.border = "none";
  } else {
    document.querySelector(".emptymsg").style.display = "none";
  }
  if (localStorage.getItem("Books")) {
    Books = JSON.parse(localStorage.getItem("Books"));
    registeredBooks.style.border = "1px solid black";
    document.querySelector(".emptymsg").style.display = "none";
  }
  addBooks(Books);
};

//add

addButton.addEventListener("click", (e) => {
  if (Title.value === "" || author.value === "") {
    e.preventDefault();
  } else {
    const book = new Book(Title.value, author.value);
    Books.push(book);
    addBooks(Books);
    localStorage.setItem("Books", JSON.stringify(Books));
    document.querySelector(".emptymsg").style.display = "none";
    registeredBooks.style.border = "1px solid black";
  }
});

//remove

document.querySelector(".booksdata").addEventListener("click", (e) => {
  if (!localStorage.getItem("Books")) {
    document.querySelector(".emptymsg").style.display = "block";
    registeredBooks.style.border = "none";
  } else {
    Books.splice(e.target.id, 1);

    localStorage.setItem("Books", JSON.stringify(Books));
    deleteBook(e.target);
  }
});

ListMenu.addEventListener("click", () => {
  document.querySelector(".booksdata").style.display = "block";
  document.querySelector(".addbooks").style.display = "none";
  document.querySelector(".contact").style.display = "none";
});
AddMenu.addEventListener("click", () => {
  document.querySelector(".booksdata").style.display = "none";
  document.querySelector(".addbooks").style.display = "block";
  document.querySelector(".contact").style.display = "none";
});

ContactMenu.addEventListener("click", () => {
  document.querySelector(".booksdata").style.display = "none";
  document.querySelector(".addbooks").style.display = "none";
  document.querySelector(".contact").style.display = "block";
});
