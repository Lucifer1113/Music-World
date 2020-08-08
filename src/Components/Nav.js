import React from 'react';
import './Nav.css';
import LoginBtn from './LoginBtn';
const Nav=()=> {
    return(
        <div className='nav-bar'>
            <img className='brand-logo' src="" alt="isitgood"/>
            <LoginBtn className='login-btn'/>
        </div>
        
    )
}
export default Nav;