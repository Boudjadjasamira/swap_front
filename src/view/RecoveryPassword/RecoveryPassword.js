import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import { Link } from 'react-router-dom';


export default class RecoveryPassword extends Component {    

    render() {
        return (
         
            <div class="body" >            
                <div className="container padding-bottom-3x mb-2 mt-5">
                    <div className="row justify-content-center">
                        <div className="d-flex justify-content-center">
                            <img className="img-fluid " src={process.env.PUBLIC_URL + 'assets/img/password.png'} alt="password" width="50%" />
                        </div>
                        <div className="col-lg-8 col-md-10 mt-5">              
                            <form className="card mt-4">
                                <div className="card-body">
                                    <div className="form-group">
                                        <label>Entrez votre nouveau mot de passe</label>
                                            <input className="form-control"  type="password" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Confirmez votre mot de passe</label>
                                            <input className="form-control" type="password" required />
                                    </div>
                                </div>
                                    <div className="card-footer ">
                                        <button className="login100-form-btn2" type="submit">Reinitialiser</button>&emsp;&nbsp;                                
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