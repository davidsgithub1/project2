import React from 'react';
import Modal from 'react-modal';

class BookListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBookOpen: false
    }
  }

  toggleIsBookOpen = () => {
    this.setState((prevState) => ({ isBookOpen: !prevState.isBookOpen }))
  }

  handleOnClickClose = () => {
    this.toggleIsBookOpen();
    this.props.resetCurrentBookInfo();
  }

  handleOnClick = () => {
    const { title, author} = this.props.info.values;
    // const author = this.props.info.values.author;
    this.toggleIsBookOpen();
    this.props.getBookInfo(title, author);
  }


  render() {
    const { title, author, location, ISBN_13: isbn13, ISBN_10: isbn10, book_status: status } = this.props.info.values;
    const { imgLink, description, rating } = this.props.currentBookInfo;
    const { isBookOpen } = this.state;
    return (
      <div>
        <div onClick={this.handleOnClick}>
          {title && <p>{title}</p>}
          {author && <p>{author}</p>}
          {status && <p>Status: {status}</p>}
          {location && <p>Location: {location}</p>}
        </div>
        <Modal
          isOpen={isBookOpen}
          contentLabel='Book'
        >
          {imgLink && <img src={imgLink}  alt="Book cover" />}
          {title && <p>Title: {title}</p>}
          {author && <p>Author: {author}</p>}
          {description && <p>Desctiption: {description}</p>}
          {rating && <p>Average rating: {rating}</p> }
          {isbn13 && <p>ISBN13: {isbn13}</p>}
          {isbn10 && <p>ISBN10: {isbn10}</p>}
          {location && <p>Location: {location}</p>}
          {status && <p>Status: {status}</p>}
          <button onClick={this.handleOnClickClose}>Close</button>
        </Modal>
      </div>
    )
  }

}

export default BookListItem;