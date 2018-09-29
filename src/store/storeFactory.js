import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducerBook from '../containers/books/reducerBook';
import addReducer from '../containers/profile/addReducer';

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
  reducerBook,
  addReducer
});

const storeFactory = () => {
  return createStore(reducers, enhancer);
}

export default storeFactory;