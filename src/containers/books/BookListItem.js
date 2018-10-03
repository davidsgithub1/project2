import React from 'react';

const BookListItem = (props) => {
  return(
    <div>
      {props.info.values.title &&  <p>Title: {props.info.values.title}</p>}
      {props.info.values.author &&  <p>Author: {props.info.values.author}</p>}
      {props.info.values.location &&  <p>Location: {props.info.values.location}</p>}
    </div>
  )
};

export default BookListItem;