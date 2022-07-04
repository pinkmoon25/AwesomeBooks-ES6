const list = document.querySelector('.list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');
const listSection = document.querySelector('.booklist');
const bookForm = document.querySelector('.form');
const contactSection = document.querySelector('.contact-info');

const navigation = () => {
  bookForm.classList.add('hide');
  contactSection.classList.add('hide');

  list.addEventListener('click', () => {
    listSection.classList.remove('hide');
    bookForm.classList.add('hide');
    contactSection.classList.add('hide');
  });

  addNew.addEventListener('click', () => {
    bookForm.classList.remove('hide');
    listSection.classList.add('hide');
    contactSection.classList.add('hide');
  });

  contact.addEventListener('click', () => {
    contactSection.classList.remove('hide');
    bookForm.classList.add('hide');
    listSection.classList.add('hide');
  });
}

export {navigation}
