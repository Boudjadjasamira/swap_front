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
              <center>
                <img src={process.env.PUBLIC_URL + 'assets/img/logo.png'} alt="logo_swap" width="60%" />
              </center>
              <p className="text-justify">
                Met en relation gratuitement les membres qui proposent et recherchent
                des services à échanger.
              </p>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <br />
              <h3>Informations</h3>
              <ul className="list-unstyled quick-links">
                <li>
                  <Link className="nav-link" to={process.env.PUBLIC_URL + "/Faq"}>FAQ</Link>
                </li>
                <li>
                  <Link className="nav-link" to={process.env.PUBLIC_URL + "/Contact"}>Contactez-nous</Link>
                </li>
                <li>
                  <Link className="nav-link" to={process.env.PUBLIC_URL + "/Annonces"}>Annonces</Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <br />
              <h3>Liens pratiques</h3>
              <ul className="list-unstyled quick-links">
                <li>
                  <Link className="nav-link" to={process.env.PUBLIC_URL + "/Termsofuse"}>Conditions d'utilisations</Link>
                </li>
                <li>
                  <Link className="nav-link" to={process.env.PUBLIC_URL + "/Privacypolicy"}>Politique de confidentialité</Link>
                </li>
                <li>
                  <Link className="nav-link" to={process.env.PUBLIC_URL + "/Legalenotice"}>Mentions légales</Link>
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