import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/login.css';


export default class Register extends Component {
    
  render() {
    return (

        <div>
        <div className="limiter">
            <div className="container-login100">
            <div className="wrap-login100">
                <div className="login100-pic js-tilt" data-tilt>
                <img  class="img-fluid" src="assets/img/img2.png" alt="IMG" />
                </div>
                <form className="login100-form validate-form">
                <img  class="img-fluid" src="assets/img/logo.png" alt="logo" />
                <br />
                <br />
                <div
                    className="wrap-input100 validate-input"
                    data-validate="Pseudo is required"
                >
                    <input
                    className="input100"
                    type="text"
                    name="pass"
                    placeholder="Pseudo"
                    />
                </div>
                <br />
                <div
                    className="wrap-input100 validate-input"
                    data-validate="Valid email is required: ex@abc.xyz"
                >
                    <input
                    className="input100"
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    />
                </div>
                <br />
                <div
                    className="wrap-input100 validate-input"
                    data-validate="Password is required"
                >
                    <input
                    className="input100"
                    type="password"
                    name="pass"
                    placeholder="Password"
                    />
                </div>
                <div className="container-login100-form-btn">
                    <button className="login100-form-btn">S'inscrire</button>
                </div>
                <br />
                </form>
            </div>
            </div>
        </div>
        <center>SWAP - 2020 Tous droits réservés</center>
</div>

        );
    }
  }
  