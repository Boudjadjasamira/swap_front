import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Header extends Component {
    
  render() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
              <Link className="navbar-brand" to={process.env.PUBLIC_URL + "/"}>
                <img src={process.env.PUBLIC_URL + 'assets/logo.png'} width="30" height="30" className="d-inline-block align-top" alt="Logo" loading="lazy"/>
                Bootstrap
              </Link>
            </nav>        
          </div>
    );
  }
}
