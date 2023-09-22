import React, { useState } from 'react';
import PropTypes from 'prop-types';

// this is wher the search bar have been made

function SearchBar({ setSearchTerm, setHasSearched }) {
  const [inputValue, setInputValue] = useState("");


  // en event key for og kunne trykke "Enter"
  document.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
      handleSearchClick();
    }
  })

  // for input field
  const handleSearchClick = () => {
    setSearchTerm(inputValue);
    setHasSearched(true);
    setInputValue("")
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for an emoji..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}


// fra chat-gpt, måtte vist ha dette inn vist ikke fikk jeg mangen feil koderer.
SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
  setHasSearched: PropTypes.func.isRequired
};

export default SearchBar;
