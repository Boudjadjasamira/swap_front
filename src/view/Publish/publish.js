import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//Inclu les fichiers communs
import Header from '../../view/Common/Header';
import Footer from '../..//view/Common/Footer';


import ProfilInfoGauche from '../../components/ProfilInfoGauche/ProfilInfoGauche';

import Swal from 'sweetalert2';

import axios from 'axios';


export default class Publish extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titre: "",
      description: "",
      codePostal: "",
      categorieS: 1,
      selectedOffreDemande: 0,
      allCategorie: [],
      images: [],
      /* titrePhoto: "Ajouter une photo" */
      
    }

    this.addAnnonces = this.addAnnonces.bind(this);
    this.changeTitre = this.changeTitre.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeCodePostal = this.changeCodePostal.bind(this);
    this.changeCategorie = this.changeCategorie.bind(this);
    this.changeOffreDemande = this.changeOffreDemande.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }

  componentDidMount(){
    document.title = "Profil - Ajouter une annonce"
    //Recuperation des categories
    axios.get(`http://149.91.89.142:8000/api/categories`)
    .then(res => {
      this.setState({allCategorie: res.data["hydra:member"]});
    })
  }

  changeCategorie(event) {
    this.setState({
      categorieS: event.target.value * 1
    });
  }

  changeOffreDemande(e){
    this.setState({
      selectedOffreDemande: e.target.value 
    });
  }

  changeImage(e){
    this.setState({
      images: e.target.files,
      titrePhoto: e.target.files[0].name
    });
  }

  addAnnonces() {

    let latitude = "";
    let longitude = "";
    let ville = "";
    let departement = "";
    let regions = "";

    axios.get('https://api-adresse.data.gouv.fr/search/?q=' + this.state.codePostal)
    .then(res => {
      latitude = res.data.features[0].geometry.coordinates[1];
      longitude = res.data.features[0].geometry.coordinates[0];
      ville = res.data.features[0].properties.label;
      departement = res.data.features[0].properties.context.split(',')[0].toString() + ' -' + res.data.features[0].properties.context.split(',')[1].toString();
      regions = res.data.features[0].properties.context.split(',')[2].toString()


        //recuperation de la date
        const d = new Date();
        const laDate = ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2) + '/' + d.getFullYear();
      
        Swal.fire({
          title: 'Ajout en cours...',
          html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
          allowOutsideClick: false,
          showConfirmButton: false,
        });

        const formData = new FormData();

        Array.from(this.state.images).forEach(image => {
          formData.append('files', image);
        });

        axios.post('http://149.91.89.142:8000/uploadAnnonces.php', formData)
        .then(res => {
            console.log({res});
        }).catch(err => {
            console.error({err});
        });

        var photoTemp = this.state.images;

        if(photoTemp[0] == null){
          photoTemp = ""
        }else{
          photoTemp = this.state.titrePhoto
        }

        //Ajout dans la base
        axios.post("http://149.91.89.142:8000/api/annonces",  {
          titre: this.state.titre.toString(),
          idCategorie: this.state.categorieS,
          description: this.state.description.toString(),
          codePostal: this.state.codePostal.toString(),
          date: laDate.toString(),
          photo: photoTemp,
          type: Boolean(Number(this.state.selectedOffreDemande)),
          latitude:latitude.toString(),
          longitude:longitude.toString(),
          ville:ville.toString(),
          departement: departement.toString(),
          region: regions.toString(),
          idUser: localStorage.getItem('ID') * 1
        })
        .then(res => {
          console.log(res);
          console.log(res.data);

          Swal.fire({
            icon: 'success',
            title: 'Votre annonce vient d\'être publiée.',
            showConfirmButton: false,
            timer: 2500
          });
      
          //reset les champs
          this.setState({
            titre: "",
            description: "",
            codePostal: ""
          });
        })


    });


    
  }

  changeTitre(event) {
    this.setState({
      titre: event.target.value
    });
  }

  changeDescription(event) {
    this.setState({
      description: event.target.value
    });
  }

  changeCodePostal(event) {
    this.setState({
      codePostal: event.target.value
    });
  }

  render() {
    return (
      <div className="body" id="bodyHome">

        {/* HEADER */}
        <Header></Header>

        <div>
          {/* ./Infos compte */}
          <div className="container">
            <h1>Publier une annonce</h1>
            <hr />
            <div className="row">
              <div className="col-md-3">
                <ProfilInfoGauche></ProfilInfoGauche>
              </div>
              {/* module colonn droite */}
              <div className="col-md-9 personal-info">
                <form className="form-horizontal">
                  <div className="container pb-3" onChange={this.changeOffreDemande}>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        defaultValue="option1"
                        value="1"
                      />
                      <label className="form-check-label" htmlFor="inlineRadio1">
                        Offres
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        defaultValue="option2"
                        value="0"
                      />
                      <label className="form-check-label" htmlFor="inlineRadio2">
                        Demandes
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-12">
                      <select
                        className="form-control custom-select"
                        id="exampleFormControlSelect1"
                        value={this.state.categorieS} onChange={this.changeCategorie}
                      >
                        <option disabled>Catégories</option>
                        {this.state.allCategorie.map( e => 
                          <option value={e.id}>{e.titre}</option>
                        )}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Titre annonce*"
                        value={this.state.titre}
                        onChange={this.changeTitre}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={3}
                        placeholder="Description*"
                        defaultValue={""}
                        value={this.state.description}
                        onChange={this.changeDescription}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-12">
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="customFileLang"
                          lang="fr"
                          onChange={this.changeImage}
                          
                        />
                        <label className="custom-file-label" htmlFor="customFileLang">
                        <span class="badge badge-pill badge-dark text-white">{this.state.titrePhoto}</span>
                        </label>
                      </div>
                    </div>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;*Format JPEG-PNG
            </p>
                  </div>


                  <div className="form-group">
                    <div className="col-lg-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Code Postal*"
                        value={this.state.codePostal}
                        onChange={this.changeCodePostal}
                      />
                    </div>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;* Indiquez le code postal pour afficher
                      votre annonce dans une région et un département.
            </p>
                  </div>

                  <div className="form-group">
                    <label className="col-md-3 control-label" />
                    <div className="col-md-12">
                      <button type="button" className="btn-enregistrer" onClick={this.addAnnonces}>
                        &nbsp;Publier&nbsp;
              </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>;



        {/* FOOTER */}
        <Footer></Footer>
      </div>

    );
  }
}
