import cardStyle from '../styles/card.module.css'
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
    return (
        <li className={cardStyle.card}>
		<img src= {props.imgLink} width="50" height="50" alt="Instagram" />
		<a className={cardStyle.cardImage} href="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" target="_blank">
            <small><p>{props.name}</p></small>
			<small><p>Not Linked</p></small>
		</a>
	    </li>
      );
  }

export default function SocialMediaList(){
    const Instagram = IconLinks.Instagram;
    const Facebook = IconLinks.Facebook;
    const Twitter = IconLinks.Twitter;
    return (
        <ul className={cardStyle.cardList}>
            <LinkSocialMedia imgLink = {IconLinks.Instagram} name = "Instagram"  />
            <LinkSocialMedia imgLink = {IconLinks.Facebook} name ="Facebook"/>
            <LinkSocialMedia imgLink = {IconLinks.Twitter} name = "Twitter"/>
        </ul>
    );
}