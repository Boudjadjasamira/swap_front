import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/login.css';

import Swal from 'sweetalert2';

import axios from 'axios';
import { Redirect } from 'react-router-dom';


export default class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            pseudo: "",
            mail: "",
            password: "",
            redirection: false
        };
        this.addUser = this.addUser.bind(this);
        this.changePseudo = this.changePseudo.bind(this);
        this.changeMail = this.changeMail.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    componentDidMount(){
        document.title = "Inscription"; 
    }

    changePseudo(e){
        this.setState({pseudo: e.target.value});
    }

    changeMail(e){
        this.setState({mail: e.target.value});
    }

    changePassword(e){
        this.setState({password: e.target.value});
    }

    addUser(){

        Swal.fire({
            title: "Ajout dans notre base de donnée",
            html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
            showConfirmButton: false,
        });

        //Ajout dans la base
        axios.post("http://localhost:8000/api/users",  {
            pseudo: this.state.pseudo,
            mail: this.state.mail,
            motDePasse: this.state.password
        })
        .then(res => {
            Swal.fire({
                icon: 'success',
                title: 'Votre compte est bien créé.',
                showConfirmButton: false,
                timer: 2500
            });
                
            localStorage.setItem('connected', "1")
            localStorage.setItem('ID', res.data.id)
            this.setState({redirection: true})
        
            //reset les champs
            this.setState({
                pseudo: "",
                mail: "",
                password: ""
            });
        })
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
                            <div className="login100-pic js-tilt">
                                <img class="img-fluid" src="assets/img/img2.png" alt="IMG" />
                            </div>
                            <div className="login100-form validate-form">
                                <img class="img-fluid" src="assets/img/logo.png" alt="logo" />
                                <br />
                                <br />
                                <div className="wrap-input100 validate-input" data-validate="Pseudo is required">
                                    <input className="input100" type="text" placeholder="Pseudo" value={this.state.pseudo} onChange={this.changePseudo}/>
                                </div>
                                <br />
                                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                    <input className="input100" type="mail" placeholder="E-mail" value={this.state.mail} onChange={this.changeMail}/>
                                </div>
                                <br />
                                <div className="wrap-input100 validate-input" data-validate="Password is required">
                                    <input className="input100" type="password"  placeholder="Password" value={this.state.password} onChange={this.changePassword} />
                                </div>
                                <br />
                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn" onClick={this.addUser}>S'inscrire</button>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}
