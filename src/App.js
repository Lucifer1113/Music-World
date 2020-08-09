import React, {Component} from 'react';   
// import Card from "./components/id-card/card";
import Nav from './Components/Nav';
import Header from './Components/Header';
import './App.css';


class App extends Component {

  render(){
    return(
      <div>
        <Nav/>
      <Header/>
      </div>
      
    )
  }
}

export default App;