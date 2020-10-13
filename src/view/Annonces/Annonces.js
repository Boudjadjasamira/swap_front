import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import Header from '../Common/Header';
import Footer from '../Common/Footer';



export default class Annonces extends Component {

  render() {
    return (
      <div className="body" id="bodyHome">
        <Header></Header>

        <div className="container">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              defaultValue="option1"
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
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Demandes
      </label>
          </div>
        </div>
        <br />
        <section className="search-sec-ann">
          <div className="container">
            <form action="#" method="post" noValidate="novalidate">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-12 p-0">
                      <select
                        className="form-control-index custom-select"
                        name="Régions"
                      >
                        <option selected disabled>
                          Régions
                  </option>
                        <option>Bricolage</option>
                        <option>Cours</option>
                        <option>Aide à la personne</option>
                        <option>Maison</option>
                        <option>Mécanique</option>
                        <option>Beaute</option>
                        <option>Loisirs</option>
                        <option>Vacances</option>
                      </select>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 p-0">
                      <select
                        className="form-control-index custom-select"
                        name="Départements"
                      >
                        <option selected disabled>
                          Départements
                  </option>
                        <option>Bricolage</option>
                        <option>Cours</option>
                        <option>Aide à la personne</option>
                        <option>Maison</option>
                        <option>Mécanique</option>
                        <option>Beaute</option>
                        <option>Loisirs</option>
                        <option>Vacances</option>
                      </select>
                    </div>
                    <div className="col-lg-2 col-md-8 col-sm-12 p-0">
                      <input
                        type="text"
                        className="form-control-index search-slt-ann"
                        placeholder="Ville"
                      />
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12 p-0">
                      <select
                        className="form-control-index custom-select"
                        name="catégories"
                      >
                        <option selected disabled>
                          Catégories
                  </option>
                        <option>Bricolage</option>
                        <option>Cours</option>
                        <option>Aide à la personne</option>
                        <option>Maison</option>
                        <option>Mécanique</option>
                        <option>Beaute</option>
                        <option>Loisirs</option>
                        <option>Vacances</option>
                      </select>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                      <button type="button" className="btn btn-danger wrn-btn">
                        Rechercher
                </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
        <br />
        <br />
        <br />
        {/* Module annonces */}
        <div className="container">
          <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback" />
            <input
              type="text"
              className="form-control-ann"
              placeholder="Entrez votre recherche..."
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="media border p-3 flex-column flex-md-row">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="#"
                  className="align-self-center mr-3"
                  style={{ width: 100 }}
                />

                <div className="media-body align-self-center">
                  <Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>Titre annonce</h4></Link>
                  <small>
                    <i>Posté par @Pseudo, le 00/00/0000</i>
                  </small>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
                    ipsum aliquam metus facilisis scelerisque. Quisque vitae
                    condimentum nulla. Vestibulum lobortis ullamcorper augue id
                    consequat. Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Phasellus at aliquet dui. Mauris
                    dapibus lectus id laoreet iaculis. Duis auctor augue augue, eget
                    lobortis quam auctor at.
            </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12">
              <div className="media border p-3 flex-column flex-md-row">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="#"
                  className="align-self-center mr-3"
                  style={{ width: 100 }}
                />

                <div className="media-body align-self-center">
                  <Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>Titre annonce</h4></Link>
                  <small>
                    <i>Posté par @Pseudo, le 00/00/0000</i>
                  </small>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
                    ipsum aliquam metus facilisis scelerisque. Quisque vitae
                    condimentum nulla. Vestibulum lobortis ullamcorper augue id
                    consequat. Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Phasellus at aliquet dui. Mauris
                    dapibus lectus id laoreet iaculis. Duis auctor augue augue, eget
                    lobortis quam auctor at.
            </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12">
              <div className="media border p-3 flex-column flex-md-row">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="#"
                  className="align-self-center mr-3"
                  style={{ width: 100 }}
                />

                <div className="media-body align-self-center">
                  <Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>Titre annonce</h4></Link>
                  <small>
                    <i>Posté par @Pseudo, le 00/00/0000</i>
                  </small>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
                    ipsum aliquam metus facilisis scelerisque. Quisque vitae
                    condimentum nulla. Vestibulum lobortis ullamcorper augue id
                    consequat. Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Phasellus at aliquet dui. Mauris
                    dapibus lectus id laoreet iaculis. Duis auctor augue augue, eget
                    lobortis quam auctor at.
            </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12">
              <div className="media border p-3 flex-column flex-md-row">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="#"
                  className="align-self-center mr-3"
                  style={{ width: 100 }}
                />

                <div className="media-body align-self-center">
                  <Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>Titre annonce</h4></Link>
                  <small>
                    <i>Posté par @Pseudo, le 00/00/0000</i>
                  </small>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
                    ipsum aliquam metus facilisis scelerisque. Quisque vitae
                    condimentum nulla. Vestibulum lobortis ullamcorper augue id
                    consequat. Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Phasellus at aliquet dui. Mauris
                    dapibus lectus id laoreet iaculis. Duis auctor augue augue, eget
                    lobortis quam auctor at.
            </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12">
              <div className="media border p-3 flex-column flex-md-row">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="#"
                  className="align-self-center mr-3"
                  style={{ width: 100 }}
                />

                <div className="media-body align-self-center">
                  <Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>Titre annonce</h4></Link>
                  <small>
                    <i>Posté par @Pseudo, le 00/00/0000</i>
                  </small>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
                    ipsum aliquam metus facilisis scelerisque. Quisque vitae
                    condimentum nulla. Vestibulum lobortis ullamcorper augue id
                    consequat. Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Phasellus at aliquet dui. Mauris
                    dapibus lectus id laoreet iaculis. Duis auctor augue augue, eget
                    lobortis quam auctor at.
            </p>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
        <center>
          <svg
            width="3em"
            height="2.5em"
            viewBox="0 0 16 16"
            className="bi bi-arrow-down-circle-fill"
            fill="#a5d8dc"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
            />
          </svg>
        </center>
        <br />
        <br />
        <Footer></Footer>
      </div>





    );
  }
}
