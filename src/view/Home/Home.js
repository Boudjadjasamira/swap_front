import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
//Inclu les fichiers communs
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { Link } from 'react-router-dom';

export default class Home extends Component {


  componentDidMount() {
    document.title = "Home"
  }

  render() {

    return (
      <div className="body" id="bodyHome">
        {/* HEADER */}
        <Header title="Home"></Header>

        <div>
          <center>
            <img class="img-fluid" src="assets/img/img3.png" alt="logo" width="60%" />
          </center>
          <br />
          <br />
          <br />
          {/*Section card catégories */}
          <center>
            <h1>Catégories</h1>
          </center>
          <br />
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Link className="" to={process.env.PUBLIC_URL + "/Categorie/Bricolage"}><div className="card-counter secondary">
                  <span className="count-name">BRICOLAGE</span>
                </div></Link>
              </div>
              <div className="col-md-3">
                <div className="card-counter secondary">
                  <span className="count-name">COURS</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-counter secondary">
                  <span className="count-name">AIDE A LA PERSONNE</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-counter secondary">
                  <span className="count-name">MAISON</span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="card-counter secondary">
                  <span className="count-name">MECANIQUE</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-counter secondary">
                  <span className="count-name">BEAUTE</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-counter secondary">
                  <span className="count-name">LOISIRS</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-counter secondary">
                  <span className="count-name">VACANCES</span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          {/*Fin card catégorie */}
          <center>
            <img class="img-fluid" src="assets/img/img4.png" alt="logo" width="60%" />
          </center>
          <br />
          <br />
          <br />
          <br />
          {/*Section barre de recherche */}
          <section className="search-sec">
            <div className="container">
              <form action="#" method="post" noValidate="novalidate">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 p-0">
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
                      <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                        <select
                          className="form-control-index custom-select"
                          name="Régions"
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
                      <div className="col-lg-3 col-md-3 col-sm-12 p-0">
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
          <br />
          <br />
          {/*Fin barre de recherche */}
          {/* Début Section annonces */}
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
                      <i> Posté par @Pseudo, le 00/00/0000</i>
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
          <br />
          <br />
        </div>;



        {/* FOOTER */}
        <Footer></Footer>
      </div>
    );
  }
}
