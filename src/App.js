import React, { Component } from "react";
import CoverPage from "./Components/Login/CoverPage";
import "./App.css";
import Home from "./Components/Home/Main";

class App extends Component {
  state = {
    isToken: false,
  };

  componentDidMount() {
    this.getAuth();
  }

  getAuth = async () => {
    const accessToken = await localStorage.getItem("token");
    this.setState({ isToken: accessToken ? true : false });
  };

  render() {
    const { isToken } = this.state;

    return isToken ? <Home /> : <CoverPage />;
  }
}

export default App;
