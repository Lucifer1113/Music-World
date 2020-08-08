import React from 'react';
import './Header.css';
import LoginBtn from './LoginBtn';

const Header = () => {

    return (
        <div className='header'>
            <div className='left-part'>
                <h2>Music World</h2>
                <p>The social community and personalized recommendation platform for podcasts</p>
                <LoginBtn />
                <p>Now live in private beta for iOS and Android. Login above for and early invite.</p>
            </div>
            <div className='right-part'>
                <img src="" alt="mobile image" />
            </div>

        </div>
    )
}

export default Header;