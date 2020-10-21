import React, { Component } from 'react';
//Inclu les fichiers CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
//Inclu les fichiers communs
import Header from '../../view/Common/Header';
import Footer from '../../view/Common/Footer';
//Inclu les Composants
import FaqComponent from '../../components/FaqComponent/FaqComponent';




export default class Faq extends Component {

  render() {
    return (


      <div className="body" id="bodyHome" >

        <Header></Header>


        <FaqComponent></FaqComponent>


        <Footer></Footer>

      </div>
    );
  }
}
