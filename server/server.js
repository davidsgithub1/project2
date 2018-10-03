const path = require('path');
const express = require('express');
const app = express();
// const connection = require('../config/connection');
const routsBooks = require('./routsBooks');
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

const React = require("react");
const { renderToString } = require("react-dom/server");
const App = require("../src/App");

app.use(express.static(publicPath));

routsBooks(app);

app.get('/test', (req, res) => {
  console.log('test');
});

app.get("*", (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <head>
        <title>Universal React</title>
        <link rel="stylesheet" href="/css/main.css">
        <script src="/bundle.js" defer></script>
      </head>
      <body>
        <div id="root">${renderToString(<App />)}</div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log('Server is up');
});