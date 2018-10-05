const bookQueries = require('../config/bookQueries');

module.exports = (app) => {
  // app.get('/get-titles', (req, res) => {
  //   bookQueries.getBookTitles()
  //     .then(response => {
  //       res.send(response);
  //     })
  //     .catch(err => console.log(err))
  // }),

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
  })
}
