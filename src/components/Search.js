import React from 'react';
import Button from './Button';

function Search({
  classSearch = "",
  title = "Search",
  searchPlaceholder = "Type here to search",
  onSearchResults=()=>{}
}) {
  function onSearch() {
    const searchKeyword = document.getElementById("searchText").value
    onSearchResults(searchKeyword)
  }
  return (
    <div className={classSearch} >
      <input type="text" data-testid="searchText" id="searchText" placeholder={searchPlaceholder} />
      <Button  title={title} onButtonPress={onSearch}
      ></Button>
    </div>
  )
}

export default Search;