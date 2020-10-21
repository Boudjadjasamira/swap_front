import React, { Component } from 'react';
//Inclu le fichier CSS
import 'bootstrap/dist/css/bootstrap.min.css';
//Inclu les fichiers communs
import Header from '../../view/Common/Header';
import Footer from '../..//view/Common/Footer';
//Inclu les fichiers Components
import FormContact from '../../components/FormContact/FormContact';


export default class Contact extends Component {

  render() {
    return (
      <div className="body" id="bodyHome">

        <Header></Header>

        <FormContact></FormContact>

        <Footer></Footer>

      </div>
    );
  }
}
