import React from 'react';

const Suggestion = (props) => {
  const hangleOnClick = () => {
    props.getValue(props.info.item);
    props.resetBookSuggestions();
  }
  const { item } = props.info;
  
  return(
    <div>
      <p onClick={hangleOnClick}>{item}</p>
    </div>
  )
}

export default Suggestion;