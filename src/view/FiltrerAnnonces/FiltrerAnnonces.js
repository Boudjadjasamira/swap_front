import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import axios from 'axios';

//Inclu les components
import CardAnnonce from '../../components/CardAnnonce/CardAnnonce.js';

export default class FiltrerAnnonces extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
        <div className="body" id="bodyHome">
            <Header></Header>

    

              
            <Footer></Footer>
        </div>
    );
  }
}
