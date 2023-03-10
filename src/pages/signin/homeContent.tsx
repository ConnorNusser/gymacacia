import GoogleButton from 'react-google-button';
import { useEffect, useState} from "react";
import Router from "next/router";
import '@/styles/Home.module.css';
import styles from '@/styles/Home.module.css'
import Button from '@mui/material/Button';
import { UserAuth } from '@/context/authcontext';
import { googleUser } from '@/types/userTypes';
import userValidation from '../../services/homeloginService';
import { redirect } from 'next/navigation';
const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {googleSignIn, logOut, user} = UserAuth();
  
  
  
  const checkSignIn = async () => {
    if (user != null) {
      const gUser: googleUser = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified
      }
      userValidation(gUser);
  }
}
  useEffect(() => {
    if(user != null){
      checkSignIn();
      Router.push(`/profile/${user.displayName}`)
    }
  },[user])
  function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message
    return String(error)
  }
  const handleGoogleSignIn = async () => {
    try{
      await googleSignIn();
    }catch(error){
      reportError({ message: getErrorMessage(error)})
    }
  }
  const handleSubmit = () => {
    try {
      // Implement your sign-in logic here
      // ...
      Router.push("/dashboard");
    } catch (error) {
        reportError({message: getErrorMessage(error)})
    }
  };

  return (
    <div className={styles.title}>
    <div>
        <h1>Welcome to Acacia!</h1>
        <br/>
        <h2>Sign In To Get Started!</h2>
        <br/>
        <GoogleButton onClick={handleGoogleSignIn}/>
    </div>
    </div>
  );
};

export default SignInForm;