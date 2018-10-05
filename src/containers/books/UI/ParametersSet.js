import React from 'react';

class ParametersSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: this.props.searchParameter !== 'title'
    }
  }

  handleOnClick = (e) =>{
    const searchParameter = e.target.innerText.toLowerCase();
    const { booksLength } = this.props;
    this.props.setSearchParameter(searchParameter);

    if(booksLength > 0) this.props.setCurrValue('');

    this.setState((prevState) => ({
      isDisabled: !prevState.isDisabled
    }))
  }

  handleOnChange = (e) => {
    const statusShownOwn = e.target.value;
    const { currValue, searchParameter } = this.props;
    this.props.setStatusShown(statusShownOwn);
    
    //if value of status did not change
    if(currValue !== '') {
      this.props.setMessage('');
      this.props.getBooks(currValue, searchParameter, statusShownOwn);
    } 
  }

  render() {
    const { isDisabled } = this.state;
    const { statusShown } = this.props;
    return (
      <div>
        <button disabled={!isDisabled} onClick={this.handleOnClick}>Title</button>
        <button disabled={isDisabled} onClick={this.handleOnClick}>Author</button>
        <div>
          <select
            onChange={this.handleOnChange}
            value={statusShown}
          >
            <option value="available">Available</option>
            <option value="all">All</option>
          </select>
        </div>
      </div>
    )
  }

}

export default ParametersSet;