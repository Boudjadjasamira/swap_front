import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/login.css';
import { Link } from 'react-router-dom';

export default class ForgotPassword extends Component {
 

  componentDidMount(){
    document.title = "Mot de passe oublié "
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
                    <input className="form-control" type="text" id="email-for-pass" required /><small className="form-text text-muted">Saisissez l'adresse e-mail que vous avez utilisée lors de votre inscription à SWAP. Ensuite, nous vous enverrons un code temporaire par e-mail. Utilisez le code pour changer votre mot de passe.</small>
                  </div>
                </div>
                <div className="card-footer ">
                  <button className="login100-form-btn2" type="submit">Reinitialiser</button>&emsp;
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


