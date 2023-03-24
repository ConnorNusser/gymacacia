import { handleInstagramPost } from '@/apis/instagrampost';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { SocialMediaEnums } from '@/types/contentTypes';
interface ICardFeed{
  socialMediaPlatform: string;
  feedType: string;
  image?: string;
}
function responseCard(props: ICardFeed) {
  const handlePost = () => {
    if (props.socialMediaPlatform == SocialMediaEnums.Instagram){
      handleInstagramPost({imageUrl: props.image, caption: props.feedType})
    }
  }
  return (
    <Card style={{ width: '24rem'}}>
      <Card.Body>
      { props.image ? <Card.Img variant="top" src={props.image} /> : null }
        <Card.Title as="h5">{props.socialMediaPlatform}</Card.Title>
        <Card.Text as="small">
          {props.feedType}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="primary" onClick={handlePost}>Share</Button>
      </Card.Body>
    </Card>
  );
}

export default responseCard;
