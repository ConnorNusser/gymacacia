import cardStyle from '../styles/card.module.css'
import Image from 'next/image';
import { AuthContextProvider, UserAuth } from '@/context/authcontext';
import getLinkedInfo from '@/services/getUsers';
import { useContext, useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import SocialMediaLinkForm from './socialMediaLinkForm';
enum IconLinks{
    Instagram = "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    Facebook = "https://upload.wikimedia.org/wikipedia/commons/9/91/036-facebook.png",
    Twitter = "https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"

}
interface ILinkSocialMedia{
    imgLink: string;
    name: string;
    isLinked: boolean;
}

const LinkSocialMedia = (props: ILinkSocialMedia) =>{
    const {user} = UserAuth();
    const [show, setShow] = useState(false);
    const showSocialMediaLinkForm = () => {
        setShow(true);
      };
      const LinkSocialMediaButton = ({name}: {name: string})=>{
        return(
            <Button onClick={showSocialMediaLinkForm}>Link Account for {name}</Button>
        )
    
    }
    return (
        <>
        {show? <SocialMediaLinkForm userID={user.uid} socialMediaSite={props.name}/> : null}
        <li className={cardStyle.card}>
		<Image src= {props.imgLink} width="50" height="50" alt="Instagram" />
		<p className={cardStyle.cardImage}></p>
            <small><p>{props.name}</p></small>
            <small><p>{props.isLinked ? <p>Linked</p> : <LinkSocialMediaButton name={props.name}/>}</p></small>
	    </li>
        </>
      );
  }

export default function SocialMediaList(){
    const {user} = UserAuth();
    const [value, setValue] = useState(false);   // simulate a state change
    const [twitterLinked, setTwitter] = useState(false);
    const [instagramLinked, setInstagram] = useState(false);
    const [facebookLinked, setFacebook] = useState(false);
    const fetchData = async (user: any) => {
        const {twitterLinked, instagramLinked, facebookLinked} = await getLinkedInfo(user);
        setFacebook(facebookLinked);
        setInstagram(instagramLinked);
        setTwitter(twitterLinked);
      }
    useEffect(() => {
        if (value == true){
            fetchData(user)
        }
    }, [value])
    useEffect(() => {
        if (user != null){
            setValue(true);
        }
      })
    return (
        <ul className={cardStyle.cardList}>
            <LinkSocialMedia imgLink = {IconLinks.Instagram} name = "Instagram" isLinked = {instagramLinked} />
            <LinkSocialMedia imgLink = {IconLinks.Facebook} name ="Facebook" isLinked = {facebookLinked}/>
            <LinkSocialMedia imgLink = {IconLinks.Twitter} name = "Twitter" isLinked = {twitterLinked}/>
        </ul>
    );
}