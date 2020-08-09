import React, { useState } from 'react';
import './LoginBtn.css';
import { Spin } from 'antd';

const LoginBtn = () => {

    let [ToggleSpin,setToggleSpin] = useState(false)
    const handleOnLogin = () => {
        setToggleSpin(true) 
    }

    return (
        ToggleSpin ? <Spin size='large' /> :
            <div className='login-btn' onClick={handleOnLogin}>
                <img src={require('../Images/facebook.png')} style={{ width: 25, height: 25, margin: 10 }} alt='' />
                <span>LOGIN WITH FACEBOOK</span>
            </div>




    )
}

export default LoginBtn;