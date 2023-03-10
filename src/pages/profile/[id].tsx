import { UserAuth } from "@/context/authcontext";
import { useState, useEffect } from "react";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import TodoList from "@/components/todoList";
import CompanyInfo from "@/components/companyInfo";
import { getDoc } from "@firebase/firestore";
import { db } from "@/services/firebase";
import { doc } from "firebase/firestore";
import BioForm from "@/components/bioForm";

interface IProfileComponent {
  photoUrl:any;
  displayName:any;
  email:any;
  uid:string;
}
function Profile() {
  const [isFilledOut, setFilledOut] = useState(true);
  const {user} = UserAuth();
  useEffect(() => {
    const formComponent = async()=>{
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()){
        let isFilledOut = docSnap.data()['isFormFilled'];
        setFilledOut(isFilledOut);
      }
      setFilledOut(false);
    }

    formComponent()
  },[]);
  return (
    <div>
    <div>
    {
    (!isFilledOut)
        ? <BioForm userID = {user.uid}/>
        : <div hidden></div>
    }
    </div>
    { user == '' || user == null ? <h1>No Info</h1> : <ProfileComponent photoUrl={user.photoURL} displayName={user.displayName} email = {user.email} uid= {user.uid}/> }
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