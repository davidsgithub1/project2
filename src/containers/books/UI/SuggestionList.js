import React from 'react';
import { SuggestionWrap } from '../container';

const SuggestionList = ({suggestions, getValue }) => {
  return (
    <div>
      {suggestions.map((item, index) => (
        <SuggestionWrap
          key={index}
          info={{
            item,
            index
          }}
          getValue={getValue} 
        />
      ))}
    </div>
  )
}

export default SuggestionList;