import { Book } from './modules/booklist.js'
import { navigation } from './modules/navlink.js'
import { success } from './modules/success.js'
import { luxon } from './modules/luxon.js';

const title = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.getElementById('add');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (title.value === '' || author.value === '') return;

  const bookId = Math.floor(Math.random() * 1000);
  const newBook = new Book(title.value, author.value, bookId);
  Book.addBook(newBook);
  Book.storeBook(newBook);
  success();
  title.value = '';
  author.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  Book.getBook();
  Book.displayBooks();
});

navigation();

const span = document.querySelector('.date');

let dateTime = luxon.DateTime;

span.textContent = `${dateTime.now().toLocaleString(dateTime.DATETIME_MED)}`
