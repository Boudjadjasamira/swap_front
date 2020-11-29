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
import ImgAnnonce from '../../components/ImgAnnonce/ImgAnnonce';

export default class Annonces extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allAnnoncesCategorie: [],
      confirm: true,
      allCategories: [],
      laCategorie: ""
    }
  }

  componentDidMount() {
    const search = window.location.pathname.toString().split('/')[2];
    document.title = "Catégorie - "  + search.toString();
    this.setState({
        laCategorie: search.toString()
    })

    var lesCategories = [];
    var annoncesTrier = [];
    var idCategorie = 0;
/* eslint eqeqeq: 0 */
    axios.get(`http://149.91.89.142:8000/api/categories`)
    .then(res => {
      this.setState({ allCategories: res.data['hydra:member'] });
      res.data['hydra:member'].map(e => {
        if(e['titre'] == search.toString()){
            idCategorie = e['id'];
        }return true
      });

    });
    axios.get(`http://149.91.89.142:8000/api/annonces`)
    .then(res => {
        res.data['hydra:member'].map(e => {
            if(e['idCategorie'] == idCategorie){
                annoncesTrier.push(e)
            }return true
        })
        this.setState({allAnnoncesCategorie: annoncesTrier})
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

            <center>
                <h1>Catégorie : {this.state.laCategorie}</h1>
            </center >
            <br/>
            <SearchBar></SearchBar>

              {/* Module annonces */}
              <div className="container">
                {this.state.allAnnoncesCategorie.map(e => (
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
