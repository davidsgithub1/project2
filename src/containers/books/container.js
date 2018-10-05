import { connect } from 'react-redux';
import SearchForm from './UI/SearchForm';
import SuggestionList from './UI/SuggestionList';
import BooksList from './UI/BooksList';
import Suggestion from './UI/Suggestion';
import ParametersSet from './UI/ParametersSet';
import BookListItem from './UI/BookListItem';
import Message from './UI/Message';
import {
	getBooks,
	getBookInfo,
	getBookSuggestions,
	resetBookSuggestions,
	setSearchParameter,
	setStatusShown,
	setCurrValue,
	setMessage,
	resetCurrentBookInfo
} from './actions';


//actions and values for SearchForm
export const SearchFormWrap = connect(
	store =>
		({
			suggestions: store.reducerBook.suggestions,
			inputValue: store.reducerBook.inputValue,
			isSuggestionChosen: store.reducerBook.isSuggestionChosen,
			searchParameter: store.reducerBook.searchParameter,
			statusShown: store.reducerBook.statusShown
		}),
	dispatch =>
		({
			getBooks: (entry, column, status) => dispatch(getBooks(entry, column, status)),
			getBookSuggestions: (entry, column, status) => dispatch(getBookSuggestions(entry, column, status)),
			setCurrValue: (currValue) => dispatch(setCurrValue(currValue)),
			setMessage: (message) => dispatch(setMessage(message)),
			resetBookSuggestions: () => dispatch(resetBookSuggestions())
		})
)(SearchForm);


//actions and values for SuggestonList
export const SuggestionListWrap = connect(
	store => ({
		suggestions: store.reducerBook.suggestions,
		isSuggestionChosen: store.reducerBook.isSuggestionChosen
	})
)(SuggestionList);


//actions and values for Suggestion
export const SuggestionWrap = connect(
	undefined,
	dispatch => ({
		resetBookSuggestions: () => dispatch(resetBookSuggestions())
	})
)(Suggestion);


//actions and values for BookList
export const BooksListWrap = connect(
	store => ({
		books: store.reducerBook.books
	})
)(BooksList);


//actions and values for BookListItem
export const BookListItemWrap = connect(
	store => ({
		currentBookInfo: store.reducerBook.currentBookInfo
	}),
	dispatch => ({
		getBookInfo: (title, author) => dispatch(getBookInfo(title, author)),
		resetCurrentBookInfo: () => dispatch(resetCurrentBookInfo())
	})
)(BookListItem);


//actions and values for ParameterSet
export const ParametersSetWrap = connect(
	store =>
		({
			searchParameter: store.reducerBook.searchParameter,
			statusShown: store.reducerBook.statusShown,
			currValue: store.reducerBook.currValue,
			booksLength: store.reducerBook.books.length
		}),
	dispatch =>
		({
			getBooks: (entry, column, status) => dispatch(getBooks(entry, column, status)),
			setStatusShown: (statusShown) => dispatch(setStatusShown(statusShown)),
			setCurrValue: (currValue) => dispatch(setCurrValue(currValue)),
			setMessage: (message) => dispatch(setMessage(message)),
			setSearchParameter: (searchParameter) => dispatch(setSearchParameter(searchParameter))
		})
)(ParametersSet);


export const MessageWrap = connect(
	store => ({
		// isBooksEmpty: store.reducerBook.books.length === 0,
		message: store.reducerBook.message
	})
)(Message)