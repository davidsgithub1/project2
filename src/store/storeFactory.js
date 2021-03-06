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

const clientLogger = store => next => action => {
    if (action.type) {
        let result
        console.groupCollapsed("dispatching", action.type)
        console.log('prev state', store.getState())
        console.log('action', action)
        result = next(action)
        console.log('next state', store.getState())
        console.groupEnd()
        return result
    } else {
        return next(action)
    }
}

const serverLogger = store => next => action => {
    console.log('\n  dispatching server action\n')
    console.log(action)
    console.log('\n')
    return next(action)
}

const middleware = server => [
    (server) ? serverLogger : clientLogger,
    thunk
]

const storeFactory = (server = false, initialState) =>
    // createStore(MainReducer, state);
    applyMiddleware(...middleware(server),saver, thunk)(createStore)(reducers, initialState)

export default storeFactory