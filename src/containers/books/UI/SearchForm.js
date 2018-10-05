import React from 'react';
<<<<<<< HEAD:src/containers/books/SearchForm.js
import { SuggestionListWrap } from './container';
=======
import { SuggestionListWrap } from '../container';
>>>>>>> 503021c8e4b5edf535d608f8156f39fb14d75474:src/containers/books/UI/SearchForm.js

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      values: this.props.suggestions
    };
  };

  componentDidMount() {
    this.props.resetBookSuggestions();
    this.props.setMessage('');
  }

  getValue = (value) => {
    this.setState(() => ({ value }))
  }

  handleOnChange = (e) => {
    const value = e.target.value;//set value on change, make query
    const { searchParameter, statusShown } = this.props;
    
    if (value.trim() !== '') {
      this.props.getBookSuggestions(value, searchParameter, statusShown);
      this.props.setMessage('');
    } else if (value.length === 0) {
      this.props.resetBookSuggestions();
    }
    this.setState(() => ({ value }));
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const currentValue = e.target.elements[0].value;
    const { searchParameter, statusShown } = this.props;
    // const statusShown = this.props.statusShown;

    this.props.setCurrValue(currentValue); 
    this.props.resetBookSuggestions();
    this.props.getBooks(currentValue, searchParameter, statusShown)
    this.setState(() => ({value: ''}))
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            value={value}
            onChange={this.handleOnChange}
          />
          <button disabled={!value}>Search</button>
        </form>
        <SuggestionListWrap
          getValue={this.getValue}
        />
      </div>
    );
  }
}

export default SearchForm;
