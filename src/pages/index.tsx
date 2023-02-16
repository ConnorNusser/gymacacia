import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar';
import {Component, useEffect} from 'react';
import { AuthContextProvider, UserAuth } from '@/context/authcontext';
import Router from "next/router";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {user} = UserAuth();
  useEffect(() => {
    if(user == null || user == ''){
      Router.push('signin/home')
    }else{
      Router.push('main')
    }
    // ...
  }, []);
  return (
    <>
      <Head>
      </Head>
    </>
  )
}
