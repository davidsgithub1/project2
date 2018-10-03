const bookQueries = require('../config/bookQueries');

module.exports = (app) => {
  app.get('/get-titles', (req, res) => {
    bookQueries.getBookTitles()
      .then(response => {
        res.send(response);
      })
      .catch(err => console.log(err))
  }),

  app.get('/get-titles-change', (req, res) => {
    const entry = req.query.entry;
    bookQueries.getBookTitlesOnChange(entry)
      .then(response => {
        res.send(response);
      })
      .catch(err => console.log(err))
  }),

  app.get('/get-books', (req, res) => {
    const entry = req.query.entry;
    bookQueries.getBooks(entry)
      .then(response => {
        res.send(response);
      })
      .catch(err => console.log(err))
  })
}
