const connection = require('./connection');

module.exports = {
  // getBookTitles: () => {
  //   return new Promise((resolve, reject) => {
  //     const query = 'SELECT DISTINCT title FROM books';
  //     connection.query(query, (err, res) => {
  //       if (err) reject(err);
  //       else {
  //         const titles = res.map(item => item.title.toLowerCase());
  //         resolve(titles);
  //       };
  //     });
  //   });
  // },

  getBookSuggestons: (par, column, status) => {//get suggestions for the search 
    return new Promise((resolve, reject) => {
      let query = '';
      const sqlPar = `${par}%`;
      if (status === 'available') query = 'SELECT DISTINCT ?? FROM books WHERE ?? LIKE ? AND book_status = ? LIMIT 10';
      else query = 'SELECT DISTINCT ?? FROM books WHERE ?? LIKE ? LIMIT 10';
      connection.query(query, [column, column, sqlPar, status], (err, res) => {
        if (err) reject(err);
        else {
          let suggestions = [];
          if (column === 'title') suggestions = res.map(item => item.title.toLowerCase());
          else if (column === 'author') suggestions = res.map(item => item.author.toLowerCase());
          resolve(suggestions);
        };
      })
    })
  },

  getBooks: (par, column, status) => {//get search books
    return new Promise((resolve, reject) => {
      const sqlPar = `${par}%`;
      let query = '';
      if (status === 'available') query = 'SELECT * FROM books WHERE ?? LIKE ? AND book_status = ? LIMIT 10';
      else query = 'SELECT * FROM books WHERE ?? LIKE ? LIMIT 10';
      connection.query(query, [column, sqlPar, status], (err, res) => {
        if (err) reject(err);
        else {
          resolve(res);
        };
      })
    })
  },

  getUserBooks: (id) => {//get that user currently holds
    return new Promise((resolve, reject) => {
      let query = `SELECT 
          books.id,
          books.title, 
          books.author, 
          books.ISBN_13,
          books.ISBN_10,
          books.location,
          publication_date, 
          books.book_status 
        FROM users
        LEFT JOIN books
          ON users.id = books.book_owner
        WHERE users.id = ?`;
      connection.query(query, [id], (err, res) => {
        if (err) reject(err);
        else {
          resolve(res);
        };
      })
    })
  },

  addBook: (book) => {// edit book to db
    return new Promise((resolve, reject) => {
      let query = `INSERT INTO books SET ?`;
      connection.query(query, book, (err, res) => {
        if (err) reject(err);
        else {
          resolve(res);
        };
      })
    })
  },

  editBook: ({title, author, ISBN_13, ISBN_10, publication_date, location, id}) => {//
    return new Promise((resolve, reject) => {
      let query = `UPDATE books SET 
        title = ?,
        author = ?,
        ISBN_13 = ?,
        ISBN_10 = ?,
        publication_date = ?,
        location = ?
        WHERE id = ?`;
      connection.query(query, [title, author, ISBN_13, ISBN_10, publication_date, location, id], (err, res) => {
        if (err) reject(err);
        else {
          resolve(res);
        };
      })
    })
  },


}