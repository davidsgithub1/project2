const mysql = require('mysql');
require('dotenv').config();

 const connection= mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

connection.connect((err) => {//get connected
  if(err) throw err;
  console.log(`Connected at id ${connection.threadId}`);
});

module.exports = connection;