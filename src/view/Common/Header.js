import src from '*.bmp';
import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import img from '../assets/logo.png';


export default class Header extends Component {
    
  render() {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
              <a class="navbar-brand" href="#">
                <img src={img} width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy"/>
                Bootstrap
              </a>
            </nav>        
          </div>
    );
  }
}
