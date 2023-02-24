import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import styles from '@/styles/profile.module.css';

const handleSubmit = () => {
    console.log("hi");
}
function todoList(){
  return (
    <div className="card" style={{width: "18rem"}}>
  <div className="card-header">
    Company Tags
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><div className={styles.liElements}>Cras justo odio<Button variant="secondary" size="sm">Remove</Button></div></li>
    <li className="list-group-item">Cras justo odio<Button variant="secondary" size="sm">Remove</Button></li>
    <li className="list-group-item">Cras justo odio<Button variant="secondary" size="sm">Remove</Button></li>
  </ul>
    </div>
  );
}

export default todoList;
