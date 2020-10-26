import React, { Component } from 'react';
//Inclu les CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
//Inclu les fichiers communs
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { Link } from 'react-router-dom';
//Inclut les Composants
import SearchBar from '../../components/SearchBar/SearchBar';
import Category from '../../components/Category/Category';
import Search from '../../components/Search/Search';
import CardAnnonce from '../../components/CardAnnonce/CardAnnonce';

import axios from 'axios';


export default class Home extends Component {


  constructor(props) {
    super(props);
    this.state = {
      allAnnonces: [],
      confirm: true
    }
  }

  componentDidMount() {
    document.title = "Home"

     

    //recuperation de toutes les annonces
    axios.get(`http://localhost:8000/api/annonces`)
      .then(res => {
        this.setState({ allAnnonces: res.data['hydra:member'] });
      })

  } 


  render() {

    return (
      <div className="body" id="bodyHome">

        {/* HEADER */}
        <Header title="Home"></Header>

        <div>
          <center>
            <img class="img-fluid flex-wrap" src={process.env.PUBLIC_URL + 'assets/img/img3.png'} alt="logo" width="60%" />
          </center>
          <br />
          <br />
          <br />


          <Category></Category>

          <SearchBar></SearchBar>

          <Search></Search>


          {/* Début Section annonces */}
          <div className="container">
          {this.state.allAnnonces.map(e => (
            <div className="row">
              <div className="col-12">
              <CardAnnonce idAnnonce={e.id} titreEnvoi={e.titre} descriptionEnvoi={e.description} dateEnvoi={e.date} ></CardAnnonce>
              </div>
            </div>
             ))}
            <br />
          </div>
          <br />
          <br />
        </div>
        {/* FOOTER */}
        < Footer ></Footer >
      </div >
    );
  }
}
