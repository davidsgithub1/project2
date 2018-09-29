const path = require('path');
const express = require('express');
const app = express();
// const connection = require('../config/connection');
const publicPath = path.join(__dirname, '../', 'build');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('/test', (req, res) => {
  console.log('test');
});

app.listen(port, () => {
  console.log('Server is up');
});