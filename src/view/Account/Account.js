import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//Inclu les fichiers communs
import Header from '../../view/Common/Header';
import Footer from '../..//view/Common/Footer';
import Swal from 'sweetalert2';
import * as firebase from "firebase";
import "../../firebase";


export default class Account extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pseudo: "",
      //genre: "",
      nom: "",
      prenom: "",
      mail: "",
      codeParrainage: "",
      codePostal: "",
      description: "",
      password: ""
    }

    this.addPseudo = this.addPseudo.bind(this);
    // this.changeGenre = this.changeGenre.bind(this);
    this.changeNom = this.changeNom.bind(this);
    this.changePrenom = this.changePrenom.bind(this);
    this.changeMail = this.changeMail.bind(this);
    this.changeCodeParrainage = this.changeCodeParrainage.bind(this);
    this.changeCodePostal = this.changeCodePostal.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  addChangements() {
    //connexion a la bdd
    const db = firebase.firestore();


    //ajout dans la base
    db.collection("Utilisateurs").add({
      pseudo: this.state.pseudo,
      //genre: this.state.genre,
      nom: this.state.nom,
      prenom: this.state.prenom,
      mail: this.state.mail,
      codeParrainage: this.state.codeParrainage,
      codePostal: this.state.codePostal,
      description: this.state.description,
      password: this.state.password
    });


    Swal.fire({
      icon: 'success',
      title: 'Changements sauvegardés.',
      showConfirmButton: false,
      timer: 2500
    });

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Une erreur s\'est produite !',
    })


    //reset les champs
    this.setState({
      pseudo: "",
      //genre: "",
      nom: "",
      prenom: "",
      mail: "",
      codeParrainage: "",
      codePostal: "",
      description: "",
      password: ""
    });
  }


  addPseudo(event) {
    this.setState({
      pseudo: event.target.value
    });
  }

  /*  changeGenre(event) {
     this.setState({
       pseudo: event.target.value
     });
   } */

  addPseudo(event) {
    this.setState({
      pseudo: event.target.value
    });
  }
  changeNom(event) {
    this.setState({
      pseudo: event.target.value
    });
  }
  changePrenom(event) {
    this.setState({
      pseudo: event.target.value
    });
  }
  changeMail(event) {
    this.setState({
      pseudo: event.target.value
    });
  }
  changeCodeParrainage(event) {
    this.setState({
      pseudo: event.target.value
    });
  }
  changeCodePostal(event) {
    this.setState({
      pseudo: event.target.value
    });
  }
  changeDescription(event) {
    this.setState({
      pseudo: event.target.value
    });
  }

  changePassword(event) {
    this.setState({
      pseudo: event.target.value
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
            <h1>Informations Personnelles</h1>
            <hr />
            <div className="row">
              {/* Module colonne gauche */}
              <div className="col-md-3">
                <div className="text-center">
                  <div className="col-sm-4">
                    <div className="item">
                      <span className="notify-badge">
                        <div className="image-upload">
                          <label htmlFor="file-input">
                            <svg
                              width="1.5em"
                              height="1.3em"
                              viewBox="0 0 16 16"
                              className="bi bi-camera"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"
                              />
                              <path
                                fillRule="evenodd"
                                d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                              />
                              <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                            </svg>
                          </label>
                          <input id="file-input" type="file" />
                        </div>
                      </span>
                      <img src="assets/img/avatar.png" alt="avatar" width="240px" />
                      <br />
                      <h1>@Pseudo</h1>
                      <Link to={process.env.PUBLIC_URL + "/Myprofil"}> Voir mon profil</Link>
                      <br />
                      <br />
                      <div className="menu">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-pencil-square"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fillRule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>{" "}
                &nbsp;
                <span>
                          <Link to={process.env.PUBLIC_URL + "/Publish"}> Publier une annonce</Link>
                        </span>
                        <br />
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-info-circle"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                          />
                          <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
                          <circle cx={8} cy="4.5" r={1} />
                        </svg>{" "}
                &nbsp;
                <span>
                          <a href="/Account"> Infos</a>
                        </span>
                        <br />
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-list-task"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
                          />
                          <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                          <path
                            fillRule="evenodd"
                            d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
                          />
                        </svg>{" "}
                &nbsp;
                <span>
                          <Link to={process.env.PUBLIC_URL + "/Services"}> Mes services</Link>
                        </span>
                        <br />
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-star"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                          />
                        </svg>{" "}
                &nbsp;
                <span>
                          <Link to={process.env.PUBLIC_URL + "/Review"}> Mes avis</Link>
                        </span>
                        <br />
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-gift"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"
                          />
                        </svg>{" "}
                &nbsp;
                <span>
                          <Link to={process.env.PUBLIC_URL + "/Reward"}> Récompenses</Link>
                        </span>
                        <br />
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-share"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
                          />
                        </svg>{" "}
                &nbsp;
                <span>
                          <Link to={process.env.PUBLIC_URL + "/Invite"}> Parrainage</Link>
                        </span>
                        <br />
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-trophy"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"
                          />
                        </svg>{" "}
                &nbsp;
                <span>
                          <Link to={process.env.PUBLIC_URL + "/Trophy"}> Trophées</Link>
                        </span>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
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
                        value={this.state.titre}
                        onChange={this.addPseudo}
                      />
                    </div>
                  </div>


                  <div className="form-group">
                    <div className="col-lg-12">
                      <select className="form-control custom-select" type="text" placeholder="Genre*">
                        <option selected disabled>
                          Vous etes ?
        </option>
                        <option>Une femme</option>
                        <option>Un homme</option>
                      </select>
                    </div>
                  </div>


                  <div className="form-group">
                    <div className="col-lg-12">
                      <input className="form-control" type="text" placeholder="Nom*" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Prenom*"
                        value={this.state.titre}
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
                        value={this.state.titre}
                        onChange={this.changeMail}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Code parrainage (Optionnel)"
                        pattern="[A-Za-z]{2}+-[0-30][1-12]{4}+-[0-100]{2,3}"
                        value={this.state.titre}
                        onChange={this.changeCodeParrainage}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Code Postal"
                        value={this.state.titre}
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
                        value={this.state.titre}
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
                        value={this.state.titre}
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
                        value={this.state.titre}
                        onChange={this.changePassword}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 control-label" />
                    <div className="col-md-12">
                      <button type="button" className="btn-enregistrer" onClick={this.addChangements}>
                        &nbsp;Enregistrer&nbsp;
              </button>
                      <button type="button" className="btn btn-dark ">
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
        </div>;



        {/* FOOTER */}
        <Footer></Footer>
      </div>

    );
  }
}
