import React from 'react';
import './Nav.css';
import LoginBtn from './LoginBtn';
import brand_logo from '../Images/brand.png'
const Nav=()=> {
    return(
        <div className='nav-bar'>
            <img className='brand-logo' src={brand_logo}  style={{width:70,height:'auto'}}alt="Mobile World"/>
            <LoginBtn className='login-btn'/>
        </div>
        
    )
}
export default Nav;