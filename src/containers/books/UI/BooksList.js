import React from 'react';
import { BookListItemWrap } from '../container';

const BooksList = ({books}) => {
  return(
    <div>
      {
        books.length > 0 &&
        books.map((item, index) => ( <BookListItemWrap key={index} info={{values: item, index}} /> ))
      }
    </div>
  )
}

export default BooksList;