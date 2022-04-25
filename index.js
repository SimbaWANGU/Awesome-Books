import Book from './modules/Book.js';
import showBook from './modules/showBook.js';
import timeNow from './modules/date.js';
import {
  addBtn,
  titleInput,
  authorInput,
  listNav,
  contactSection,
  showBookSection,
  addSection,
  addNav,
  contactNav,
  bookArray,
} from './modules/declarations.js';

addBtn.addEventListener('click', () => {
  if (titleInput.value !== '' && authorInput.value !== '') {
    const item = new Book(titleInput, authorInput);
    bookArray.push(item);
    localStorage.setItem('book', JSON.stringify(bookArray));
    titleInput.value = '';
    authorInput.value = '';
    window.location.reload(true);
  }
});

listNav.addEventListener('click', () => {
  contactSection.classList.add('display-none');
  showBookSection.classList.add('display-none');
  addSection.classList.remove('display-none');
  showBook(bookArray);
});

addNav.addEventListener('click', () => {
  contactSection.classList.add('display-none');
  showBookSection.classList.remove('display-none');
  addSection.classList.add('display-none');
});

contactNav.addEventListener('click', () => {
  addSection.classList.add('display-none');
  showBookSection.classList.add('display-none');
  contactSection.classList.remove('display-none');
});

window.addEventListener('load', () => {
  setInterval(timeNow, 1000);
});