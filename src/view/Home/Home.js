import React, { Component } from 'react';
//Inclu les CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
//Inclu les fichiers communs
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { Link } from 'react-router-dom';
//Inclut les Composants
import SearchBar from '../../components/SearchBar/SearchBar';
import Category from '../../components/Category/Category';
import Search from '../../components/Search/Search';


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
            <img class="img-fluid flex-wrap" src={process.env.PUBLIC_URL + 'assets/img/img3.png'} alt="logo" width="60%" />
          </center>
          <br />
          <br />
          <br />


          <Category></Category>

          <SearchBar></SearchBar>

          <Search></Search>


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
                    className="align-self-center mr-3 img-thumbnail shadow-sm"
                  />
                  <div className="media-body align-self-center">
                    <div className="d-flex">
                      <div className="p-1 "><Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>Titre annonce</h4></Link></div>
                      <div className="ml-auto p-2"> <small> <i>Posté par @Pseudo, le 00/00/0000</i></small></div>
                    </div>
                    <hr />
                    <p className="text-justify">
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
                <div className="media border p-3 flex-column flex-md-row ">
                  <img
                    src="https://via.placeholder.com/100x100"
                    alt="#"
                    className="align-self-center mr-3 img-thumbnail shadow-sm"
                    style={{ width: 100 }}
                  />

                  <div className="media-body align-self-center">
                    <div className="d-flex">
                      <div className="p-1 "><Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>Titre annonce</h4></Link></div>
                      <div className="ml-auto p-2"> <small> <i>Posté par @Pseudo, le 00/00/0000</i></small></div>
                    </div>
                    <hr />
                    <p className="text-justify">
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
                    className="align-self-center mr-3 img-thumbnail shadow-sm"
                    style={{ width: 100 }}
                  />

                  <div className="media-body align-self-center">
                    <div className="d-flex">
                      <div className="p-1 "><Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>Titre annonce</h4></Link></div>
                      <div className="ml-auto p-2"> <small> <i>Posté par @Pseudo, le 00/00/0000</i></small></div>
                    </div>
                    <hr />
                    <p className="text-justify">
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
                    className="align-self-center mr-3 img-thumbnail shadow-sm"
                    style={{ width: 100 }}
                  />

                  <div className="media-body align-self-center">
                    <div className="d-flex">
                      <div className="p-1 "><Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>Titre annonce</h4></Link></div>
                      <div className="ml-auto p-2"> <small> <i>Posté par @Pseudo, le 00/00/0000</i></small></div>
                    </div>
                    <hr />
                    <p className="text-justify">
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
                    className="align-self-center mr-3 img-thumbnail shadow-sm"
                    style={{ width: 100 }}
                  />

                  <div className="media-body align-self-center">
                    <div className="d-flex">
                      <div className="p-1 "><Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>Titre annonce</h4></Link></div>
                      <div className="ml-auto p-2"> <small> <i>Posté par @Pseudo, le 00/00/0000</i></small></div>
                    </div>
                    <hr />
                    <p className="text-justify">
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
                    className="align-self-center mr-3 img-thumbnail shadow-sm"
                    style={{ width: 100 }}
                  />

                  <div className="media-body align-self-center">
                    <div className="d-flex">
                      <div className="p-1 "><Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>Titre annonce</h4></Link></div>
                      <div className="ml-auto p-2"> <small> <i>Posté par @Pseudo, le 00/00/0000</i></small></div>
                    </div>
                    <hr />
                    <p className="text-justify">
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
                    className="align-self-center mr-3 img-thumbnail shadow-sm"
                    style={{ width: 100 }}
                  />

                  <div className="media-body align-self-center">
                    <div className="d-flex">
                      <div className="p-1 "><Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>Titre annonce</h4></Link></div>
                      <div className="ml-auto p-2"> <small> <i>Posté par @Pseudo, le 00/00/0000</i></small></div>
                    </div>
                    <hr />
                    <p className="text-justify">
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
                    className="align-self-center mr-3 img-thumbnail shadow-sm"
                    style={{ width: 100 }}
                  />

                  <div className="media-body align-self-center">
                    <div className="d-flex">
                      <div className="p-1 "><Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>Titre annonce</h4></Link></div>
                      <div className="ml-auto p-2"> <small> <i>Posté par @Pseudo, le 00/00/0000</i></small></div>
                    </div>
                    <hr />
                    <p className="text-justify">
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
        </div>



        {/* FOOTER */}
        < Footer ></Footer >
      </div >
    );
  }
}
