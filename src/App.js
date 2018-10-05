import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Search from './containers/books/Search';
import { LoginHeaderWrap } from './containers/login/container';
import { HashRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<LoginHeaderWrap />
	     <HashRouter>
            <Switch>
              <Route path = "/search" component = {Search}/>
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