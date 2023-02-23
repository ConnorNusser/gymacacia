import React, { useState } from 'react';
import search from '../styles/search.module.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import LinkSocialMedia from './linkSocialMedia';
export default function CardSearch(this: any) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSubmissionPost = (prompt: string) => {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8000/getfeedinfo',
                'Access-Control-Allow-Credentials': 'true' },
    body: JSON.stringify({ prompt: {prompt}, max_tokens: 1000})
  };
    fetch('http://localhost:8000/getfeedinfo', requestOptions)
    .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();
        return data;
    });

  } 
    const handleSubmit = async() => {
      console.log(searchTerm);
      const c = await handleSubmissionPost(searchTerm);
      console.log(c);
      console.log("hi");
      console.log("yo");
      
    }
    const inputHandler = (e: any) => {
      setSearchTerm(e.target.value);
    }
  
  return (
    <form onSubmit={handleSubmit}>
    <div>
    <div className={search.wrap}>
      <div className={search.search}>
        <input name="searchTerm" type="text" className={search.searchTerm} placeholder="Type some key words to create a post." value = {searchTerm} onChange={inputHandler}></input>
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
  