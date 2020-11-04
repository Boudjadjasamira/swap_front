import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import axios from 'axios';
import $ from 'jquery';

//Inclu les components
import CardAnnonce from '../../components/CardAnnonce/CardAnnonce.js';
import SearchBar from '../../components/SearchBar/SearchBar';
import Category from '../../components/Category/Category';
import ImgAnnonce from '../../components/ImgAnnonce/ImgAnnonce';
import MapFrance from '../../components/MapFrance/MapFrance';


export default class Annonces extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allAnnonces: [],
      confirm: true,
      allCategories: []
    }
  }

  componentDidMount() {
    document.title = "Annonces";

    axios.get(`http://localhost:8000/api/categories`)
    .then(res => {
      this.setState({ allCategories: res.data['hydra:member'] });
    })

    //recuperation de toutes les annonces
    axios.get(`http://localhost:8000/api/annonces`)
      .then(res => {
        this.setState({ allAnnonces: res.data['hydra:member'] });
      })

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
     })
  }

  render() {

    return (

      <div className="body" id="bodyHome">
          <Header></Header>

          <ImgAnnonce></ImgAnnonce>

          <MapFrance></MapFrance>

          <SearchBar></SearchBar>
          

              {/* Module annonces */}
              <div className="container">
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
