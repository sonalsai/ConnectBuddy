/* eslint-disable no-unused-vars */
import React from 'react'
import { Logo1, Logo2 } from '../../assets/images'
import "./navbar.scss"

const Navbar = () => {
    return (
        <div className='navbarContainer'>
            <div className="logoContainer">
                <h1 className='logoName'>Connect Buddy</h1>
                <img className='logoImage' src={Logo2} alt="Logo" />
            </div>
            <div className="pagesContainer">
                <a href="/">About</a>
                <a href="/">Contact</a>
                <div className="profile">
                    <img src={Logo1} alt="profile" />
                </div>
            </div>
        </div>
    )
}

export default Navbar