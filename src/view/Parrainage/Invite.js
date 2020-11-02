import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
//Inclu les fichiers communs
import Header from '../../view/Common/Header';
import Footer from '../../view/Common/Footer';

import ProfilInfoGauche from '../../components/ProfilInfoGauche/ProfilInfoGauche';


export default class Invite extends Component {

  componentDidMount(){
    document.title = "Profil - Parrainage";
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
                        <div className="col-md-3">
                            <ProfilInfoGauche></ProfilInfoGauche>
                        </div>
                        {/* module colonn droite */}
              <div className="col-md-9 personal-info">
                <form className="form-horizontal">
                  <div className="row justify-content-start">
                    <div className="col-12">
                      <div className="media border p-3 flex-column flex-md-row">
                        <div className="media-body align-self-center">
                          <h4>Mon code parrainage </h4>
                          
                          <br />
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="J-B-0101-78"
                              placeholder="Some path"
                              id="copy-input"
                            />
                            <span className="input-group-btn">
                              &nbsp;
                      <button
                                className="btn btn-default"
                                type="button"
                                id="copy-button"
                                data-toggle="tooltip"
                                data-placement="button"
                                title="Copy to Clipboard"
                              >
                                Copier
                      </button>
                            </span>
                          </div>
                          <div id="social-links" className=" col-lg-12">
                            <div className="row justify-content-center">
                              <div className="col-xs-6 col-sm-3 col-md-2 col-lg-3 social-btn-holder">
                                {/* <a
                                  title="google"
                                  className="btn btn-social btn-block btn-google"
                                  target="_BLANK"

                                >
                                  <i className="fa fa-google" />
                                </a> */}
                              </div>
                              <div className="col-xs-6 col-sm-3 col-md-2 col-lg-3 social-btn-holder">
                                {/* <a
                                  title="twitter"
                                  className="btn btn-social btn-block btn-twitter"
                                  target="_BLANK"

                                > 
                                <i className="fa fa-twitter" />
                                </a> */}
                              </div>
                              <div className="col-xs-6 col-sm-3 col-md-2 col-lg-3 social-btn-holder">
                                {/* <a
                                  title="github"
                                  className="btn btn-social btn-block btn-facebook"
                                  target="_BLANK"

                                >
                                  <i className="fa fa-facebook" />
                                </a> */}
                              </div>
                              <div className="col-xs-6 col-sm-3 col-md-2 col-lg-3 social-btn-holder">
                                {/*  <a
                                  title="github"
                                  className="btn btn-social btn-block btn-mail"
                                  target="_BLANK"

                                >
                                  <i className="fa fa-envelope" />
                                </a> */}
                              </div>
                            </div>
                          </div>
                          <h4>Mes Filleuils </h4>
                          <br />
                          <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              Nom Prenom
                      <span className="badge badge-info badge-pill">10pts</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              Nom Prenom
                      <span className="badge badge-info badge-pill">10pts</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              Nom Prenom
                      <span className="badge badge-info badge-pill">10pts</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              Nom Prenom
                      <span className="badge badge-info badge-pill">10pts</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              Nom Prenom
                      <span className="badge badge-info badge-pill">10pts</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              Nom Prenom
                      <span className="badge badge-info badge-pill">10pts</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <br />
                <br />
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>;


        {/* FOOTER */}
        <Footer></Footer>
      </div >

    );
  }
}
