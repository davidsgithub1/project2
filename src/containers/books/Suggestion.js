import React from 'react';

const Suggestion = (props) => {
  const hangleOnClick = () => {
    props.getValue(props.info.item);
    props.setSuggestionChosenToTrue();
    // props.setInputValue(props.info.item);
  }

  return(
    <div>
      <p onClick={hangleOnClick}>{props.info.item}</p>
    </div>
  )
}

export default Suggestion;