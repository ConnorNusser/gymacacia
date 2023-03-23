import cardStyle from '../styles/card.module.css'
import Image from 'next/image';
import { AuthContextProvider, UserAuth } from '@/context/authcontext';
import getUserInfo from '@/services/getUsers';
import { useContext, useEffect, useRef, useState } from 'react';
import { auth } from '@/services/firebase';
enum IconLinks{
    Instagram = "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    Facebook = "https://upload.wikimedia.org/wikipedia/commons/9/91/036-facebook.png",
    Twitter = "https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"

}
interface ILinkSocialMedia{
    imgLink: string;
    name: any;
}

const LinkSocialMedia = (props: ILinkSocialMedia) =>{
    const [value, setValue] = useState(false);   // simulate a state change
    const {user} = UserAuth();
    useEffect(() => {
        if (value == true){
            console.log("yoyo")
            console.log(user);
            getUserInfo(user)
        }
    }, [value])
    useEffect(() => {
        if (user != null){
            setValue(true);
        }
      })
    return (
        <li className={cardStyle.card}>
		<Image src= {props.imgLink} width="50" height="50" alt="Instagram" />
		<p className={cardStyle.cardImage}></p>
            <small><p>{props.name}</p></small>
			<small><p>Not Linked</p></small>
	    </li>
      );
  }

export default function SocialMediaList(){
    const user = UserAuth();
    const [value, setValue] = useState(false);   // simulate a state change
    useEffect(() => {
        if (value == true){
            console.log("yoyo")
            console.log(user);
            getUserInfo(user)
        }
    }, [value])
    useEffect(() => {
        if (user != null){
            setValue(true);
        }
      })
    return (
        <ul className={cardStyle.cardList}>
            <LinkSocialMedia imgLink = {IconLinks.Instagram} name = "Instagram"  />
            <LinkSocialMedia imgLink = {IconLinks.Facebook} name ="Facebook"/>
            <LinkSocialMedia imgLink = {IconLinks.Twitter} name = "Twitter"/>
        </ul>
    );
}