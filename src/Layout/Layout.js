import React from 'react';
//use link instead of a tag
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '../components/ShoppingCartIcon/ShoppingCartIcon';
import Footer from '../components/Footer/Footer';
import LogOut from '../components/LogOut/LogOut';
import { useSelector } from "react-redux";

function Layout({ children }) {
  

  const isAuthenticated = () => {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  };
  return (
    <div>
      
      <header>
        <nav>
          <div className="logo">
            <a href="/">TrendCarts</a>
          </div>
          <ul>
            <Link to="/shoes">
              <li>Shoes</li>
            </Link>
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/tools">
              <li>Tools</li>
            </Link>
            <ShoppingCartIcon cartItems={[1,2,4]}/>
          </ul>
          {isAuthenticated() ? (    
             <button className='button-danger' onClick={()=>LogOut()}>Log Out</button>
          ): (
            <Link to="/login">
               <button className='button-primary'>Log In</button>
            </Link>
            
          )}
         
        </nav>
      </header>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;