import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//Inclus les fichiers communs
import Header from '../../view/Common/Header';
import Footer from '../..//view/Common/Footer';
//Inclus le(s) composant
import ProfilInfoGauche from '../../components/ProfilInfoGauche/ProfilInfoGauche';
//Inclus les modules
import Swal from 'sweetalert2';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


export default class Account extends Component {

   constructor(props) {
    super(props);
    this.state = {
      pseudo: "",
      // TODO sexe par defaaut homme
      selectedSexe: 0, 
      nom: "",
      prenom: "",
      mail: "",
      codeParrain: "",
      codePostal:"",
      description:"",
      motDePasse:"",
      images: [],
      titrePhoto: "",
      isRedirectDelete: false
    }

    this.changePseudo = this.changePseudo.bind(this);
    this.changeSexe = this.changeSexe.bind(this);
    this.changeNom = this.changeNom.bind(this);
    this.changePrenom = this.changePrenom.bind(this);
    this.changeMail = this.changeMail.bind(this);
    this.changeCodeParrain = this.changeCodeParrain.bind(this);
    this.changeCodePostal = this.changeCodePostal.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.addModification = this.addModification.bind(this);
    this.deleteMyProfil = this.deleteMyProfil.bind(this);
  }


  componentDidMount(){

    document.title = "Profil - Informations"
    //Requete pour recuperer les infos utilisateurs/ID
    axios.get(`http://149.91.89.142:8000/api/users/` + localStorage.getItem('ID'))
    .then(res =>
        this.setState({
          pseudo: res.data.pseudo,
          nom: res.data.nom,
          prenom: res.data.prenom,
          mail: res.data.mail,
          codePostal: res.data.codePostal,
          description: res.data.description,
          titrePhoto: res.data.photo
        })
    )
  }
  
//On crée des méthodes pour changer chaques champs
  changePseudo(event){
    this.setState({
      pseudo:event.target.value
    });
  }

  changeSexe(event){
    this.setState({
      sexe:event.target.value
    })
  }

  changeNom(event){
    this.setState({
      nom:event.target.value
    })
  }

  changePrenom(event){
    this.setState({
      prenom:event.target.value
    })
  }

  changeMail(event){
    this.setState({
      mail:event.target.value
    })
  }

  changeCodeParrain(event){
    this.setState({
      codeParrain:event.target.value
    })
  }

  changeCodePostal(event){
    this.setState({
     codePostal:event.target.value
    })
  }

  changeDescription(event){
    this.setState({
      description:event.target.value
    })
  }

  changePassword(event){
    this.setState({
      motDePasse:event.target.value
    })
  }

  addModification() {
//Requete pour mettre à jour les infos utilisateurs
    axios.patch("http://149.91.89.142:8000/api/users/" + localStorage.getItem('ID'), {
      pseudo: this.state.pseudo.toString(),
      sexe: Boolean(Number(this.state.selectedSexe)),
      nom: this.state.nom.toString(),
      prenom: this.state.prenom.toString(),
      mail: this.state.mail.toString(),
      codeParrain: this.state.codeParrain.toString(),
      codePostal: this.state.codePostal.toString(),
      description: this.state.description.toString(),
      motDePasse: this.state.motDePasse.toString(),
    },{
    headers: {
          'Content-Type': 'application/merge-patch+json'
    }})
    .then(res => {
      console.log(res);
      console.log(res.data);
      Swal.fire({
        icon: 'success',
        title: 'Changements sauvegardés !',
        showConfirmButton: false,
        timer: 2500
      });
  
      //On reset les champs
      /* this.setState({
        pseudo: "",
        selectedSexe: "",
        mail: "",
        codePostal:"",
        motDePasse:""
      }); */
    })
  }

