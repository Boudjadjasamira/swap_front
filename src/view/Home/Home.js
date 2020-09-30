import React, { Component } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import './Home.css'

//Inclu les fichiers communs
import Header from '../Common/Header';
import Footer from '../Common/Footer';

export default class Home extends Component {


  componentDidMount(){
    document.title = "Home"
  }

  render() {
   
    return (
        <div>
          {/* HEADER */}
          <Header title="Home"></Header>

          <Hamburger />


          {/* FOOTER */}
          <Footer></Footer>
        </div>
    );
  }
}
