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
       isRegion: this.props.location.regions,
       isDepartements: this.props.location.departements,
       isVille: this.props.location.ville,
       isCategorie: this.props.location.categorie * 1,
       allAnnonces: [],
       allCategories: [],
       showCardAnnonces: ""
    }
  }

  componentDidMount() {

    let allAnnoncesTemps = "";
    let allAnnoncesTrier = [];

    console.log(this.state);

    axios.get('http://localhost:8000/api/categories')
    .then(res => {this.setState({allCategories: res.data['hydra:member']})});

    axios.get('http://localhost:8000/api/annonces')
    .then(res => {
        this.setState({allAnnonces: res.data['hydra:member']});

        allAnnoncesTemps = res.data['hydra:member'];


        //Regarde si j'ai une region
        if(this.state.isRegion != ""){
            allAnnoncesTemps.map(e => {
                if(e.region != null){
                    let theRegionTemp = e.region.toString().substring(1)
      
                    if(theRegionTemp == this.state.isRegion){
                        allAnnoncesTrier.push(e);
                    }else{
                        console.log(e);
                    }
                }
            });
        }
        /* eslint eqeqeq: 0 */
        //Regarde si j'ai un departements
        if(this.state.isDepartements != ""){
            allAnnoncesTemps.map(e => {
                if(e.departement != null){
                    if(e.departement.split('-')[0].toString().replace(/\s/g, '') == this.state.isDepartements){
                        allAnnoncesTrier.push(e);
                    }
                    return true
                }
            });
        }

        //Regarde si j'ai une categorie
        if(this.state.isCategorie != ""){
            allAnnoncesTemps.map(e => {
                if(e.idCategorie != null){
                    if(e.idCategorie == this.state.isCategorie){
                        allAnnoncesTrier.push(e);
                    }
                    return true
                }
            });
        }

        //Regarde si j'ai un ville
        if(this.state.isVille != ""){
            allAnnoncesTemps.map(e => {
                if(e.ville != null){
                    if(e.ville == this.state.isVille){
                        allAnnoncesTrier.push(e);
                    }
                    return true
                }
            });
        }

        this.setState({allAnnonces: allAnnoncesTrier});

    });

  }

  render() {
    return (
        <div className="body" id="bodyHome">
            <Header></Header>


            {/* Module annonces */}
            <div className="container">
                {this.state.allAnnonces.map(e => (
                  <div className="row">
                    <div className="col-12">
                      <CardAnnonce lesCategories={this.state.allCategories} typeAnnonce={e.type} photoAnnonce={e.photo} idAnnonce={e.id} titreEnvoi={e.titre} descriptionEnvoi={e.description} dateEnvoi={e.date} codePostalEnvoi={e.codePostal} categorieEnvoi={e.idCategorie}></CardAnnonce>
                    </div>
                  </div>
                ))}
            </div>

              
            <Footer></Footer>
        </div>
    );
  }
}
