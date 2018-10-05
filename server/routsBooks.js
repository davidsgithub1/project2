const bookQueries = require('../config/bookQueries');

module.exports = (app) => {
  // app.get('/get-titles', (req, res) => {
  //   bookQueries.getBookTitles()
  //     .then(response => {
  //       res.send(response);
  //     })
  //     .catch(err => console.log(err))
  // }),

  //books
  app.get('/get-suggestion', (req, res) => {
    const entry = req.query.entry;
    const column = req.query.column;
    const status = req.query.status;
    bookQueries.getBookSuggestons(entry, column, status)
      .then(response => {
        res.send(response);
      })
      .catch(err => console.log(err))
  }),

  app.get('/get-books', (req, res) => {
    const entry = req.query.entry;
    const column = req.query.column;
    const status = req.query.status;
    bookQueries.getBooks(entry, column, status)
      .then(response => {
        res.send(response);
      })
      .catch(err => console.log(err))
  }),

  app.get('/get-user-books', (req, res) => {
    const id = req.query.id;
    bookQueries.getUserBooks(id)
      .then(response => {
        res.send(response);
      })
      .catch(err => console.log(err))
  }),

  app.post('/add-book-to-db', (req, res) => {
    let book = req.query.book;
    book = JSON.parse(book);
    book.ISBN_13 = Number(book.ISBN_13);
    book.ISBN_10 = Number(book.ISBN_10);
    book.location = Number(book.location);
    bookQueries.addBook(book)
      .then(response => {
        res.send(response);
      })
      .catch(err => console.log(err))
  }),

  app.patch('/edit_book', (req, res) => {
    let book = req.query.book;
    book = JSON.parse(book);
    book.ISBN_13 = Number(book.ISBN_13);
    book.ISBN_10 = Number(book.ISBN_10);
    book.location = Number(book.location);
    book.publication_date = Number(book.publication_date);
    book.id = Number(book.id);

    bookQueries.editBook(book)
      .then(response => {
        res.send(response);
      })
      .catch(err => console.log(err))
  })

}
