import React, { useState } from 'react';
import search from '../styles/search.module.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import LinkSocialMedia from './linkSocialMedia';
import ResponseCard from '../components/responseCard';
import { Button } from 'react-bootstrap';
export default function CardSearch(this: any) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [feedResponse, setFeedResponse] = useState<string>('');

  const handleSubmissionPost = async(prompt: string) => {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8000/getfeedinfo',
                'Access-Control-Allow-Credentials': 'true' },
    body: JSON.stringify({ "prompt": prompt, "max_tokens":1000})
  };
    let feedResponse = await fetch('http://localhost:8000/getfeedinfo', requestOptions)
    .then(response => {
        return response.json();
    });
    return feedResponse;

  } 
    const handleSubmit = async() => {
      let submissionTextResponse = await handleSubmissionPost(searchTerm);
      setFeedResponse(submissionTextResponse.choices[0].text)
      
    }
    const inputHandler = (e: any) => {
      setSearchTerm(e.target.value);
    }
  
  return (
    <div>
    <div className={search.wrap}>
        <div className={search.responseCard}>
        <ResponseCard prop={feedResponse}/>
        </div>
      
      <div className={search.bar}>
        <input className={search.searchbar} type="text" placeholder="Type some key words to create a post." value = {searchTerm} onChange={inputHandler}></input>
      </div>
      <div className={search.centerPadding}>
      <Button type="submit" variant="primary" onClick={handleSubmit} >
            Submit
      </Button>
      </div>
    </div>
      <LinkSocialMedia />
    </div>
  );
  }
  