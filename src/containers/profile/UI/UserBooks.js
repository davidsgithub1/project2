import React from 'react';
import AddForm from './AddForm';
import { UserBooksListWrap } from '../container';

class UserBooks extends React.Component {

  componentWillMount() {
    const { userId, getUserBooks } = this.props;
    getUserBooks(userId);
  }

  render() {
    const { userId, getUserBooks, addBookToDB } = this.props;
    return (
      <div>
        <AddForm
          bookOwner={userId}
          getUserBooks={getUserBooks}
          addBookToDB={addBookToDB}
        />
        <UserBooksListWrap />
      </div>
    )
  }
}

export default UserBooks;
