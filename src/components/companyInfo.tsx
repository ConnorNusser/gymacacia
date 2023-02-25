import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import styles from '@/styles/profile.module.css';
import { useState } from 'react';

const handleSubmit = () => {
    console.log("hi");
}
function companyInfo(){
  return (
    <div className="card">
  <div className="card-header">
    Company Name: None
  </div>
  <div className="card-body">
    <h5 className="card-title">Bio</h5>
    <p className="card-text"><EditCompanyBio/></p>
    <Button className="btn btn-success">Edit</Button>
  </div>
</div>
  );
}

function EditCompanyBio(){
    const [text, setText] = useState(""); // initialize state with empty string
  
    const handleTextChange = (event: { target: { value: any; }; }) => {
      setText(event.target.value); // update state with the new value of the textbox
    };
  
    const handleSaveClick = () => {
      // save the text somewhere, such as in a database or in local storage
      console.log("Saving text:", text);
    };
    return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleSaveClick}>Save</button>
    </div>
    );
}

export default companyInfo;
