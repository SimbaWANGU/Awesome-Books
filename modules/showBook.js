import { addSection } from './declarations.js';
import removeBook from './removeBook.js';

const showBook = (bookArray) => { /* eslint-disable-line */
  addSection.innerHTML = '';
  bookArray.forEach((book, id) => {
    addSection.innerHTML += ` 
    <div class="container-book">
      <div class="books-title">
      <p> ${book.title} </p>
      <p> by </p>
      <p> ${book.author} </p>
      </div>
      <button class=deleteBtn type="button" id="${id}">Remove </button>
    </div>
  `;
  });

  addSection.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteBtn')) {
      removeBook(e.target.id);
      addSection.innerHTML = '';
      bookArray.forEach((book, id) => {
        addSection.innerHTML += ` 
      <div class="container-book">
        <div class="books-title">
        <p> ${book.title} </p>
        <p> by </p>
        <p> ${book.author} </p>
        </div>
        <button class=deleteBtn type="button" id="${id}">Remove </button>
      </div>
      `;
      });
    }
  });
};

export default showBook;
