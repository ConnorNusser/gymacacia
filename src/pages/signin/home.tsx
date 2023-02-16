import React, { Component } from 'react';
import Navbar from '@/components/Navbar';
import SignInForm from './homeContent';
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
class signIn extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <SignInForm />
      </div>
    );
  }
}

export default signIn;