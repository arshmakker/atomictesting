import React from 'react';
import Button from './Button';

function Search({
  classSearch = "",
  title = "Search",
  searchPlaceholder = "Type here to search",
  onSearchResults = (param) => { console.log(param) }
}) {
  function onSearch() {
    const searchKeyword = document.getElementById("searchText").value
    onSearchResults(searchKeyword)
  }
  return (
    <div className={classSearch} >
      <input type="text" id="searchText" placeholder={searchPlaceholder} />
      <Button title={title} onButtonPress={onSearch}></Button>
    </div>
  )
}

export default Search;