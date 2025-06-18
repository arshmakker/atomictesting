import React, { useState } from 'react';
import Button from './Button';

function Search({
  classSearch = "",
  title = "Search",
  searchPlaceholder = "Type here to search",
  onSearchResults = () => {}
}) {
  const [searchValue, setSearchValue] = useState('');

  function onSearch() {
    onSearchResults(searchValue);
  }

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div className={classSearch}>
      <input 
        type="text" 
        data-testid="searchText" 
        id="searchText" 
        placeholder={searchPlaceholder}
        value={searchValue}
        onChange={handleInputChange}
      />
      <Button title={title} onButtonPress={onSearch} />
    </div>
  );
}

export default Search;