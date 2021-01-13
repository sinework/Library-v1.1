const parentID=document.getElementById('form-holder');
    let divElement= 'div',
      elementID='form-div',
      headerElement='h3';
      headerID='temp';
let book={};

let books=[
]

let index = 0;

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
// Event Listners
displaybutton.addEventListener("click",displayForm, false);
submitButton.addEventListener("click",addBook, false);

 function displayBooks(){


    let card=document.createElement("div");
    card.classList.add("card");
    card.classList.add("books");
    card.classList.add("w-50");
    let cardHeader=document.createElement("div");
    cardHeader.classList.add("card-header");
    let cardBody=document.createElement("div");
    cardBody.classList.add("card-body");

     let headerTag= document.createElement("h5");
     headerTag.classList.add("card-title");
      headerTag.append(books[books.length-1].title);
     cardHeader.append(headerTag);

     let cardAuthor= document.createElement("p");
     cardAuthor.append(books[books.length-1].author);
     cardBody.append(cardAuthor);

     let cardPages= document.createElement("p");
     cardPages.append(books[books.length-1].pages);
     cardBody.append(cardPages);

     let cardGenre = document.createElement("p");
     cardGenre.append(books[books.length-1].genre);
     cardBody.append(cardGenre);

     let cardRead = document.createElement("button");
     cardRead.classList.add("btn");
     cardRead.classList.add("btn-secondary");
     books[books.length-1].read == "Read" ? cardRead.append("Mark as unread") : cardRead.append("Mark as read");
     cardRead.onclick = function(){
       if (books[books.length-1].read == "Read") {
         books[books.length-1].read = "Not read"
         cardRead.innerHTML = "Mark as read"
         console.log(books[books.length-1].read)
       }
       else {
         books[books.length-1].read = "Read"
         cardRead.innerHTML = "Mark as unread"
         console.log(books[books.length-1].read)
       }
     }
     cardBody.append(cardRead);
     console.log(books[books.length-1].read)

     let cardRemove = document.createElement("button");
     cardRemove.classList.add("btn");
     cardRemove.classList.add("btn-danger");
     cardRemove.append("Remove this book");
     cardBody.append(cardRemove);

     card.append(cardHeader);
     card.append(cardBody);
     cardDisplay.append(card);

     let booksArray = document.getElementsByClassName("books");//array
     for (let i = 0; i < booksArray.length; i++) {
       booksArray[i].setAttribute("data-attribute", i);
     }
     cardRemove.onclick = function(){
       parentCard = cardRemove.parentElement.parentElement;
       grandParentCard = parentCard.parentElement;
       grandParentCard.removeChild(parentCard);
       books.splice(parentCard.getAttribute("data-attribute"), 1);
       console.log(books);

     }


     displaybutton.classList.remove("d-none");
     formCard.classList.add("d-none");



     console.log(books);


}
