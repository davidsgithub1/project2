const connection = require('./connection');

module.exports = {
  getBookTitles: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT DISTINCT title FROM books';
      connection.query(query, (err, res) => {
        if(err) reject(err);
        else {
          const titles = res.map(item => item.title.toLowerCase());
          resolve(titles);
        };
      });
    });
  },

  getBookTitlesOnChange: (par) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT DISTINCT title FROM books WHERE title LIKE ? ';
      const sqlPar = `${par}%`;
      connection.query(query, [sqlPar], (err, res) => {
        if(err) reject(err);
        else {
          const titles = res.map(item => item.title.toLowerCase());
          resolve(titles);
        };
      })
    })
  },

  getBooks: (par) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM books WHERE title = ? ';
      const m = connection.query(query, [par], (err, res) => {
        if(err) reject(err);
        else {
          resolve(res);
        };
      })
    })
  }
}