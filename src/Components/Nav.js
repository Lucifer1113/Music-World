import React from 'react';
import './Nav.css';
// import LoginBtn from './LoginBtn';
import Brand from './Brand';
import Login from './Login/LoginButton';

const Nav=()=> {
    return(
        <div className='nav-bar'>
            
            <Brand/>
            {/* <LoginBtn className='login-btn'/> */}
            <Login/>
        </div>
        
    )
}
export default Nav;