import React, {Component} from 'react';   
import Nav from './Components/Nav';
import Header from './Components/Header';
import Container from './Components/Container';
import Container2 from './Components/Container2';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {

  render(){
    return(
      <div>
        <Nav/>
      <Header/>
      <Container/>
      <Container2/>
      <Footer/>
      </div>
      
    )
  }
}

export default App;