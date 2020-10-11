import React, { Component } from 'react';
import './Home.css';



//Inclu les fichiers communs
import Header from '../Common/Header';
import Footer from '../Common/Footer';

export default class Home extends Component {


  componentDidMount(){
    document.title = "Home"
  }

  render() {
   
    return (
        <div className="body">
          {/* HEADER */}
          <Header title="Home"></Header>




          {/* FOOTER */}
          <Footer></Footer>
        </div>
    );
  }
}
