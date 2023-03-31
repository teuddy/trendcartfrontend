
//create logout component
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


const LogOut = () => {
    localStorage.removeItem('token');
    return (
        <Redirect to="/login" />
    );
    }

export default LogOut;