import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../../css/styles.css';



export default class Header extends Component {
    
  render() {
    return (
        <div>           
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                <Link className="navbar-brand" to={process.env.PUBLIC_URL + "/"}>
                        <img src={process.env.PUBLIC_URL + 'assets/img/logo.png'}  className="d-inline-block align-top" alt="Logo" width="60%" loading="lazy"/>
                </Link>

              <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                      <Link className="nav-item active"><a className="nav-link" href="index.html">HOME <span className="sr-only">(current)</span></a></Link>
                      <Link className="nav-item"><a className="nav-link" href="annonces.html">ANNONCES</a></Link>
                      <Link className="nav-item"><a className="nav-link " href="faq.html" tabindex="-1" aria-disabled="true">FAQ</a></Link>
                      <Link className="nav-item"><a className="nav-link " href="contact.html" tabindex="-1" aria-disabled="true">CONTACT</a></Link>
                  </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-dark my-2 my-sm-0" type="submit" formaction="index.html">
                        <img src={process.env.PUBLIC_URL + 'assets/icone/user.png'} alt="logo" width="15cm" height="15cm" /> &nbsp; Mon compte</button>&ensp;
                    <button className="btn btn-outline-dark my-2 my-sm-0" type="submit" formaction="index.html">
                        <img src={process.env.PUBLIC_URL + 'assets/icone/edit.png'} alt="logo" width="15cm" height="15cm" /> &nbsp; Publier un article</button>&ensp;
                      
                    </form>        
              </div>
          </nav>
        </div>



    );
  }
}
