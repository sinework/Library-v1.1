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