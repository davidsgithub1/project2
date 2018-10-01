import React from 'react';
import { SuggestionWrap } from './container';

const SuggestionList = (props) => {
  return (
    <div>
      {!props.isSuggestionChosen && props.suggestions.map((item, index) => (
        <SuggestionWrap
          key={index}
          info={{
            item,
            index
          }}
          getValue={props.getValue} 
        />
      ))}
    </div>
  )
}

export default SuggestionList;