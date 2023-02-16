import { UserAuth } from "@/context/authcontext";
import styles from '@/styles/Home.module.css'

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
  return (
  <div className={styles.centerStacked}>
        <img src= {props.photoUrl} width="100" height="100"/>
        <p className={styles.title}>{props.displayName}</p>
        <p className={styles.title}>{props.email}</p>
    </div>
  );
}

export default Profile;