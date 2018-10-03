import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Search from './containers/books/Search';
import { LoginHeaderWrap } from './containers/login/container';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Search />
      	<LoginHeaderWrap />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(App);


