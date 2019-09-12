//book constr
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//ui constr
function UI() {

}

//clear fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = "";
  document.getElementById('author').value = "";
  document.getElementById('isbn').value = "";
}

//add book to list
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');

  //create tr element
  const row = document.createElement('tr');
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `
  list.appendChild(row);
  console.log(row);
}

UI.prototype.showAlert = function(msg, colorClass) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `alert ${colorClass}`
  var textNode = document.createTextNode(msg);
  msgDiv.appendChild(textNode);
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  container.insertBefore(msgDiv, form);
  setTimeout(function() {
    msgDiv.remove();
    // document.querySelector('.alert').remove();
  }, 3000);

  console.log(msgDiv);
}

//events
document.getElementById('book-form').addEventListener('submit', function(e){
  //form vals
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  //instantiate book
  const book = new Book(title, author, isbn);
  //ins ui
  const ui = new UI();

//validations
  if(title === '' || author === '' || isbn === ''){
    ui.showAlert("Please fill in all fields", "error")
    title.disabled = true;
    author.disabled = true;
    isbn.disabled = true;
  }else{
    //add book to list
    ui.addBookToList(book);

    //ui clear fields
    ui.clearFields(book);
  }







  console.log(book);

  e.preventDefault();
  console.log(title, author, isbn);
});
