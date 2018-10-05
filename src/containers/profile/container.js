import { connect } from 'react-redux';
import UserBooks from './UI/UserBooks';
import UserBooksList from './UI/UserBooksList';
import UserBooksListItem from './UI/UserBooksListItem';
import {
  addBookToDB,
  editBook,
  getUserBooks
} from './actions';

export const UserBooksWrap = connect(
  store => ({
    userId: store.addReducer.userId
  }),
  dispatch => ({
    getUserBooks: (id) => dispatch(getUserBooks(id)),
    addBookToDB: (book) => dispatch(addBookToDB(book))
  })
)(UserBooks);

export const UserBooksListWrap = connect(
  store => ({
    userBooks: store.addReducer.userBooks
  })
)(UserBooksList);

export const UserBooksListItemWrap = connect(
  store => ({
    bookOwner: store.addReducer.userId
  }),
  dispatch => ({
    editBook: (book) => dispatch(editBook(book)),
    getUserBooks: (id) => dispatch(getUserBooks(id)),
  })
)(UserBooksListItem);