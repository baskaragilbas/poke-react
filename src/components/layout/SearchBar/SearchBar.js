import React from 'react';
//import styles from './SearchBar.module.css';

function SearchBar({ searchFilter }) {

  function handleChange(e) {
    searchFilter(e.target.value)
  }

  return (
    <div class="d-flex justify-content-center align-items-center container">
      <div class="row mb-4 mt-4">
        <form class="form-inline">
          <div class="row justify-content-center">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}></input>
            {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
          </div>
        </form>
      </div>
    </div>

  )
};
export default SearchBar;
