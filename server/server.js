const path = require('path');
const express = require('express');
const app = express();
// const connection = require('../config/connection');
const routesBooks = require('./routesBooks');
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

const React = require("react");
const { renderToString } = require("react-dom/server");
const App = require("../src/App");

const routes = require('./app');

const Loadable = require('react-loadable');

import indexController from './controllers/index';

//router.use('^/$', renderer);

import storeFactory from '../src/store/storeFactory';

app.use(express.static(publicPath));

routesBooks(app);

app.use(indexController);

app.get('/test', (req, res) => {
  console.log('test');
});

//app.use(router);
/* 
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
 */

// chat
app.use('/chat', require('./routesChat'));

Loadable.preloadAll().then(()=>{
  app.listen(port, () => {
    console.log('Server is up ', port);
  });
})


// chat connection

const httpServer = require('http').createServer(app);
const io = require('socket.io')();

const PORT = 8080;

httpServer.listen(PORT, () => {
  console.log(`Chat: Running on port ${PORT}`);
});

//web socket connection
require('./controllers/chat').listen(httpServer);