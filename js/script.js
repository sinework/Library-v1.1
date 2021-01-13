const parentID=document.getElementById('form-holder');
    let divElement= 'div',
      elementID='form-div',
      headerElement='h3';
      headerID='temp'; 
let book={};

let books=[
]
// display form
function addBook(e) {
    e.preventDefault()
    book.title=bookTitle.value;
    book.author=bookAuthor.value;
    book.pages=bookPages.value;
    book.genre=bookGenre.value;
    book.read=bookRead.value? "Read":"Not read";
    books.push(book)
    book={};
    displayBooks();

  

}



const displaybutton= document.querySelector(".display-btn");
const formCard= document.querySelector(".form-card");
const submitButton= document.querySelector(".submit-form");
const bookTitle= document.querySelector("#bookTitle");
const bookPages= document.querySelector("#numberOfPages");
const bookAuthor= document.querySelector("#author");
const bookGenre= document.querySelector("#genre");
const bookRead= document.querySelector("#readStatus");
const cardDisplay= document.querySelector("#card-display");

function displayForm(e){
   
    displaybutton.classList.toggle("d-none")
    formCard.classList.toggle("d-none")
}