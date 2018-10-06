import { ADD_USER_BOOKS } from './constants';

const defaultState = {
  userBooks: [],
  userId: 1,
  bookInfo: {}
}

export default (state = defaultState, action) => {
  switch(action.type) {  
    
    case ADD_USER_BOOKS:
    return {
      ...state,
      userBooks: [...action.userBooks]
    }
    
    default:
      return state;
  }
}