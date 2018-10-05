import React from 'react'
import ReactDOMServer from 'react-dom/server'

// import our main App component
import App from "../../src/App";

import Loadable from "react-loadable";

const path = require("path");
const fs = require("fs");

import manifest from '../../build/asset-manifest.json';

const extractAssets = (assets, chunks) => Object.keys(assets)
.filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
.map(k => assets[k]);

import storeFactory from '../../src/store/storeFactory'

const store = storeFactory();

import { Provider } from 'react-redux';

var middleware = (store) => (req, res, next) => {
    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', '..', 'build');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end();
        }
        const modules = [];
        const html = ReactDOMServer.renderToString(
        <Loadable.Capture report = {
            m => modules.push(m)}>
            <Provider store={store}>
            <App />
            </Provider>
        </Loadable.Capture>);

        const reduxState = JSON.stringify(store.getState());



        // then, after Loadable.Capture
        console.log(extractAssets(manifest, modules));
        
        const extraChunks = extractAssets(manifest, modules)
    .map(c => `<script type="text/javascript" src="/${c}"></script>`);

        // inject the rendered app into our html and send it
        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
            .replace(
                '</body>',
                extraChunks.join('') + '</body>'
            )
            .replace('"__SERVER_REDUX_STATE__"', reduxState)
        );
    });
};

module.exports = middleware;