import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//Inclu les fichiers communs
import Header from '../../view/Common/Header';
import Footer from '../..//view/Common/Footer';

import axios from 'axios';

export default class Myprofil extends Component {

  constructor(props){
    super(props);
    this.state = {
      pseudo: "",
      description: ""
    };
  }

  componentDidMount(){
    //Recuperation des infos
    axios.get(`http://localhost:8000/api/users/6`)
    .then(res =>
        this.setState({
          pseudo: res.data.pseudo,
          description: res.data.description
        })
    )
  }

  render() {
    return (
      <div className="body" id="bodyHome">

        {/* HEADER */}
        <Header></Header>
        <br />
        <br />
        <br />
        <div className="container profile shadow-lg p-3 mb-5 bg-white rounded w-50 p-3">
          <div className="container ">
            <div className="text-center-profil">
              <div className="item">
                <span className="notify-badge-profil">
                  <img src="assets/icone/validate.png" alt="#" style={{ width: 60 }} />
                </span>
                <img src="assets/img/avatar.png" alt="avatar" width="240px" />
                <br />
                <br />
                <h1>@{this.state.pseudo}</h1>
              </div>
            </div>
            <br />
            {/*---avatar et badge End*/}
            <div className="text-center">
              <p>Inscrit depuis le 00/00/00</p>
              {/*------ Rating----*/}
              <div className="row-center">
                <div className="rating">
                  <input type="radio" id="star5" name="rating" defaultValue={5} />
                  <label htmlFor="star5" title="Super !">
                    5 stars
            </label>
                  <input type="radio" id="star4" name="rating" defaultValue={4} />
                  <label htmlFor="star4" title="Satisfaisant">
                    4 stars
            </label>
                  <input type="radio" id="star3" name="rating" defaultValue={3} />
                  <label htmlFor="star3" title="Moyen">
                    3 stars
            </label>
                  <input type="radio" id="star2" name="rating" defaultValue={2} />
                  <label htmlFor="star2" title="Acceptable">
                    2 stars
            </label>
                  <input type="radio" id="star1" name="rating" defaultValue={1} />
                  <label htmlFor="star1" title="Bof">
                    1 star
            </label>
                </div>
              </div>

            </div>
            <h5>
              <img
                src="assets/icone/quote.png"
                alt="#"
                className="align-self-center mr-2"
                style={{ width: 50 }}
              />
         Présentation
      </h5>
            <br />
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="media-body align-self-center">
                    <p>
                      {this.state.description}
              </p>
                  </div>
                </div>
              </div>
              <br />
              <br />
              {/* Section annonces */}
              <h5>Mes Trophées</h5>
              <hr />
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <form className="form-horizontal">
                      <div className="row justify-content-start">
                        <div className="col-12">
                          <div className="p-1 flex-column flex-md-row ">
                            <div className="col-md-12 personal-info ">
                              <div className="container ">
                                <div className="row text-center">
                                  {/* Team item */}
                                  <div className="col-xl-3 col-sm-6 mb-5">
                                    <div className="bg-white rounded   py-4 px-4">
                                      <img
                                        src="http://placehold.it/100x100"
                                        alt="trophée"
                                        width={100}
                                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                      />
                                      <div className="d-block text-truncate mb-1">
                                        <br />
                                        <h6 className="trophy title">Who i am ?</h6>
                                      </div>
                                      <div className="trophy d-block">
                                        <span>Remplir à 100% son profil</span>
                                        <br />
                                      </div>
                                      <div className="percent d-block">
                                        <div className="bar">
                                          {" "}
                                          <span className="volume" style={{ width: "68%" }}>
                                            68%
                            </span>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End */}
                                  {/* Team item */}
                                  <div className="col-xl-3 col-sm-6 mb-5">
                                    <div className="bg-white rounded  py-4 px-4">
                                      <img
                                        src="http://placehold.it/100x100"
                                        alt=" trophée"
                                        width={100}
                                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                      />
                                      <div className="d-block text-truncate mb-1">
                                        <br />
                                        <h6 className="trophy title">Super User</h6>
                                      </div>
                                      <div className="trophy d-block">
                                        <span>Obtenir l'indice de confiance</span>
                                        <br />
                                      </div>
                                      <div className="percent d-block">
                                        <div className="bar">
                                          {" "}
                                          <span className="volume" style={{ width: "72%" }}>
                                            72%
                            </span>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End */}
                                  {/* Team item */}
                                  <div className="col-xl-3 col-sm-6 mb-5">
                                    <div className="bg-white rounded   py-4 px-4">
                                      <img
                                        src="http://placehold.it/100x100"
                                        alt=" trophée"
                                        width={100}
                                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                      />
                                      <div className="d-block text-truncate mb-1">
                                        <br />
                                        <h6 className="trophy title">Top services</h6>
                                      </div>
                                      <div className="trophy d-block">
                                        <span>Création de 10 annonces</span>
                                        <br />
                                      </div>
                                      <div className="percent d-block">
                                        <div className="bar">
                                          {" "}
                                          <span className="volume" style={{ width: "42%" }}>
                                            42%
                            </span>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End */}
                                  {/* Team item */}
                                  <div className="col-xl-3 col-sm-6 mb-5">
                                    <div className="bg-white rounded   py-4 px-4">
                                      <img
                                        src="http://placehold.it/100x100"
                                        alt=" trophée"
                                        width={100}
                                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                      />
                                      <div className="d-block text-truncate mb-1">
                                        <br />
                                        <h6 className="trophy title">Godfather</h6>
                                      </div>
                                      <div className="trophy d-block">
                                        <span>Parrainer 3 Personnes</span>
                                        <br />
                                      </div>
                                      <div className="percent d-block">
                                        <div className="bar">
                                          {" "}
                                          <span className="volume" style={{ width: "42%" }}>
                                            42%
                            </span>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End */}
                                  {/* Team item */}
                                  <div className="col-xl-3 col-sm-6 mb-5">
                                    <div className="bg-white rounded   py-4 px-4">
                                      <img
                                        src="http://placehold.it/100x100"
                                        alt=" trophée"
                                        width={100}
                                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                      />
                                      <div className="d-block text-truncate mb-1">
                                        <br />
                                        <h6 className="trophy title">Give me Gift !</h6>
                                      </div>
                                      <div className="trophy d-block">
                                        <span>Echanger vos points</span>
                                        <br />
                                      </div>
                                      <div className="percent d-block">
                                        <div className="bar">
                                          {" "}
                                          <span className="volume" style={{ width: "42%" }}>
                                            42%
                            </span>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End */}
                                  {/* Team item */}
                                  <div className="col-xl-3 col-sm-6 mb-5">
                                    <div className="bg-white rounded   py-4 px-4">
                                      <img
                                        src="http://placehold.it/100x100"
                                        alt=" trophée"
                                        width={100}
                                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                      />
                                      <div className="d-block text-truncate mb-1">
                                        <br />
                                        <h6 className="trophy title">Nom du trophée</h6>
                                      </div>
                                      <div className="trophy d-block">
                                        <span>Création de 10 annonces</span>
                                        <br />
                                      </div>
                                      <div className="percent d-block">
                                        <div className="bar">
                                          {" "}
                                          <span className="volume" style={{ width: "42%" }}>
                                            42%
                            </span>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End */}
                                  {/* Team item */}
                                  <div className="col-xl-3 col-sm-6 mb-5">
                                    <div className="bg-white rounded   py-4 px-4">
                                      <img
                                        src="http://placehold.it/100x100"
                                        alt=" trophée"
                                        width={100}
                                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                      />
                                      <div className="d-block text-truncate mb-1">
                                        <br />
                                        <h6 className="trophy title">Premier contact</h6>
                                      </div>
                                      <div className="trophy d-block">
                                        <span>Envoyer 5 messages</span>
                                        <br />
                                      </div>
                                      <div className="percent d-block">
                                        <div className="bar">
                                          {" "}
                                          <span className="volume" style={{ width: "34%" }}>
                                            34%
                            </span>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End */}
                                  {/* Team item */}
                                  <div className="col-xl-3 col-sm-6 mb-5">
                                    <div className="bg-white rounded   py-4 px-4">
                                      <img
                                        src="http://placehold.it/100x100"
                                        alt="trophée"
                                        width={100}
                                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                      />
                                      <div className="d-block text-truncate mb-1">
                                        <br />
                                        <h6 className="trophy title">Best rewiever</h6>
                                      </div>
                                      <div className="trophy d-block">
                                        <span>Poster 10 avis</span>
                                        <br />
                                        <br />
                                      </div>
                                      <div className="percent d-block">
                                        <div className="bar">
                                          {" "}
                                          <span className="volume" style={{ width: "58%" }}>
                                            58%
                            </span>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <br />
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
          {/* begin share*/}
          <div id="social-links" className=" col-lg-12">
            <div className="row justify-content-center">
              <div className="col-xs-6 col-sm-3 col-md-2 col-lg-3 social-btn-holder">
                <a
                  title="google"
                  className="btn btn-social btn-block btn-google"
                  target="_BLANK"
                  href
                >
                  <i className="fa fa-google" />
                </a>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-2 col-lg-3 social-btn-holder">
                <a
                  title="twitter"
                  className="btn btn-social btn-block btn-twitter"
                  target="_BLANK"
                  href
                >
                  <i className="fa fa-twitter" />
                </a>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-2 col-lg-3 social-btn-holder">
                <a
                  title="github"
                  className="btn btn-social btn-block btn-facebook"
                  target="_BLANK"
                  href
                >
                  <i className="fa fa-facebook" />
                </a>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-2 col-lg-3 social-btn-holder">
                <a
                  title="github"
                  className="btn btn-social btn-block btn-mail"
                  target="_BLANK"
                  href
                >
                  <i className="fa fa-envelope" />
                </a>
              </div>
            </div>
          </div>
          {/* end share */}
        </div>
        {/* FOOTER */}
        <Footer></Footer>
      </div>

    );
  }
}
