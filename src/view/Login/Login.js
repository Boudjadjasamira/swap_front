import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { data } from 'jquery';


export default class login extends Component {

  constructor(props){
    super(props);
    this.state = {
      pseudo: "",
      password: ""
    };
    this.changePseudo = this.changePseudo.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.connect = this.connect.bind(this);
  }

  changePassword(e){
    this.setState({password: e.target.value});
  }

  changePseudo(e){
    this.setState({pseudo: e.target.value});
  }

  connect(){
    axios.post('http://localhost:8000/api/login_check', {
      pseudo: this.state.pseudo,
      mot_de_passe: this.state.password
    }, {
      headers : { 
        'authorization': "Bearer c023eb356c2b3f878a5f8d94de1e1697",
        'Accept' : 'application/json',
        'Content-Type': 'application/json' 
      }
    }).then(res => {
      console.log(res);
    })
  }


  render() {
    return (

      <div>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <div className="login100-pic js-tilt" data-tilt>
                <img class="img-fluid" src="assets/img/img2.png" alt="IMG" />
              </div>
              <div className="login100-form validate-form">
                <img src="assets/img/logo.png" alt="logo" />
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
                    value={this.state.pseudo}
                    onChange={this.changePseudo}
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
                    value={this.state.password}
                    onChange={this.changePassword}
                  />
                </div>
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn" onClick={this.connect}>Se connecter</button>
                </div>
                <br />
                <div className="text-center p-t-12">
                  <span className="txt1">Forgot </span>
                  <a className="txt2" href="#">
                    Pseudo / Password ?
                  </a>
                </div>
                <div className="text-center p-t-136">
                  <Link  className="txt2" to={process.env.PUBLIC_URL + "/Register"}> Créer un compte</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <center>SWAP - 2020 Tous droits réservés</center>
      </div>

    );
  }
}
