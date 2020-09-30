import React, { Component } from 'react';

import Header from '../Common/Header';
import Footer from '../Common/Footer';

export default class Erreur404 extends Component {
  componentDidMount(){
    document.title = "Erreur 404"
  }
  render() {
    return (
        <div>
            <Header></Header>
            <h2 style={{color: "red"}}>Erreur</h2>
            <Footer></Footer>
        </div>
    );
  }
}
