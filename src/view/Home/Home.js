import React, { Component } from 'react';
//Inclus les CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
//Inclus les fichiers communs
import Header from '../Common/Header';
import Footer from '../Common/Footer';
//Inclust les Composants
import SearchBar from '../../components/SearchBar/SearchBar';
import Search from '../../components/Search/Search';
import CardAnnonce from '../../components/CardAnnonce/CardAnnonce';
import ImgHome from '../../components/ImgHome/ImgHome';
//Inclus Axios
import axios from 'axios';
//Inclus Jquery
import $ from 'jquery';

export default class Home extends Component {
//On initialise l’état local en affectant un objet à this.state.
  constructor(props) {
    super(props);
    this.state = {
      allAnnonces: [],
      allCategories: [],
      confirm: true
    }
  }

  componentDidMount() {
    document.title = "Home"
    //Requete pour récuperer toutes les catégories
    axios.get(`http://localhost:8000/api/categories`)
    .then(res => {
      this.setState({ allCategories: res.data['hydra:member'] });
    })
     
    //recuperation de toutes les annonces
    axios.get(`http://localhost:8000/api/annonces`)
    .then(res => {
        this.setState({ allAnnonces: res.data['hydra:member'] });
    })


    //Fonction pour afficher uniquement les offres sur la page Home
      $(document).ready(function(){
        $("#searchBarOffresHome").click(function(){
           if($("#searchBarOffresHome").is(':checked')){
            $(".search-result-item").each(function( index ) {
              $(this).show();
              if($(this).data("type") == false){
                $(this).hide();
              }
            });
           }
        })
    //Fonction pour afficher uniquement les demandes sur la page Home
        $("#searchBarDemandesHome").click(function(){
         if($("#searchBarDemandesHome").is(':checked')){
            $(".search-result-item").each(function( index ) {
              $(this).show();
              if($(this).data("type") == true){
                $(this).hide();
              }
            });
         }
        })
    //Fonction pour afficher toutes les annonces sur la page Home
        $("#searchBarAllHome").click(function(){
          if($("#searchBarAllHome").is(':checked')){
           $(".search-result-item").each(function( index ) {
             $(this).show();
           });
          }
       })
     })
  } 


  render() {

    return (

      <div className="body" id="bodyHome">

        <Header></Header>

        <ImgHome></ImgHome>

        <SearchBar></SearchBar>

        <Search></Search>


             {/* Module annonces */}
             <div className="container resulted">
               {/* On utilise la methode map() pour prendre un tableau et le transformer en une liste d'element */}
                {this.state.allAnnonces.map(e => (
                  <div className="row">
                    <div className="col-12">
                      <CardAnnonce idUserEnvoi={e.idUser} lesCategories={this.state.allCategories} typeAnnonce={e.type} photoAnnonce={e.photo} idAnnonce={e.id} titreEnvoi={e.titre} descriptionEnvoi={e.description} dateEnvoi={e.date} codePostalEnvoi={e.codePostal} categorieEnvoi={e.idCategorie} villeEnvoi={e.ville}></CardAnnonce>
                    </div>
                  </div>
                ))}
              </div>

        <Footer></Footer>
      </div>

    );
  }
}
