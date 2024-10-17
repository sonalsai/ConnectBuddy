/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom'; 
import { Logo1, Logo2 } from '../../assets/images'; 
import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className="logoContainer">
        <h1 className='logoName'>Connect Buddy</h1>
        <img className='logoImage' src={Logo2} alt="Logo" />
      </div>
      <div className="pagesContainer">
      <Link to="/" className="navLink">Home</Link>
        <Link to="/about" className="navLink">About</Link>
        <Link to="/contact" className="navLink">Contact</Link>
        <div className="profile">
          <img src={Logo1} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
