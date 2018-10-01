import axios from 'axios';
import { 
  ADD_BOOK_TITLES,
  RESET_BOOK_TITLES,
  FALSE_ISSUGGESTIONCHOSEN,
  TRUE_ISSUGGESTIONCHOSEN,
  ADD_BOOKS,
  // SET_INPUT_VALUE 
} from './constants';

export const addBooks = (books) => {
  return({
    type: ADD_BOOKS,
    books
  })
};
export const addBookTitles = (bookTitles) => {
  return({
    type: ADD_BOOK_TITLES,
    bookTitles
  })
};

export const resetBookTitles = () => {
  return ({
    type: RESET_BOOK_TITLES
  })
};

export const setSuggestionChosenToTrue = () => {
  return ({
    type: TRUE_ISSUGGESTIONCHOSEN
  })
};

export const setSuggestionChosenToFalse = () => {
  return ({
    type: FALSE_ISSUGGESTIONCHOSEN
  })
};

// export const setInputValue = (inputValue) => {
//   return ({
//     type: SET_INPUT_VALUE,
//     inputValue
//   })
// };

// export const getBookTitles = () => {//get all book titles
//   return (dispatch) => {
//     axios(`/get-titles`)
//       .then(res => dispatch(addBookTitles(res.data)))
//       .catch(err => console.log(err));
//   }
// };

export const getBookTitlesOnChange = (entry) => {//add books titles
  return (dispatch) => {
    axios(`/get-titles-change?entry=${entry}`)
    .then(res => dispatch(addBookTitles(res.data)))
    .catch(err => console.log(err));
  }
}
;
export const getBooks = (entry) => {//add books
  return (dispatch) => {
    axios(`/get-books/?entry=${entry}`)
    .then(res => dispatch(addBooks(res.data)))
    .catch(err => console.log(err));
  }
};