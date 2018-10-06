import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Search from './containers/books/Search';
import { LoginHeaderWrap } from './containers/login/container';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const AsyncBooks = Loadable({
  loader: () => import(/* webpackChunkName: "Search" */ "./containers/books/Search"),
  loading: () => <div>loading...</div>,
  modules: ['Search']
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