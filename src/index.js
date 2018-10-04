import React from 'react';
import ReactDOM, { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import storeFactory from './store/storeFactory';
import Loadable from 'react-loadable';
import { BrowserRouter } from 'react-router-dom';

const store = storeFactory( window.REDUX_STATE || {} );

window.React = React
window.store = store

window.onload = () => {
    Loadable.preloadReady().then(() => {
        hydrate(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root'));
    })
}

// registerServiceWorker();
