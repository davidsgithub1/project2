import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducerBook from '../containers/books/reducerBook';
import addReducer from '../containers/profile/addReducer';
import reducerLogin from '../containers/login/reducerLogin';
const reducers = combineReducers({
  reducerBook,
  addReducer,
  reducerLogin
});

const saver = store => next => action => {
    let result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = (initialState) =>
    // createStore(MainReducer, state);
    applyMiddleware(saver, thunk)(createStore)(
        reducers,
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            initialState,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )

export default storeFactory