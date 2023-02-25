import { UserAuth } from "@/context/authcontext";
import styles from '@/styles/Home.module.css'
import { useState } from "react";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import TodoList from "@/components/todoList";
import CompanyInfo from "@/components/companyInfo";
interface IProfileComponent {
  photoUrl:any;
  displayName:any;
  email:any;
}

function Profile() {
  const {user} = UserAuth();
  return (
    <div>
    { user == '' || user == null ? <h1>No Info</h1> : <ProfileComponent photoUrl={user.photoURL} displayName={user.displayName} email = {user.email}/> }
    </div>
    );
}

const ProfileComponent = (props:IProfileComponent) => {
  const [searchTerm, setSearchTerm] = useState<number>(0);
  return (
   <>
  <div className="container">
    <div className="row">
          <div className="col-sm">
          <div className="btn-group" role="group" aria-label="Basic example">
          <Button variant="primary">Tags<Badge bg="secondary">{searchTerm}</Badge></Button>
          <Button variant="primary">Add New</Button>
        </div>
          <TodoList/>
          </div>
          <div className="col-sm">
          <CompanyInfo/>
          </div>
      </div>
      </div>
  </>
  );
}

export default Profile;