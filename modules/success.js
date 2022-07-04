const form = document.querySelector('form');
const small = document.createElement('small');

const success = () => {
    small.innerHTML = '';
    small.innerText = `${title.value} added to BookList!`;
    form.appendChild(small);
  };

  export {success};
