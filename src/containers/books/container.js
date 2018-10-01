import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import SuggestionList from './SuggestionList';
import BooksList from './BooksList';
import Suggestion from './Suggestion';
import {
	// getBookTitles,
	getBooks,
	getBookTitlesOnChange,
	resetBookTitles,
	setSuggestionChosenToFalse,
	setSuggestionChosenToTrue,
	// setInputValue
} from './actions';

export const SearchFormWrap = connect(
	store =>
		({
			bookTitles: store.reducerBook.bookTitles,
			inputValue: store.reducerBook.inputValue,
			isSuggestionChosen: store.reducerBook.isSuggestionChosen
		}),
	dispatch =>
		({
			resetBookTitles: () => dispatch(resetBookTitles()),
			getBooks: (entry) => dispatch(getBooks(entry)),
			setSuggestionChosenToFalse: () => dispatch(setSuggestionChosenToFalse()),
			getBookTitlesOnChange: (entry) => dispatch(getBookTitlesOnChange(entry))
		})
)(SearchForm);

export const SuggestionListWrap = connect(
	store => ({
		suggestions: store.reducerBook.bookTitles,
		isSuggestionChosen: store.reducerBook.isSuggestionChosen
	})
)(SuggestionList);

export const SuggestionWrap = connect(
	undefined,
	dispatch => ({
		setSuggestionChosenToTrue: () => dispatch(setSuggestionChosenToTrue()),
		// setInputValue: (inputValue) => dispatch(setInputValue(inputValue))
	})
)(Suggestion);

export const BooksListWrap = connect(
	store => ({
		books: store.reducerBook.books
	})
)(BooksList);


