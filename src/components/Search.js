import React from 'react';
import Button from './Button';


function Search({
  classSearch= "",
  title="Search",
  searchPlaceholder="Type here to search",
  onSearch=''
} ) {
  
  return (
    <div className={classSearch}>
      <Button title={title} onClick={onSearch}></Button>
      <input type="text" id="searchText" placeholder={searchPlaceholder}/>
    </div>
  )
}

export default Search;