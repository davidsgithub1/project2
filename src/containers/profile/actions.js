import axios from 'axios';
import { ADD_USER_BOOKS } from './constants';
import { stringify } from 'querystring';

export const addUserBooks = (userBooks) => {
  return ({
    type: ADD_USER_BOOKS,
    userBooks
  })
};

export const addBookToDB = ({
  bookTitle: title,
  bookAuthor: author,
  isbn13: ISBN_13,
  isbn10: ISBN_10, 
  publicationDate: publication_date, 
  zipCode: location,
  bookOwner: book_owner,
  book_status = 'available'
 }) => {
  const newBook = { title, author, ISBN_13, ISBN_10, publication_date, location, book_owner, book_status };
  const book = JSON.stringify(newBook);
  return () => {
    axios.post(`/add-book-to-db?book=${book}`)
      .then(res => console.log(res.status))
      .catch(err => console.log(err));
  }
};

export const editBook = ({
  id,
  bookTitle: title,
  bookAuthor: author,
  isbn13: ISBN_13,
  isbn10: ISBN_10, 
  publicationDate: publication_date, 
  zipCode: location,
  bookOwner: book_owner,
  book_status = 'available'
 }) => {
  const newBook = { title, author, ISBN_13, ISBN_10, publication_date, location, book_owner, book_status, id };
  const book = JSON.stringify(newBook);
  return () => {
    axios.patch(`/edit_book?book=${book}`)
      .then(res => console.log(res.status))
      .catch(err => console.log(err));
  }
};

export const getUserBooks = (id) => {
  return (dispatch) => {
    axios.get(`/get-user-books?id=${id}`)
      .then(res => {
        dispatch(addUserBooks(res.data));
      })
      .catch(err => console.log(err));
  }
}