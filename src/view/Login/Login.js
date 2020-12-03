import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
import Tilt from 'react-parallax-tilt';
import '../../css/loading.css';
import sha1 from 'js-sha1';

export default class login extends Component {

  constructor(props){
    super(props);
    this.state = {
      pseudo: "",
      password: "",
      redirection: false
    };
    this.changePseudo = this.changePseudo.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.sendLogin = this.sendLogin.bind(this);
    this.connect = this.connect.bind(this);
  }

  changePassword(e){
    this.setState({password: e.target.value});
  }

  changePseudo(e){
    this.setState({pseudo: e.target.value});
  }



  connect(){
    Swal.fire({
      title: "Connexion en cours...",
      html: '<div class="loadingio-spinner-spin-gkmwr87oy9"><div class="ldio-qorx55o730n"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div></div>',
      showConfirmButton: false,
      allowOutsideClick: false
    });


  
    axios.post('http://149.91.89.142:8000/api/login', {
      pseudo: this.state.pseudo,
      motDePasse: sha1(this.state.password)
    }, { headers : {"Content-Type": "application/json"}})
    .then(res => {
        if(res.data.user > 0){
          if(res.data.actif == 0){
            /* eslint eqeqeq: 0 */
            Swal.fire({
              icon: 'error',
              title: "Connexion",
              html: '<p>Impossible de se connecter, l\'utilisateur est désactivé.</p>',
              showConfirmButton: true,
            });
          }else{
            localStorage.setItem('connected', "1");
            localStorage.setItem('ID', res.data.user);
            localStorage.setItem('isAdmin', res.data.isAdmin);
            this.setState({redirection: true});
            Swal.fire({
              icon: 'success',
              title: 'Vous êtes connecté(e) !',
              showConfirmButton: false,
              timer: 2500,
              allowOutsideClick: false
            });
          }
        }else{
          Swal.fire({
            icon: 'error',
            title: "Connexion",
            html: '<p>Impossible de se connecter, vérifiez votre identifiant et/ou mot de passe !</p>',
            showConfirmButton: true,
          });
        }  
    })
  }

  sendLogin(e){
    if(e.key === 'Enter'){
      this.connect()
    }
  }

  render() {
    return (
      <div>
        {this.state.redirection ? 
          <Redirect to="/"></Redirect>
          :
        
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <div className="login100-pic" >
                <img className="img-fluid" src="assets/img/img2.png" alt="IMG"  style={{ paddingTop: '20px' }}/>
              </div>
              <div className="login100-form validate-form">
                <Tilt><img src="assets/img/logo.png" alt="logo" /></Tilt>
                <br />
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Pseudo is required"
                >
                  <input
                    className="input100"
                    type="text"
                    name="pass"
                    placeholder="Identifiant"
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
                    placeholder="Mot de passe"
                    value={this.state.password}
                    onChange={this.changePassword}
                    onKeyDown={this.sendLogin}
                  />
                </div>
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn onConnect" onClick={this.connect}>Se connecter</button>
                </div>
                <br />
                <div className="text-center p-t-12">                  
                <Link className="txt2" to={process.env.PUBLIC_URL + "/ForgotPassword"}> Identifiant / Mot de passe oublié ? </Link>                
                </div>
                <div className="text-center p-t-136">
                  <Link className="txt2" to={process.env.PUBLIC_URL + "/Register"}> Créer un compte</Link>
                </div>
              </div>
            </div>
          </div>
          <center>SWAP - 2020 Tous droits réservés</center>
        </div>
        }
      </div>

    );
  }
}
