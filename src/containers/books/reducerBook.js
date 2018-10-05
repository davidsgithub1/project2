import { 
  ADD_BOOK_SUGGESTIONS,
  ADD_BOOKS,
  SET_SEARCH_PARAMETER,
  SET_STATUS_SHOWN,
  ADD_CURRENT_BOOK_INFO,
  RESET_BOOK_SUGGESTIONS,
  RESET_CURRENT_BOOK_INFO,
  SET_CURR_VALUE,
  SET_MESSAGE
} from  './constants';

const defaultState = {
  books:[],
  currentBookInfo: {},
  suggestions: [],
  isSuggestionChosen: false,
  bookShown: null,
  searchParameter: 'title', 
  statusShown: 'available',
  currValue:'',
  message:''
}

export default (state = defaultState, action) => {
  switch(action.type) {
    
    case ADD_BOOK_SUGGESTIONS:
    return {
      ...state,
      suggestions: [...action.suggestions]
    }

    case ADD_CURRENT_BOOK_INFO:
    return {
      ...state,
      currentBookInfo: action.currentBookInfo
    }

    case ADD_BOOKS:
    return {
      ...state,
      books: [...action.books]
    }

    case SET_SEARCH_PARAMETER:
    return {
      ...state,
      searchParameter: action.searchParameter
    }

    case SET_MESSAGE:
    return {
      ...state,
      message: action.message
    }

    case SET_STATUS_SHOWN:
    return {
      ...state,
      statusShown: action.statusShown
    }

    case SET_CURR_VALUE:
    return {
      ...state,
      currValue: action.currValue
    }

    case RESET_BOOK_SUGGESTIONS:
    return {
      ...state,
      suggestions: []
    }

    case RESET_CURRENT_BOOK_INFO:
    return {
      ...state,
      currentBookInfo: {}
    }

    default:
      return state;
  }
}