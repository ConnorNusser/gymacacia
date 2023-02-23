import React, { useState } from 'react';
import search from '../styles/search.module.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import LinkSocialMedia from './linkSocialMedia';
export default function CardSearch(this: any) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSubmissionPost = (prompt: string) => {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: {prompt}, max_tokens: 1000})
  };
fetch('http://localhost:5000/getfeedinfo', requestOptions)
    .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();
        return data;
    });

  }
    const handleSubmit= (e:any) => {
      console.log(searchTerm);
      console.log("hi");
      console.log(e);
      console.log(handleSubmissionPost(e));
      e.preventDefault();
    }
  
  return (
    <form onSubmit={e => { handleSubmit(e) }}>
    <div>
    <div className={search.wrap}>
      <div className={search.search}>
        <input name="searchTerm" type="text" className={search.searchTerm} placeholder="Type some key words to create a post." value = {searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>
        <button type="submit" className={search.searchButton}>
          <ArrowUpwardIcon/>
        </button>
      </div>
    </div>
      <LinkSocialMedia />
    </div>
    </form>
  );
  }
  