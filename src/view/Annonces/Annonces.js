import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import axios from 'axios';

//Inclu les components
import CardAnnonce from '../../components/CardAnnonce/CardAnnonce.js';
import SearchBar from '../../components/SearchBar/SearchBar';

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

        <center>
          <img class="img-fluid flex-wrap" src="assets/img/img4.png" alt="logo" width="60%" />
        </center>
        < br />
        < br />

        <SearchBar></SearchBar>

        {/* Module annonces */}
        <div className="container">
          {this.state.allAnnonces.map(e => (
            <div className="row">
              <div className="col-12">
                <CardAnnonce idAnnonce={e.id} titreEnvoi={e.titre} descriptionEnvoi={e.description} dateEnvoi={e.date} ></CardAnnonce>
              </div>
            </div>
          ))}
        </div>
        <center>
          {/* <svg
            width="3em"
            height="2.5em"
            viewBox="0 0 16 16"
            className="bi bi-arrow-down-circle-fill"
            fill="#a5d8dc"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
            />
          </svg> */}
        </center>

        <Footer></Footer>
      </div>
    );
  }
}
