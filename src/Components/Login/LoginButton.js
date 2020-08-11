import React, { useState } from "react";
import "../LoginBtn.css";
import { Spin } from "antd";
import FacebookLogin from "react-facebook-login";

const Login = () => {
  const [toggleSpin, setToggleSpin] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const handleOnLogin = () => {
    setToggleSpin(true);
  };

  const responseFacebook = (response) => {
      console.log('response.accessToken', response.accessToken);
      localStorage.setItem('token', response.accessToken);
      localStorage.setItem('userDetails', response);
    setUserDetails(response);
  };

  return toggleSpin ? (
    <Spin size="large" />
  ) : (
    <FacebookLogin
      appId="291302202322895" 
      fields="name,email,picture"
      callback={responseFacebook}
    />
  );
};

export default Login;
