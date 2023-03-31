
import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';
import SignInForm from '../components/SignInForm/SignInForm';


function LoginPage() {
  //if it;s authenthicated then redirect to home page
  const isAuthenticated = localStorage.getItem('token') ? true : false;

  return (
    isAuthenticated ? <Redirect to="/" /> :(
      <SignInForm />
    )
    
  );
}
 
export default LoginPage;