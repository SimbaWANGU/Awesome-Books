import { bookArray } from './declarations.js';

export default class Book {
  constructor(titleInput, authorInput) {
    this.title = titleInput.value;
    this.author = authorInput.value;
    this.id = bookArray.length;
  }
}