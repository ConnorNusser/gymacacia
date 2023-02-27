import cardStyle from '../styles/card.module.css'
import Image from 'next/image';
import { UserAuth } from '@/context/authcontext';
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
    const user = {UserAuth};
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
    return (
        <ul className={cardStyle.cardList}>
            <LinkSocialMedia imgLink = {IconLinks.Instagram} name = "Instagram"  />
            <LinkSocialMedia imgLink = {IconLinks.Facebook} name ="Facebook"/>
            <LinkSocialMedia imgLink = {IconLinks.Twitter} name = "Twitter"/>
        </ul>
    );
}