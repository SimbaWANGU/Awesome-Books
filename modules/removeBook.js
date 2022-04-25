import { bookArray } from './declarations.js';

const removeBook = (selectedId) => {
  bookArray.splice(selectedId, 1);
  localStorage.setItem('book', JSON.stringify(bookArray));
};

export default removeBook;