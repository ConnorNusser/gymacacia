import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import styles from '@/styles/profile.module.css';

const handleSubmit = () => {
    console.log("hi");
}
function companyInfo(){
  return (
    <div className="card">
  <div className="card-header">
    Company Info
  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  );
}

export default companyInfo;