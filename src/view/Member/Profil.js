import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//Inclu les fichiers communs
import Header from '../../view/Common/Header';
import Footer from '../..//view/Common/Footer';

import axios from 'axios';
import CardProfil from '../../components/CardProfil/CardProfil';

export default class Myprofil extends Component {

  constructor(props){
    super(props);
    this.state = {
      pseudo: "",
      description: "",
      dateInscription: "",
      photo: ""
    };
  }

  componentDidMount(){
    const search = window.location.pathname.toString().split('-')[1];
    //Recuperation des infos
    axios.get(`http://localhost:8000/api/users/` + search)
    .then(res =>
        this.setState({
          pseudo: res.data.pseudo,
          description: res.data.description,
          dateInscription: res.data.dateInscription,
          photo: res.data.photo
        })
    )
    //recuperation de toutes les annonces
    axios.get(`http://localhost:8000/api/annonces`)
      .then(res => {
        this.setState({ allAnnonces: res.data['hydra:member'], showLoading: false });
      })
  }

  render() {
    return (
      <div className="body" id="bodyHome">

        {/* HEADER */}
        <Header></Header>
        <br />
        <br />
        <br />
        <div className="container profile shadow-lg p-3 mb-5 bg-white rounded w-50 p-3">
          <div className="container ">
            <div className="text-center-profil">
              <div className="item">
                <span className="notify-badge-profil">
                  <img src="assets/icone/validate.png" alt="#" style={{ width: 60 }} />
                </span>
                <img className="image-avatar" src={"http://localhost:8000/uploads/avatars/" + this.state.photo} alt={this.state.photo} />
                <br />
                <br />
                <h5>@{this.state.pseudo}</h5>
              </div>
            </div>
            <br />
            {/*---avatar et badge End*/}
            <div className="text-center">
              <p>Inscrit depuis le {this.state.dateInscription}</p>
              {/*------ Rating----*/}
              <ul className="employers-icons list-inline mb-1">
                  <li className="list-inline-item"><a href="#" className="text-warning"><i className="mdi mdi-star f-19"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="text-warning"><i className="mdi mdi-star f-19"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="text-warning"><i className="mdi mdi-star f-19"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="text-warning"><i className="mdi mdi-star f-19"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="text-warning"><i className="mdi mdi-star f-19"></i></a></li>
              </ul>
            </div>
            <br />
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="media-body align-self-center">
                    <h5> PRESENTATION </h5>
                    <hr /> 
                    <p>{this.state.description}</p>
                  </div>
                </div>
              </div>
              <br />
              <br />
              {/* Section annonces */}
              <h5>MES ANNONCES</h5>
              <hr />
              <br />
              {this.state.allAnnonces ? 
                this.state.allAnnonces.map(e => (
                  <div className="row">
                    <div className="col-12">
                      <CardProfil idUserEnvoi={e.idUser} lesCategories={this.state.allCategories} typeAnnonce={e.type} photoAnnonce={e.photo} idAnnonce={e.id} titreEnvoi={e.titre} descriptionEnvoi={e.description} dateEnvoi={e.date} codePostalEnvoi={e.codePostal} categorieEnvoi={e.idCategorie} villeEnvoi={e.ville}></CardProfil>
                    </div>
                  </div>
                )):
                  <p>Pas d'annonces.</p>
                }                
            </div>
          </div>         
        </div>
        {/* FOOTER */}
        <Footer></Footer>
      </div>

    );
  }
}
