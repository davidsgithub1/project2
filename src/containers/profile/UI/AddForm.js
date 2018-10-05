import React from 'react';

class AddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.book ? this.props.book.id : 0,
      bookTitle: this.props.book ? this.props.book.title : '',
      bookAuthor: this.props.book ? this.props.book.author : '',
      isbn13: this.props.book ? this.props.book.ISBN_13 : '',
      isbn10: this.props.book ? this.props.book.ISBN_10 : '',
      publicationDate: this.props.book ? this.props.book.publication_date : '',
      bookOwner: this.props.bookOwner,
      zipCode: this.props.book ? this.props.book.location : ''
    }
  };

  handleOnChangeTitle = (e) => {
    const bookTitle = e.target.value;
    this.setState(() => ({ bookTitle }));
  };

  handleOnChangeAuthor = (e) => {
    const bookAuthor = e.target.value;
    this.setState(() => ({ bookAuthor }));
  };

  handleOnChangeIsbn13 = (e) => {
    const isbn13 = e.target.value;
    if (!isbn13 || isbn13.match(/^(\d{1,13})?$/)) {
      this.setState(() => ({ isbn13 }));
    }
  };

  handleOnChangeIsbn10 = (e) => {
    const isbn10 = e.target.value;
    if (!isbn10 || isbn10.match(/^(\d{1,10})?$/)) {
      this.setState(() => ({ isbn10 }));
    }
  };

  handleOnChangeZip = (e) => {
    const zipCode = e.target.value;
    if (!zipCode || zipCode.match(/^(\d{1,5})?$/)) {
      this.setState(() => ({ zipCode }));
    }
  };

  handleOnChangePublicationDate = (e) => {
    const date = e.target.value;
    if (!date || date.match(/^(\d{1,4})?$/)) {
      let publicationDate = String(date);
      this.setState(() => ({ publicationDate }));
    }
  };


  handleOnSubmit = (e) => {
    e.preventDefault();
    const { addBookToDB, getUserBooks, editBook } = this.props;
    const { bookOwner } = this.state;
  
    if (!!addBookToDB) {
      console.log('add');
      addBookToDB(this.state);
    } else if(!!editBook){
      console.log('edit!');
      editBook(this.state);
    } 


    console.log(bookOwner);
    if (!!bookOwner) {
      getUserBooks(bookOwner);
    }
  };

  render() {
    const { bookTitle, bookAuthor, isbn13, isbn10, publicationDate, zipCode, id } = this.state;
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <p>Book title</p>
          <input
            type="text"
            placeholder="Book title"
            value={bookTitle}
            onChange={this.handleOnChangeTitle}
          />
          <p>Book author</p>
          <input
            type="text"
            placeholder="Book author"
            value={bookAuthor}
            onChange={this.handleOnChangeAuthor}
          />
          <p>ISBN 13</p>
          <input
            type="text"
            placeholder="1234567890123"
            value={isbn13}
            onChange={this.handleOnChangeIsbn13}
          />
          <p>ISBN 10</p>
          <input
            type="text"
            placeholder="1234567890"
            value={isbn10}
            onChange={this.handleOnChangeIsbn10}
          />
          <p>Publication date</p>
          <input
            type="text"
            placeholder="1999"
            value={publicationDate}
            onChange={this.handleOnChangePublicationDate}
          />
          <p>Your zip code</p>
          <input
            type="text"
            placeholder="11374"
            value={zipCode}
            onChange={this.handleOnChangeZip}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddForm;