import React from 'react';
import search from '../styles/search.module.css';
import SearchIcon from '@mui/icons-material/Search';
import LinkSocialMedia from './linkSocialMedia';
function CardSearch() {
  return (
    <div>
    <div className={search.wrap}>
      <div className={search.search}>
        <input type="text" className={search.searchTerm} placeholder="What are you looking for?"></input>
        <button type="submit" className={search.searchButton}>
          <SearchIcon />
        </button>
      </div>
    </div>
      <LinkSocialMedia />
    </div>
  );
}

export default CardSearch;