import React from 'react';
import BooksListItem from './BookListItem';

const BooksList = (props) => {
  return(
    <div>
      {props.books.map((item, index) => ( <BooksListItem key={index} info={{values: item, index}} /> ))}
    </div>
  )
}

export default BooksList;