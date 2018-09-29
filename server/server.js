const path = require('path');
const express = require('express');
const app = express();
// const connection = require('../config/connection');
const routsBooks = require('./routsBooks');
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

routsBooks(app);

app.get('/test', (req, res) => {
  console.log('test');
});

app.listen(port, () => {
  console.log('Server is up');
});