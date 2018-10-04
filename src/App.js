import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Books from './containers/books/Books';
import Loadable from 'react-loadable';

const AsyncComponent = Loadable({
  loader: () => import(/* webpackChunkName: "Books" */ "./SomeComponent"),
  loading: () => <div>loading...</div>,
  modules: ['Books']
})

class App extends Component {
  render() {
    return (
      <div className="App">
      <AsyncComponent />
      	<Books />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(App);


