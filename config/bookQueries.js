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

  getBookSuggestons: (par, column, status) => {
    return new Promise((resolve, reject) => {
      let query = '';
      const sqlPar = `${par}%`;
      if(status === 'available') query = 'SELECT DISTINCT ?? FROM books WHERE ?? LIKE ? AND book_status = ? LIMIT 10';
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

  getBooks: (par, column, status) => {
    return new Promise((resolve, reject) => {
      const sqlPar = `${par}%`;
      let query = '';
      if(status === 'available') query = 'SELECT * FROM books WHERE ?? LIKE ? AND book_status = ? LIMIT 10';
      else query = 'SELECT * FROM books WHERE ?? LIKE ? LIMIT 10';
      connection.query(query, [column, sqlPar, status], (err, res) => {
        if (err) reject(err);
        else {
          resolve(res);
        };
      })
    })
  }
}