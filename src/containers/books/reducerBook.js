import { 
  ADD_BOOK_TITLES,
  RESET_BOOK_TITLES,
  TRUE_ISSUGGESTIONCHOSEN,
  FALSE_ISSUGGESTIONCHOSEN,
  ADD_BOOKS,
  // SET_INPUT_VALUE
} from  './constants';

const defaultState = {
  books:[],
  bookTitles: [],
  isSuggestionChosen: false,
  // inputValue: '',
  bookShown: null
}

export default (state = defaultState, action) => {
  switch(action.type) {
    
    case ADD_BOOK_TITLES:
    return {
      ...state,
      bookTitles: [...action.bookTitles]
    }

    case ADD_BOOKS:
    return {
      ...state,
      books: [...action.books]
    }

    case RESET_BOOK_TITLES:
    return {
      ...state,
      bookTitles: []
    }

    // case SET_INPUT_VALUE:
    // return {
    //   ...state,
    //   inputValue: action.inputValue
    // }

    case TRUE_ISSUGGESTIONCHOSEN:
    return {
      ...state,
      isSuggestionChosen: true
    }

    case FALSE_ISSUGGESTIONCHOSEN:
    return {
      ...state,
      isSuggestionChosen: false
    }

    default:
      return state;
  }
}