import React from 'react';
import { SuggestionListWrap } from './container';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      values: this.props.bookTitles,
      isSuggestionChosen: this.props.isSuggestionChosen
    };
  };

  getValue = (value) => {
    this.setState(() => ({ value }))
  }

  handleOnChange = (e) => {
    const value = e.target.value;//set value on change, make query 
    if (value.trim() !== '') {
      this.props.setSuggestionChosenToFalse();
      this.props.getBookTitlesOnChange(value);
    } else if (value.length === 0) {
      this.props.resetBookTitles();
    }
    this.setState(() => ({ value }));
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const currentValue = e.target.elements[0].value;
    if(this.state.value === currentValue) {//make db query only if current input value matches values set on change
      this.props.getBooks(currentValue)
    };
    this.setState(() => ({value: ''}))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            value={this.state.value}
            onChange={this.handleOnChange}
          />
          <button disabled={!this.state.value}>Search</button>
        </form>
        <SuggestionListWrap
          suggestions={this.values}
          getValue={this.getValue}
        />
      </div>
    );
  }
}

export default SearchForm;
