import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import searchReducer from './searchReducer';
import addReducer from './addReducer';

const globalState = () => {
  return {
    books: []
  }
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const reducers = combineReducers({
  globalState,
  searchReducer,
  addReducer
});

const storeFactory = () => {
  return createStore(reducers, enhancer);
}

export default storeFactory;