import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

export default class ForgotPassword extends Component {

  constructor(props){
    super(props);

    this.state = {
      mailForgot: ""
    };

    this.changeMailForgot = this.changeMailForgot.bind(this);
    this.sendMail = this.sendMail.bind(this);
  }
 
  componentDidMount(){
    document.title = "Mot de passe oublié"
  }
   
  changeMailForgot(e){
    this.setState({mailForgot: e.target.value});
  }

  sendMail(e){
    Swal.fire({
      title: "Envoie en cours...",
      html: '<div class="loadingio-spinner-spin-gkmwr87oy9"><div class="ldio-qorx55o730n"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div></div>',
      showConfirmButton: false,
      allowOutsideClick: false
    });

    var rand = function() {
      return Math.random().toString(36).substr(2); // remove `0.`
    };
  
    var token = function() {
        return rand() + rand(); // to make it longer
    };

    let verifMail = false;
    let idRecupByMail = 0;
    let tokenToSend = token().toString();

    axios.get('http://localhost:8000/api/users')
    .then(res => {
      res.data['hydra:member'].map(e => {
        if(e.mail.toString() == this.state.mailForgot.toString()){
          verifMail = true;
          idRecupByMail = e.id
        }
      });

      if(verifMail == true){
        axios.post('http://localhost:8000/mail/sender', {
            mailForgot: this.state.mailForgot,
            keyToken: tokenToSend
          }).then(res => {

            axios.patch('http://localhost:8000/api/users/' + idRecupByMail, {
              tokenGenPasswordRecovery: tokenToSend
            },{
              headers: {
                    'Content-Type': 'application/merge-patch+json'
              }}).then(res2 => {
                Swal.fire({
                  icon: 'success',
                  title: 'Mail envoyé !',
                  showConfirmButton: false,
                  timer: 1500
                });
              })

        })
      }else{
        Swal.fire({
          icon: 'error',
          title: "Connexion",
          html: '<p>Votre mail n\'est pas dans la base.</p>',
          showConfirmButton: true,
        })
      }
    })

  
    e.preventDefault();
  }

  render() {
    return (

      <div class="body" >            
        <div className="container padding-bottom-3x mb-2 mt-5">
          <div className="row justify-content-center">
            <div className="d-flex justify-content-center">
                <img className="img-fluid " src={process.env.PUBLIC_URL + 'assets/img/password.png'} alt="password" width="50%" />
            </div>
            <div className="col-lg-8 col-md-10 mt-5">              
              <h5 className="d-flex justify-content-center">Mot de passe oublié ?</h5>
              <br />              
              <form className="card mt-4">
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="email-for-pass">Entrez votre adresse Email</label>
                    <input className="form-control" onChange={this.changeMailForgot} value={this.state.mailForgot} type="mail" id="email-for-pass" required /><small className="form-text text-muted">Saisissez l'adresse e-mail que vous avez utilisée lors de votre inscription à SWAP. Ensuite. Utilisez le lien reçu pour réinitialiser votre mot de passe.</small>
                  </div>
                </div>
                <div className="card-footer ">
                  <button className="login100-form-btn2" onClick={this.sendMail} type="submit">Reinitialiser</button>&emsp;
                  &nbsp;
                  <Link to={process.env.PUBLIC_URL + "/"}><button class="login100-form-btn2" type="submit">Retour a l'accueil</button> </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <p className="d-flex justify-content-center pt-5 ">SWAP - 2020 Tous droits réservés</p>        
      </div>
    );
  }
}


