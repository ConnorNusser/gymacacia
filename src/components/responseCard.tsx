import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function responseCard({prop}: {prop: string}) {
  return (
    <Card style={{ width: '24rem' }}>
      <Card.Body>
        <Card.Title>Post Feed</Card.Title>
        <Card.Text as="small">
          {prop}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="primary">Share</Button>
      </Card.Body>
    </Card>
  );
}

export default responseCard;
