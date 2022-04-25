import Book from './modules/Book.js'; /* eslint-disable-line */
import { showBook } from './modules/showBook.js'; /* eslint-disable-line */
import timeNow from './modules/date.js'; /* eslint-disable-line */

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
export const addSection = document.querySelector('#book-section');
const addBtn = document.getElementById('add-btn');
export const bookArray = JSON.parse(localStorage.getItem('book')) || [];
const listNav = document.getElementById('list');
const addNav = document.getElementById('add-it');
const contactNav = document.getElementById('contact-us');
const showBookSection = document.getElementById('added-book');
const contactSection = document.getElementById('contact');
export const time = document.getElementById('calendar');

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