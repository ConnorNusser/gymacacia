import React, { useState } from 'react';
import search from '../styles/search.module.css';
import LinkSocialMedia from './linkSocialMedia';
import ResponseCard from '../components/responseCard';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
export default function CardSearch(user : {user: any}) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [feedResponseFb, setFeedResponseFb] = useState<string>('');
  const [feedResponseIG, setFeedResponseIG] = useState<string>('');
  const [feedResponseTwitter, setFeedResponseTwitter] = useState<string>('');
  const [feedResponseIGImage, setFeedResponseIgImage] = useState<string>('');
  const [feedResponseFbImage, setFeedResponseFbImage] = useState<string>('');


  interface handleSubmissionPost{
    prefix: string;
    searchTerm: string;
  }
  const handleSubmissionPost = async(prompt: handleSubmissionPost) => {
   let searchString = `Create a post for ${prompt.prefix} ` + prompt.searchTerm; 
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': 'http://localhost:8000/getfeedinfo',
                  'Access-Control-Allow-Credentials': 'true' },
      body: JSON.stringify({ "prompt": searchString, "max_tokens":1000})
    };
    let feedResponse = await fetch('http://localhost:8000/getfeedinfo', requestOptions)
    .then(response => {
        return response.json();
    });
    return feedResponse;

  }
  const handleSubmissionImage = async(prompt: handleSubmissionPost) => {
    let searchString = `Create a picture for ${prompt.prefix} ` + prompt.searchTerm; 
     const requestOptions = {
       method: 'POST',
       headers: { 'Content-Type': 'application/json',
                   'Access-Control-Allow-Origin': 'http://localhost:8000/getfeedinfo/image',
                   'Access-Control-Allow-Credentials': 'true' },
       body: JSON.stringify({ "prompt": searchString})
     };
     let feedResponse = await fetch('http://localhost:8000/getfeedinfo/image', requestOptions)
     .then(response => {
         return response.text();
     });
     return feedResponse;
 
   }  
    const handleSubmit = async() => {
      handleSubmitFb();
      handleSubmitIG();
      handleSubmitTwitter();
      
    }
    const handleSubmitFb = async() => {
      let submissionTextResponse = await handleSubmissionPost({prefix: "Facebook", searchTerm: searchTerm});
      let submissionImageReponse = await handleSubmissionImage({prefix: "Facebook", searchTerm: searchTerm});
      setFeedResponseFb(submissionTextResponse.choices[0].text)
      setFeedResponseFbImage(submissionImageReponse);
    }
    const handleSubmitIG = async() => {
      let submissionTextResponse = await handleSubmissionPost({prefix: "Instagram", searchTerm: searchTerm});
      let submissionImageReponse = await handleSubmissionImage({prefix: "Instagram", searchTerm: searchTerm});
      setFeedResponseIG(submissionTextResponse.choices[0].text)
      setFeedResponseIgImage(submissionImageReponse);
      
    }
    const handleSubmitTwitter = async() => {
      let submissionTextResponse = await handleSubmissionPost({prefix: "Twitter", searchTerm: searchTerm});
      setFeedResponseTwitter(submissionTextResponse.choices[0].text)
      
    }

    const inputHandler = (e: any) => {
      setSearchTerm(e.target.value);
    }
  
  return (
    <div>
      <div className={search.box}>
      <div className={search.cardWrap}>
        <div className={search.responseCard}>
        <ResponseCard socialMediaPlatform='Instagram' feedType={feedResponseIG} image={feedResponseIGImage} user={user}/>
        </div>
        <div className={search.responseCard}>
        <ResponseCard socialMediaPlatform='Facebook' feedType={feedResponseFb} image={feedResponseFbImage} user={user}/>
        </div>
        <div className={search.responseCard}>
        <ResponseCard socialMediaPlatform='Twitter' feedType={feedResponseTwitter} user={user}/>
        </div>
      </div>
      </div>
    <div className={search.wrap}>
      <div className={search.bar}>
        <input className={search.searchbar} type="text" placeholder="Type some key words to create a post manually." value = {searchTerm} onChange={inputHandler}></input>
      </div>
      <div className={search.centerPadding}>
      <Button type="submit" variant="contained" onClick={handleSubmit} endIcon={<SendIcon/>}>
            Submit
      </Button>
      </div>
    </div>
      <LinkSocialMedia />
    </div>
  );
  }
  