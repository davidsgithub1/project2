import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Books from './containers/books/Books';
import { LoginHeaderWrap } from './containers/login/container';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const AsyncBooks = Loadable({
  loader: () => import(/* webpackChunkName: "Books" */ "./containers/books/UI/Books"),
  loading: () => <div>loading...</div>,
  modules: ['Books']
})

class App extends Component {
  render() {
    return (
      <div className="App">
      	<LoginHeaderWrap />
	     <HashRouter>
            <Switch>
              <Route path = "/search" component = {AsyncBooks}/>
            </Switch>
         </HashRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(App);