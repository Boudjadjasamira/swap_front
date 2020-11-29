import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

export default class RecoveryPassword extends Component {    

    constructor(props){
        super(props);
        this.state = {
            idUser: 0,
            passwordFirst: "",
            passwordConf: "",
            isRedirect: false
        }

        this.changePasswordFirst = this.changePasswordFirst.bind(this);
        this.changePasswordConf = this.changePasswordConf.bind(this);
        this.changePasswordOK = this.changePasswordOK.bind(this);
    }

    changePasswordFirst(e){
        this.setState({passwordFirst: e.target.value});
    }

    changePasswordConf(e){
        this.setState({passwordConf: e.target.value});
    }

    changePasswordOK(e){
        e.preventDefault();

        //verification des mots
        if(this.state.passwordConf == this.state.passwordFirst){
            axios.patch('http://149.91.89.142:8000/api/users/' + this.state.idUser, {
                tokenGenPasswordRecovery: null,
                motDePasse: this.state.passwordConf
            }, {
                headers: {
                    'Content-Type': 'application/merge-patch+json'
                }
            }).then(res =>{
                this.setState({isRedirect: true});
            })
        }else{
            Swal.fire({
                icon: 'error',
                title: "Informations",
                html: '<p>Les mots de passe ne correspondent pas.</p>',
                showConfirmButton: true,
              })
        }
    }

    componentDidMount(){
        const recupCleToken = window.location.pathname.toString().split('-')[1];

        //recuperation de l'id user en fonction du token
        axios.get('http://149.91.89.142:8000/api/users')
        .then(res => {
            res.data['hydra:member'].map(e => {
                if(e.tokenGenPasswordRecovery == recupCleToken){
                    this.setState({idUser: e.id});
                }
            });
        })
    }

    render() {
        return (
            <div class="body" >   
                {this.state.isRedirect ? 
                    <Redirect to={process.env.PUBLIC_URL + "/Login"}></Redirect>
                :
                <div className="container padding-bottom-3x mb-2 mt-5">
                    <div className="row justify-content-center">
                        <div className="d-flex justify-content-center">
                            <img className="img-fluid " src={process.env.PUBLIC_URL + 'assets/img/password.png'} alt="password" width="50%" />
                        </div>
                        <div className="col-lg-8 col-md-10 mt-5">              
                            <form className="card mt-4" onSubmit={this.changePasswordOK}>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label>Entrez votre nouveau mot de passe</label>
                                            <input className="form-control" onChange={this.changePasswordFirst} value={this.state.passwordFirst}  type="password" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Confirmez votre mot de passe</label>
                                            <input className="form-control" onChange={this.changePasswordConf} value={this.state.passwordConf} type="password" required />
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
                }
                <p className="d-flex justify-content-center pt-5 ">SWAP - 2020 Tous droits réservés</p>        
            </div>           
        );
    }
}