  deleteMyProfil(){

    //USER
    axios.delete('http://149.91.89.142:8000/api/users/' + localStorage.getItem('ID'))
    .then(res =>{
      console.log("ok");
    })

    //ANNONCE
    
    axios.get('http://149.91.89.142:8000/api/annonces')
    .then(res => {
      res.data['hydra:member'].map(e => {
        if(e.idUser == localStorage.getItem('ID')){
          axios.delete('http://149.91.89.142:8000/api/annonces' + e.id)
          .then(res => {
            console.log("annonces OK");
          })
        }
      })
    });

    //AVIS
    axios.get('http://149.91.89.142:8000/api/avis')
    .then(res => {
      res.data['hydra:member'].map(e => {
        if(e.idUser == localStorage.getItem('ID')){
          axios.delete('http://149.91.89.142:8000/api/avis' + e.id)
          .then(res => {
            console.log("avis OK");
          })
        }
      })
    });

    //MESSAGERIE
    axios.get('http://149.91.89.142:8000/api/messageries')
    .then(res => {
      res.data['hydra:member'].map(e => {
        if(e.idUser == localStorage.getItem('ID')){

          axios.delete('http://149.91.89.142:8000/api/messageries' + e.id)
          .then(res => {
            console.log("Messagerie OK");
          })
        }
      })
    });

    //SALON
    axios.get('http://149.91.89.142:8000/api/salons')
    .then(res => {
      res.data['hydra:member'].map(e => {
        if(e.idUser1 == localStorage.getItem('ID') || e.idUser2 == localStorage.getItem('ID')){
          console.log(e.id);
          
          axios.delete('http://149.91.89.142:8000/api/salons' + e.id)
          .then(res => {
            console.log("Salon OK");
          })
        }
      })
    });

    //SWAP
    axios.get('http://149.91.89.142:8000/api/swaps')
    .then(res => {
      res.data['hydra:member'].map(e => {
        if(e.idUser == localStorage.getItem('ID')){
          axios.delete('http://149.91.89.142:8000/api/swaps' + e.id)
          .then(res => {
            console.log("Salon OK");
          })
        }
      })
      this.setState({isRedirectDelete: true});
    });



  }




  render() {
    return (
      <div className="body" id="bodyHome">

        {/* HEADER */}
        <Header></Header>
        {this.state.isRedirectDelete ? 
          <Redirect to={process.env.PUBLIC_URL + "/Logout"}></Redirect>
        :
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
                <form className="form-horizontal">
                  <div className="form-group">
                    <div className="col-lg-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Pseudo*"
                        value={this.state.pseudo}
                        onChange={this.changePseudo}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-12">
                      <select className="form-control custom-select" 
                      type="text" 
                      placeholder="Genre*"
                      value={this.state.selectedSexe} onChange={this.changeSexe}
                      >
                        <option disabled>
                          Vous etes ?
                        </option>
                        <option value="1">Une femme</option>
                        <option value="0">Un homme</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-12">
                      <input 
                      className="form-control" 
                      type="text" 
                      placeholder="Nom*"
                      value={this.state.nom}
                      onChange={this.changeNom} />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Prenom*"
                        value={this.state.prenom}
                        onChange={this.changePrenom}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email@mail.com*"
                        value={this.state.mail}
                        onChange={this.changeMail}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Code Postal"
                        value={this.state.codePostal}
                        onChange={this.changeCodePostal}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={3}
                        placeholder="Présentez vous en quelques mots..."
                        defaultValue={""}
                        value={this.state.description}
                        onChange={this.changeDescription}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Entrer votre mot de passe"
                        value={this.state.motDePasse}
                        onChange={this.changePassword}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Confirmer votre mot de passe"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 control-label" />
                    <div className="col-md-12">
                      <button type="button" className="btn-enregistrer" onClick={this.addModification}>
                        &nbsp;Enregistrer&nbsp;
              </button>
                      <button type="button" onClick={this.deleteMyProfil} className="btn btn-dark ">
                        <svg
                          width="1.5em"
                          height="1.3em"
                          viewBox="0 0 16 16"
                          className="bi bi-trash"
                          fill="white"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fillRule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                &nbsp;Supprimer mon profil
              </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <br />
          <br />
          {/*Fin infos compte */}
        </div>
        }



        {/* FOOTER */}
        <Footer></Footer>
      </div>

    );
  }
}
