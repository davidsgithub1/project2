import axios from 'axios';
import { 
  ADD_BOOK_SUGGESTIONS,
  ADD_BOOKS,
  ADD_CURRENT_BOOK_INFO,
  SET_SEARCH_PARAMETER,
  SET_STATUS_SHOWN,
  SET_CURR_VALUE,
  SET_MESSAGE,
  RESET_BOOK_SUGGESTIONS,
  RESET_CURRENT_BOOK_INFO,
} from './constants';

export const addBooks = (books) => {
  return({
    type: ADD_BOOKS,
    books
  })
};

export const addCurrentBookInfo = (currentBookInfo) => {
  return({
    type: ADD_CURRENT_BOOK_INFO,
    currentBookInfo
  })
};

export const resetCurrentBookInfo = () => {
  return({
    type: RESET_CURRENT_BOOK_INFO
  })
};

export const addBookSuggestions = (suggestions) => {
  return({
    type: ADD_BOOK_SUGGESTIONS,
    suggestions
  })
};

export const resetBookSuggestions = () => {
  return ({
    type: RESET_BOOK_SUGGESTIONS
  })
};

export const setSearchParameter = (searchParameter) => {
  return ({
    type: SET_SEARCH_PARAMETER,
    searchParameter
  })
};

export const setCurrValue = (currValue) => {
  return ({
    type: SET_CURR_VALUE,
    currValue
  })
}
;
export const setMessage = (message) => {
  return ({
    type: SET_MESSAGE,
    message
  })
};

export const setStatusShown = (statusShown) => {
  return ({
    type: SET_STATUS_SHOWN,
    statusShown
  })
};

export const getBookSuggestions = (entry, column, status) => {//get books suggestions
  return (dispatch) => {
    axios(`/get-suggestion?entry=${entry}&column=${column}&status=${status}`)
    .then(res => dispatch(addBookSuggestions(res.data)))
    .catch(err => console.log(err));
  }
};


export const getBooks = (entry, column, status) => {//get books
  return (dispatch) => {
    axios(`/get-books/?entry=${entry}&column=${column}&status=${status}`)
    .then(res =>{
      if(res.data.length > 0) dispatch(addBooks(res.data));
      else {
        dispatch(addBooks(res.data));
        dispatch(setMessage('Nothing was found! Try again!'));
      }
    })
    .catch(err => console.log(err));
  }
};

export const getBookInfo = (title, author) => {//get book info from Google books api
  return (dispatch) => {
    const query = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}`;
    let response = {};
    axios(query)
    .then(res => {
      response.rating = res.data.items[0].volumeInfo.averageRating,
      response.description = res.data.items[0].volumeInfo.description
      const imgQuery = res.data.items[0].selfLink;
      return axios(imgQuery)
    })
    .then(res => {
      response.imgLink = res.data.volumeInfo.imageLinks.large;
      dispatch(addCurrentBookInfo(response));
    })
    .catch(err => console.log(err));
  }
};