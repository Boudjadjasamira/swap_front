import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//Inclu les fichiers communs
import Header from '../../view/Common/Header';
import Footer from '../../view/Common/Footer';
//Inclu les components
import CardAnnonce from '../../components/CardAnnonce/CardAnnonce';
//Inclu Axios
import axios from 'axios';

import ProfilInfoGauche from '../../components/ProfilInfoGauche/ProfilInfoGauche';


export default class Services extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allAnnonces: [],
      allCategories: [],
      confirm: true
    }
  }

  componentDidMount() {
    document.title = "Profil - Mes services"

     //recuperation de toutes les annonces
     axios.get(`http://localhost:8000/api/categories`)
     .then(res => {
       this.setState({ allCategories: res.data['hydra:member'] });
     })

    //recuperation de toutes les annonces
    axios.get(`http://localhost:8000/api/annonces`)
    .then(res => {
        var tabTempAnnoncesByUserID = [];
        res.data['hydra:member'].map(e => {
            if(e.idUser == localStorage.getItem('ID')){
                tabTempAnnoncesByUserID.push(e)
            } return true
            /* eslint eqeqeq: 0 */
        })
        this.setState({ allAnnonces: tabTempAnnoncesByUserID });
        console.log(this.state.allAnnonces);
    })

  } 

  render() {
    return (
        <div className="body" id="bodyHome">

        {/* HEADER */}
        <Header></Header>

            <div>
                {/* ./Infos compte */}
                <div className="container">
                    <h1>Informations Personnelles</h1>
                    <hr />
                    <div className="row">
                        <div className="col-md-3">
                            <ProfilInfoGauche></ProfilInfoGauche>
                        </div>
                        {/* module colonn droite */}
                        <div className="col-md-9 personal-info">
                            <br />
                                <Link to={process.env.PUBLIC_URL + "/Publish"}>
                                    <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
                                    <img src="assets/icone/edit.png" alt="logo" width="15cm" height="15cm"/>
                                       Publier une annonce
                                    </button>
                                </Link>
                                <form className="form-horizontal" >
                                    <div className="row justify-content-start">
                                        {this.state.allAnnonces.map(e => (
                                            <div className="col-12">
                                                <CardAnnonce lesCategories={this.state.allCategories} photoAnnonce={e.photo} idAnnonce={e.id} titreEnvoi={e.titre} descriptionEnvoi={e.description} dateEnvoi={e.date} codePostalEnvoi={e.codePostal} categorieEnvoi={e.idCategorie}villeEnvoi={e.ville}></CardAnnonce>
                                            </div>
                                        ))}
                                    </div>  
                                </form>
                        </div>
                    </div>
                    {/* FOOTER */}
                    <Footer></Footer>
                </div>
            </div>
        </div>                
        );
    }
}
