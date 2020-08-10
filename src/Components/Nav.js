import React from 'react';
import './Nav.css';
import LoginBtn from './LoginBtn';
import Brand from './Brand';
const Nav=()=> {
    return(
        <div className='nav-bar'>
            
            <Brand/>
            <LoginBtn className='login-btn'/>
        </div>
        
    )
}
export default Nav;