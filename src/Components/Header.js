import React from 'react';
import './Header.css';
import Login from '../Components/Login/LoginButton';



const Header = () => {

    return (
        <div className='header'>
            <div className='left-part'>
               <h1 className="tag-line">Play millions of songs and podcasts, for free..</h1>
                <Login/>
                
            </div>
            <div className='right-part'>
                <img src={require('../Images/mobile.png')} style={{width:450,height:650}} alt="Mobile" />
            </div>
        </div>
    )
}

export default Header;