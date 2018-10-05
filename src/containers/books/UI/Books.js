import React from 'react';
import { SearchFormWrap, BooksListWrap, ParametersSetWrap, MessageWrap } from '../container';

const Books = () => {
  return(
    <div>
      <ParametersSetWrap />
      <SearchFormWrap />
      <BooksListWrap />
      <MessageWrap />
    </div>
  )
}

export default Books;