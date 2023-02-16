import { UserAuth } from "@/context/authcontext";
import styles from '@/styles/Home.module.css'

export default function Profile() {
  const {user} = UserAuth();
  return (
    <div className={styles.centerStacked}>
        <img src= {user.photoURL} width="100" height="100"/>
        <p className={styles.title}>{user.displayName}</p>
        <p className={styles.title}>{user.email}</p>
    </div>
    );
}