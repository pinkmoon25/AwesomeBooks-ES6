
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
