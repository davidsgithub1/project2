import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const app = document.getElementById('app');
const history = syncHistoryWithStore(browserHistory, store);

import ChatPage from './chatContainer';

ReactDOM.render((
	<Provider store={ store }> 
	  <Router history={ history }>
	  	<Route path="/" component={ HomePage }/>	
	   	<Route path="/chat" component={ ChatPage }/>	
	  </Router>
  </Provider> 
), app);

