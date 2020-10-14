import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import Header from '../../view/Common/Header';
import Footer from '../../view/Common/Footer';



export default class Erreur404 extends Component {
  componentDidMount() {
    document.title = "Erreur 404"
  }

  render() {
    return (
      <div className="body" id="bodyHome">

        {/* HEADER */}
        <Header></Header>

        <br />
        <div className="page-wrap d-flex flex-row align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <h5 className="display-1 d-block">404</h5>
                <div className="mb-4 lead">
                  Page non trouvée !
        </div>
                <Link className="btn-link" to={process.env.PUBLIC_URL + "/"}> Retour à l'accueil</Link>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

        {/* FOOTER */}
        <Footer></Footer>
      </div>

    );
  }
}
