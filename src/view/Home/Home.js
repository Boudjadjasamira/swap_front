import React, { Component } from 'react';
//Inclu les CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
//Inclu les fichiers communs
import Header from '../Common/Header';
import Footer from '../Common/Footer';
//Inclut les Composants
import SearchBar from '../../components/SearchBar/SearchBar';
import Search from '../../components/Search/Search';
import CardAnnonce from '../../components/CardAnnonce/CardAnnonce';
import ImgHome from '../../components/ImgHome/ImgHome';
//Inclu Axios
import axios from 'axios';


export default class Home extends Component {


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

    axios.get(`http://localhost:8000/api/categories`)
    .then(res => {
      this.setState({ allCategories: res.data['hydra:member'] });
    })
     
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

        <ImgHome></ImgHome>

        <SearchBar></SearchBar>

        <Search></Search>


             {/* Module annonces */}
             <div className="container">
                {this.state.allAnnonces.map(e => (
                  <div className="row">
                    <div className="col-12">
                      <CardAnnonce lesCategories={this.state.allCategories} photoAnnonce={e.photo} idAnnonce={e.id} titreEnvoi={e.titre} descriptionEnvoi={e.description} dateEnvoi={e.date} codePostalEnvoi={e.codePostal} categorieEnvoi={e.idCategorie}></CardAnnonce>
                    </div>
                  </div>
                ))}
              </div>

        <Footer></Footer>
      </div>

    );
  }
}
