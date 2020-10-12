import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';


export default class Footer extends Component {
    
  render() {
    return (
                      <section id="footer">
                    <div className="container">
                      <div className="row text-center text-xs-center text-sm-left text-md-left">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                          <p></p>
                          <center>
                            <img src="assets/img/logo.png" alt="logo" width="60%" />
                          </center>
                          <p />
                          <p>
                            Met en relation gratuitement les membres qui proposent et recherchent
                            des services à échanger.
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                          <br />
                          <h3>Informations</h3>
                          <ul className="list-unstyled quick-links">
                            <br />
                            <li>
                              <a href="faq.html">FAQ</a>
                            </li>
                            <li>
                              <a href="contact.html">Contactez-nous</a>
                            </li>
                            <li>
                              <a href="annonces.html">Annonces</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                          <br />
                          <h3>Liens pratiques</h3>
                          <ul className="list-unstyled quick-links">
                            <br />
                            <li>
                              <a href="#">Conditions d'utilisations</a>
                            </li>
                            <li>
                              <a href="#">Politique de confidentialité</a>
                            </li>
                            <li>
                              <a href="#">Mentions légales</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <br />
                      <br />
                      <br />
                    </div>
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p className="h6">SWAP - 2020 Tous droits réservés</p>
                      </div>
                    </div>
                </section>

    );
  }
}
   