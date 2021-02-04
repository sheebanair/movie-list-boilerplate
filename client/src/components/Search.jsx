import React from 'react';
import App from './App.jsx';

var Search = ({handleSearch}, {handleSubmit}) => (
  <form>
    <input name="searchbar" type="text" onChange={(e) => handleSearch(e.target.value)}></input>
    <button type="button"  onClick={(e) => handleSubmit(e.target.value)} >Go!</button>
  </form>
);

export default Search;

