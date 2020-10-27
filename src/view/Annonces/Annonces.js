import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import axios from 'axios';

//Inclu les components
import CardAnnonce from '../../components/CardAnnonce/CardAnnonce.js';
import SearchBar from '../../components/SearchBar/SearchBar';
import Category from '../../components/Category/Category';
import ImgAnnonce from '../../components/ImgAnnonce/ImgAnnonce';

export default class Annonces extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allAnnonces: [],
      confirm: true
    }
  }

  componentDidMount() {
    document.title = "Annonces";

    //recuperation de toutes les annonces
    axios.get(`http://localhost:8000/api/annonces`)
      .then(res => {
        this.setState({ allAnnonces: res.data['hydra:member'] });
      })

  }

  render() {

    return (

      <div className="body" id="bodyHome">
          <Header></Header>

          <ImgAnnonce></ImgAnnonce>

          <Category></Category>

          <SearchBar></SearchBar>

              {/* Module annonces */}
              <div className="container">
                {this.state.allAnnonces.map(e => (
                  <div className="row">
                    <div className="col-12">
                      <CardAnnonce idAnnonce={e.id} titreEnvoi={e.titre} descriptionEnvoi={e.description} dateEnvoi={e.date} codePostalEnvoi={e.codePostal} categorieEnvoi={e.idCategorie}></CardAnnonce>
                    </div>
                  </div>
                ))}
              </div>
              
          <Footer></Footer>
      </div>
    );
  }
}
