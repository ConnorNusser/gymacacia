import cardStyle from '../styles/card.module.css'

function LinkSocialMedia() {
    return (
        <li className={cardStyle.card}>
		<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-100.jpg" alt="Psychopomp" />
		<a className={cardStyle.cardImage} href="https://michellezauner.bandcamp.com/album/psychopomp-2" target="_blank">
			<h2>Psychopomp</h2>
			<p>Japanese Breakfast</p>
		</a>
	    </li>
      );
  }

export default function SocialMediaList(){
    return (
        <ul className={cardStyle.cardList}>
            <LinkSocialMedia/>
            <LinkSocialMedia/>
            <LinkSocialMedia/>
        </ul>
    );
}