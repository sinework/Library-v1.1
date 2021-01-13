const displaybutton = document.querySelector('.display-btn');
const formCard = document.querySelector('.form-card');
const submitButton = document.querySelector('.submit-form');
const bookTitle = document.querySelector('#bookTitle');
const bookPages = document.querySelector('#numberOfPages');
const bookAuthor = document.querySelector('#author');
const bookGenre = document.querySelector('#genre');
const bookRead = document.querySelector('#readStatus');
const cardDisplay = document.querySelector('#card-display');

const myLibrary = [];

const displayBooks = () => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.classList.add('books');
  card.classList.add('w-50');
  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const headerTag = document.createElement('h5');
  headerTag.classList.add('card-title');
  headerTag.append(myLibrary[myLibrary.length - 1].title);
  cardHeader.append(headerTag);

  const cardAuthor = document.createElement('p');
  cardAuthor.append(myLibrary[myLibrary.length - 1].author);
  cardBody.append(cardAuthor);

  const cardPages = document.createElement('p');
  cardPages.append(myLibrary[myLibrary.length - 1].pages);
  cardBody.append(cardPages);

  const cardGenre = document.createElement('p');
  cardGenre.append(myLibrary[myLibrary.length - 1].genre);
  cardBody.append(cardGenre);

  const cardRead = document.createElement('button');
  cardRead.classList.add('btn');
  cardRead.classList.add('btn-secondary');

  if (myLibrary[myLibrary.length - 1].read === 'Read') {
    cardRead.append('Mark as unread');
  } else {
    cardRead.append('Mark as read');
  }

  cardRead.onclick = () => {
    if (myLibrary[myLibrary.length - 1].read === 'Read') {
      myLibrary[myLibrary.length - 1].read = 'Not read';
      cardRead.innerHTML = 'Mark as read';
    } else {
      myLibrary[myLibrary.length - 1].read = 'Read';
      cardRead.innerHTML = 'Mark as unread';
    }
  };
  cardBody.append(cardRead);

  const cardRemove = document.createElement('button');
  cardRemove.classList.add('btn');
  cardRemove.classList.add('btn-danger');
  cardRemove.append('Remove this book');
  cardBody.append(cardRemove);

  card.append(cardHeader);
  card.append(cardBody);
  cardDisplay.append(card);

  const booksArray = document.getElementsByClassName('books');// array
  for (let i = 0; i < booksArray.length; i += 1) {
    booksArray[i].setAttribute('data-attribute', i);
  }
  cardRemove.onclick = () => {
    const parentCard = cardRemove.parentElement.parentElement;
    const grandParentCard = parentCard.parentElement;
    grandParentCard.removeChild(parentCard);
    myLibrary.splice(parentCard.getAttribute('data-attribute'), 1);
  };


  displaybutton.classList.remove('d-none');
  formCard.classList.add('d-none');
};

function Book(title, author, pages, genre, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.genre = genre;
  this.read = read;
}

// display form
const addBookToLibrary = (e) => {
  e.preventDefault();
  const book = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookGenre.value,
    bookRead.checked ? 'Read' : 'Not read',
  );
  myLibrary.push(book);
  displayBooks();
};


const displayForm = () => {
  displaybutton.classList.toggle('d-none');
  formCard.classList.toggle('d-none');
};
// Event Listners
displaybutton.addEventListener('click', displayForm, false);
submitButton.addEventListener('click', addBookToLibrary, false);
