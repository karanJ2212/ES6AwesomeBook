export const registeredBooks = document.querySelector(".book-list");
export const author = document.querySelector(".author");
export const Title = document.querySelector(".title");

export const addBooks = (Books) => {
  registeredBooks.innerHTML = "";
  for (let i = 0; i < Books.length; i++) {
    registeredBooks.innerHTML += `
      <div class="title-and-author"> 
        <p class="Title">"${Books[i].title}" by  ${Books[i].author}</p>
        <button class="button remove" id="${i}">Remove</button>
      </div>

     `;
    Title.value = "";
    author.value = "";
    Title.focus();
  }
};
export const deleteBook = (el) => {
  if (el.classList.contains("remove")) {
    el.parentElement.remove();
  }
};
