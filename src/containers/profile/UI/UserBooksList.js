import React from 'react';
import { UserBooksListItemWrap } from '../container';

const UserBooksList = (props) => {
  return(
    <dev>
      { props.userBooks.length > 0 && props.userBooks.map((item, index) => <UserBooksListItemWrap book={item} key={index} />) }
    </dev>
  )
}

export default UserBooksList;
