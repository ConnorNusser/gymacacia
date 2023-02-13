import GoogleButton from 'react-google-button';
import React, { useState } from "react";
import Router from "next/router";

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
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
    <GoogleButton/>
    </div>
  );
};

export default SignInForm;