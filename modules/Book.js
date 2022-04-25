import { bookArray } from '../index.js'; /* eslint-disable-line */

export default class Book {
  constructor(titleInput, authorInput) {
    this.title = titleInput.value;
    this.author = authorInput.value;
    this.id = bookArray.length;
  }
}