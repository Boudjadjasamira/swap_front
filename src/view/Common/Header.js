import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';

export default class Header extends Component {
/* eslint eqeqeq: 0 */
  constructor(props) {
    super(props);
    this.state = {
      connected: localStorage.getItem("connected"),
      showInfo: false
    }
  }

  componentDidMount() {
    let show = this.state.showInfo;
    if (this.state.connected == 1) {
      show = true;
    }

    this.setState({ showInfo: show });
  }


  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to={process.env.PUBLIC_URL + "/"}>
          <img src={process.env.PUBLIC_URL + 'assets/img/logo.png'} className="d-inline-block align-top" alt="Logo" width="70%" loading="lazy" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>HOME<span className="sr-only">(current)</span></Link>
            <Link className="nav-link" to={process.env.PUBLIC_URL + "/Annonces"}>ANNONCES</Link>
            <Link className="nav-link" to={process.env.PUBLIC_URL + "/Member"}>MEMBRES</Link>
            <Link className="nav-link" to={process.env.PUBLIC_URL + "/Faq"}>FAQ</Link>
            <Link className="nav-link" to={process.env.PUBLIC_URL + "/Contact"}>CONTACT</Link>
          </ul>
          {this.state.showInfo ?
            <div>
              <Link className="btn btn-outline-dark my-2 my-sm-0" to={process.env.PUBLIC_URL + "/Account"}>
                <img src={process.env.PUBLIC_URL + 'assets/icone/user.png'} alt="logo" width="15cm" height="15cm" />
                <span>&nbsp;Mon compte</span>
              </Link>
                &nbsp;
                <Link className="btn btn-outline-dark my-2 my-sm-0" to={process.env.PUBLIC_URL + "/Publish"}>
                <img src={process.env.PUBLIC_URL + 'assets/icone/edit.png'} alt="logo" width="15cm" height="15cm" />
                <span>&nbsp;Publier une annonce</span>
              </Link>
                &nbsp;
                <Link className="btn btn-outline-dark my-2 my-sm-0" to={process.env.PUBLIC_URL + "/Logout"}>
                <img src={process.env.PUBLIC_URL + 'assets/icone/logout.png'} alt="logo" width="15cm" height="15cm" />
                <span>&nbsp; Déconnexion</span>
              </Link>
            </div>
            :
            <div>
              <Link className="btn btn-outline-dark my-2 my-sm-0" to={process.env.PUBLIC_URL + "/Login"}>
                <img src={process.env.PUBLIC_URL + 'assets/icone/user.png'} alt="logo" width="15cm" height="15cm" />
                <span>&nbsp;Connexion</span>
              </Link>
                &nbsp;
                <Link className="btn btn-outline-dark my-2 my-sm-0" to={process.env.PUBLIC_URL + "/Register"}>
                <img src={process.env.PUBLIC_URL + 'assets/icone/edit.png'} alt="logo" width="15cm" height="15cm" />
                <span>&nbsp;Inscription</span>
              </Link>
            </div>
          }

        </div>
      </nav>

    );
  }
}

