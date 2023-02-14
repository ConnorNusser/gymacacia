import GoogleButton from 'react-google-button';
import React, { useState } from "react";
import Router from "next/router";
import '@/styles/Home.module.css';
import styles from '@/styles/Home.module.css'
import Button from '@mui/material/Button';

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message
    return String(error)
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
    <div>
    <div className={styles.title}>
        <h1 className={styles.title}>Welcome to Acacia!</h1>
    </div>
    <div className={styles.center}>
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className='blockquote text-center'>
        <label className="h6" htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='blockquote text-center'>
        <label className="h6" htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.buttonsStyling}>
        <Button variant="contained" size="medium">Register</Button>
        <Button variant="contained" size="medium">Sign In</Button>
      </div>
      <div >
        <GoogleButton/>
      </div>
    </form>
    </div>
    </div>
  );
};

export default SignInForm;