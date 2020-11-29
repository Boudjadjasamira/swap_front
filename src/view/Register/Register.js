import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/login.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import ReactPasswordStrength from 'react-password-strength';
import './Register.css';

export default class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            pseudo: "",
            mail: "",
            password: "",
            redirection: false,
            isWoman: false,
            nom: "",
            prenom: "",
            confirmPassword: ""
        };
        this.addUser = this.addUser.bind(this);
        this.changePseudo = this.changePseudo.bind(this);
        this.changeMail = this.changeMail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeSexe = this.changeSexe.bind(this);
        this.changeNom = this.changeNom.bind(this);
        this.changePrenom = this.changePrenom.bind(this);
        this.changeConfirmPassword = this.changeConfirmPassword.bind(this);

    }

    componentDidMount(){
        document.title = "Inscription"; 
    }

    changePseudo(e){
        this.setState({pseudo: e.target.value});
    }

    changeSexe(e){
        this.setState({isWoman: Boolean(Number(e.target.value))});
    }

    changeMail(e){
        this.setState({mail: e.target.value});
    }

    changePassword(e){
        this.setState({password: e.password.toString()})
    }

    changeConfirmPassword(e){
        this.setState({confirmPassword: e.password.toString()})
    }

    changeNom(e){
        this.setState({nom: e.target.value});
    }

    changePrenom(e){
        this.setState({prenom: e.target.value});
    }

    addUser(){

        

        //verification du mot de passe$
        if(this.state.password == this.state.confirmPassword){
            const d = new Date();
            const laDate = ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2) + '/' + d.getFullYear();
    
            Swal.fire({
                title: "Création de votre compte en cours...",
                html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
                showConfirmButton: false,
                allowOutsideClick: false
            });
    
            var photoRegisterBase = "avatar.png";
            if(this.state.isWoman == 1){
                photoRegisterBase = "avatar_man.png";
            }
             /* eslint eqeqeq: 0 */  
            //Ajout dans la base
            axios.post("http://149.91.89.142:8000/api/users",  {
                pseudo: this.state.pseudo,
                nom: this.state.nom,
                prenom: this.state.prenom,
                mail: this.state.mail,
                motDePasse: this.state.password,
                dateInscription: laDate.toString(),
                photo: photoRegisterBase.toString(),
                sexe: this.state.isWoman,
                actif: true
            })
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'Votre compte est bien créé!',
                    showConfirmButton: false,
                    timer: 2500,
                    allowOutsideClick: false
                });
                    
                localStorage.setItem('connected', "1")
                localStorage.setItem('ID', res.data.id)
                this.setState({redirection: true})
            
                //reset les champs
                this.setState({
                    pseudo: "",
                    nom: "",
                    prenom: "",
                    mail: "",
                    password: ""
                });
            })
        }else{
            Swal.fire({
                icon: 'info',
                title: 'Les mots de passe que vous avez entrés ne sont pas identiques.',
                showConfirmButton: false,
                timer: 2500,
                allowOutsideClick: false
            });
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
                        <div className="wrap-login100 ">
                            <div className="login100-pic">
                                <img class="img-fluid " src="assets/img/img2.png" alt="IMG" />
                            </div>
                            <div className="login100-form validate-form">
                                <Tilt><Link className="cursorPointer" to={process.env.PUBLIC_URL + "/"}><img className="img-fluid cursorPointer" src="assets/img/logo.png" alt="logo" /></Link></Tilt>

                                <div className="wrap-input100 validate-input" data-validate="Pseudo is required">
                                    <input className="input100" type="text" placeholder="Pseudo" value={this.state.pseudo} onChange={this.changePseudo}/>
                                </div>
                                <br />
                                <div className="wrap-input100 validate-input" data-validate="FirstName is required">
                                    <input className="input100" type="text" placeholder="Nom" value={this.state.changeNom} onChange={this.changeNom}/>
                                </div>
                                <br />
                                <div className="wrap-input100 validate-input" data-validate="Name is required">
                                    <input className="input100" type="text" placeholder="Prenom" value={this.state.changePrenom} onChange={this.changePrenom}/>
                                </div>
                                <br />
                                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                    <input className="input100" type="mail" placeholder="E-mail" value={this.state.mail} onChange={this.changeMail}/>
                                </div>
                                <br />
                                <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <ReactPasswordStrength changeCallback={this.changePassword} style={{border: "none"}} minLength={5} minScore={2} tooShortWord={"Faible"} scoreWords={['Faible', 'Presque sur', 'Sur', 'Fort', 'Très fort']} inputProps={{ placeholder:"             Mot de passe", autoComplete: "off", className: "input100" }}>
                                </ReactPasswordStrength>
                                </div>
                                <br />
                                <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <ReactPasswordStrength changeCallback={this.changeConfirmPassword} style={{border: "none"}} minLength={5} minScore={2} tooShortWord={"Faible"} scoreWords={['Faible', 'Presque sur', 'Sur', 'Fort', 'Très fort']} inputProps={{ placeholder:"             Confirmation de mot de passe", autoComplete: "off", className: "input100" }}>
                                </ReactPasswordStrength>
                                </div>
                                <br />
                                <div className="wrap-input100 validate-input">
                                    <div className="container ml-5" onChange={this.changeSexe}>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" value="1"/>
                                            <label className="form-check-label" htmlFor="inlineRadio1">
                                                Homme
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" value="0"/>
                                            <label className="form-check-label" htmlFor="inlineRadio2">
                                                Femme
                                            </label>
                                        </div>
                                    </div>
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
