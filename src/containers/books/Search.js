import React from 'react';
import Autosuggest from 'react-autosuggest';
 
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      value: '',
      values: [ 'c', 'cycle', 'avadakedavra'],
      suggestions: []
    };
  }
 
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length; 
    return inputLength === 0 ? [] : this.state.values.filter(item => item.toLowerCase().slice(0, inputLength) === inputValue
    );
  };
 
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  getSuggestionValue = suggestion => suggestion;

  renderSuggestion = suggestion => (
    <div>
      {suggestion}
    </div>
  );
 
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Type a programming language',
      value,
      onChange: this.onChange
    };

    return (
      <div>
        text
        <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
      </div>
    );
  }
}

export default SearchForm;