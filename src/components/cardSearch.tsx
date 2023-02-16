import React from 'react';
import search from '../styles/search.module.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import LinkSocialMedia from './linkSocialMedia';
function CardSearch() {
  return (
    <div>
    <div className={search.wrap}>
      <div className={search.search}>
        <input type="text" className={search.searchTerm} placeholder="Type some key words to create a post."></input>
        <button type="submit" className={search.searchButton}>
          <ArrowUpwardIcon/>
        </button>
      </div>
    </div>
      <LinkSocialMedia />
    </div>
  );
}

export default CardSearch;