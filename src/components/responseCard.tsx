import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
interface ICardFeed{
  socialMediaPlatform: string;
  feedType: string;
  image?: string;
}
function responseCard(props: ICardFeed) {
  if (props.image){
    const srcLink = props.image + "/100px240";
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
        <Button variant="primary">Share</Button>
      </Card.Body>
    </Card>
  );
}

export default responseCard;
