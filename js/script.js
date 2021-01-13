const displaybutton = document.querySelector('.display-btn');
const formCard = document.querySelector('.form-card');
const submitButton = document.querySelector('.submit-form');
const bookTitle = document.querySelector('#bookTitle');
const bookPages = document.querySelector('#numberOfPages');
const bookAuthor = document.querySelector('#author');
const bookGenre = document.querySelector('#genre');
const bookRead = document.querySelector('#readStatus');
const cardDisplay = document.querySelector('#card-display');
// const parentID = document.getElementById('form-holder');
// const divElement = 'div';
// const elementID = 'form-div';
// const headerElement = 'h3';
// headerID = 'temp';
let book = {};

const books = [
];

// const index = 0;
function displayBooks() {
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
  headerTag.append(books[books.length - 1].title);
  cardHeader.append(headerTag);

  const cardAuthor = document.createElement('p');
  cardAuthor.append(books[books.length - 1].author);
  cardBody.append(cardAuthor);

  const cardPages = document.createElement('p');
  cardPages.append(books[books.length - 1].pages);
  cardBody.append(cardPages);

  const cardGenre = document.createElement('p');
  cardGenre.append(books[books.length - 1].genre);
  cardBody.append(cardGenre);

  const cardRead = document.createElement('button');
  cardRead.classList.add('btn');
  cardRead.classList.add('btn-secondary');
  books[books.length - 1].read === 'Read' ? cardRead.append('Mark as unread') : cardRead.append('Mark as read');
  cardRead.onclick = function () {
    if (books[books.length - 1].read === 'Read') {
      books[books.length - 1].read = 'Not read';
      cardRead.innerHTML = 'Mark as read';
    //   console.log(books[books.length - 1].read);
    } else {
      books[books.length - 1].read = 'Read';
      cardRead.innerHTML = 'Mark as unread';
    //   console.log(books[books.length - 1].read);
    }
  };
  cardBody.append(cardRead);
  //   console.log(books[books.length - 1].read);

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
  cardRemove.onclick = function () {
    const parentCard = cardRemove.parentElement.parentElement;
    const grandParentCard = parentCard.parentElement;
    grandParentCard.removeChild(parentCard);
    books.splice(parentCard.getAttribute('data-attribute'), 1);
    // console.log(books);
  };


  displaybutton.classList.remove('d-none');
  formCard.classList.add('d-none');


  // console.log(books);
}

// display form
function addBook(e) {
  e.preventDefault();
  book.title = bookTitle.value;
  book.author = bookAuthor.value;
  book.pages = bookPages.value;
  book.genre = bookGenre.value;
  book.read = bookRead.checked ? 'Read' : 'Not read';
  books.push(book);
  book = {};
  displayBooks();
}


function displayForm() {
  displaybutton.classList.toggle('d-none');
  formCard.classList.toggle('d-none');
}
// Event Listners
displaybutton.addEventListener('click', displayForm, false);
submitButton.addEventListener('click', addBook, false);
