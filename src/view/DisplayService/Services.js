import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//Inclu les fichiers communs
import Header from '../../view/Common/Header';
import Footer from '../../view/Common/Footer';
//Inclu Axios
import axios from 'axios';

import ProfilInfoGauche from '../../components/ProfilInfoGauche/ProfilInfoGauche';
import CardDisplayService from '../../components/cardDisplayService/CardDisplayService';

import '../../css/loading.css';

export default class Services extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allAnnonces: [],
      allCategories: [],
      confirm: true,
      listeAnnonceAffiche: true
    }
  }

  componentDidMount() {
    document.title = "Profil - Mes services"

     //recuperation de toutes les annonces
     axios.get(`http://149.91.89.142:8000/api/categories`)
     .then(res => {
       this.setState({ allCategories: res.data['hydra:member'] });
     })

    //recuperation de toutes les annonces
    axios.get(`http://149.91.89.142:8000/api/annonces`)
    .then(res => {
        var tabTempAnnoncesByUserID = [];
        res.data['hydra:member'].map(e => {
            if(e.idUser == localStorage.getItem('ID')){
                tabTempAnnoncesByUserID.push(e)
                this.setState({listeAnnonceAffiche: false});
            } return true
            /* eslint eqeqeq: 0 */
        })
        this.setState({ allAnnonces: tabTempAnnoncesByUserID });
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
                            {this.state.listeAnnonceAffiche ? 
                                <div className="text-center">
                                    <div class="loadingio-spinner-spin-gkmwr87oy9"><div class="ldio-qorx55o730n"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div></div>
                                </div>
                            :
                            <div>
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
                                                    <CardDisplayService idUserEnvoi={e.idUser} lesCategories={this.state.allCategories} photoAnnonce={e.photo} idAnnonce={e.id} titreEnvoi={e.titre} descriptionEnvoi={e.description} dateEnvoi={e.date} codePostalEnvoi={e.codePostal} categorieEnvoi={e.idCategorie} villeEnvoi={e.ville}></CardDisplayService>
                                                </div>
                                            ))}
                                        </div>  
                                    </form>
                            </div>
                            }
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
