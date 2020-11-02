import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import CardDashboard from '../../components/CardDashboard/CardDashboard';
import UserRowMember from '../../components/UserRowMember/UserRowMember';
import axios from 'axios';
import Swal from 'sweetalert2';


export default class Membres extends Component {

    constructor(props){
        super(props);
        this.state = {
            allMembers : [],
            pseudoPersonne: "",
            mailPersonne: "",
            passwordProvisoire: ""
        }
        this.changePseudoPersonne = this.changePseudoPersonne.bind(this);        
        this.changeMailPersonne = this.changeMailPersonne.bind(this);
        this.changePasswordPersonne = this.changePasswordPersonne.bind(this);
        this.changeSexe = this.changeSexe.bind(this);
        this.addPersonne = this.addPersonne.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/users')
        .then( res => {
            this.setState({allMembers: res.data['hydra:member']});
        });
    }

    changeMailPersonne(e){
        this.setState({mailPersonne: e.target.value});
    }

    changePseudoPersonne(e){
        this.setState({pseudoPersonne: e.target.value});
    }

    changePasswordPersonne(e){
        this.setState({passwordProvisoire: e.target.value});
    }

    changeSexe(e){
        this.setState({sexePersonne: Boolean(Number(e.target.value))});
    }

    addPersonne(){
        const d = new Date();
        const laDate = ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2) + '/' + d.getFullYear();

        Swal.fire({
            title: "Ajout dans notre base de donnée",
            html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
            showConfirmButton: false,
            allowOutsideClick: false
        });

        var photoRegisterBase = "avatar.png";
        if(this.state.sexePersonne == 1){
            photoRegisterBase = "avatar_man.png";
        }

        //Ajout dans la base
        axios.post("http://localhost:8000/api/users",  {
            pseudo: this.state.pseudoPersonne,
            mail: this.state.mailPersonne,
            motDePasse: this.state.passwordProvisoire,
            dateInscription: laDate.toString(),
            photo: photoRegisterBase.toString(),
            sexe: this.state.sexePersonne,
            actif: true
        })
        .then(res => {
            Swal.fire({
                icon: 'success',
                title: 'Le compte est bien créé.',
                showConfirmButton: false,
                timer: 2500,
                allowOutsideClick: false
            });
                
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
        <div className="body" id="bodyHome">
            <CardDashboard></CardDashboard>
            <div className="container-fluid">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>GESTION MEMBRES</h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addEmployeeModal" className="btn btn-secondary" data-toggle="modal">
                                        <i className="material-icons"></i>
                                        <span>Ajouter un membre</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Pseudo</th>
                                    <th>Email</th>
                                    <th>Certifié</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.allMembers.map(e => (
                                    <UserRowMember pseudoPersonne={e.pseudo} mailPersonne={e.mail} idPersonne={e.id}></UserRowMember>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>   
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                    <p className="h6">SWAP - 2020 Tous droits réservés</p>
                </div>
            </div>

            {/* AJOUTER UNE PERSONNE */}
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Ajouter un membre</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Pseudo</label>
                                <input type="text" className="form-control" value={this.state.pseudoPersonne} onChange={this.changePseudoPersonne} required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" value={this.state.mailPersonne} onChange={this.changeMailPersonne} required />
                            </div>
                            <div className="form-group">
                                <label>Mot de passe provisoire</label>
                                <input className="form-control" required value={this.state.passwordProvisoire} onChange={this.changePasswordPersonne} />
                            </div>
                            <div className="form-group">
                                <label>Sexe</label>
                                <div onChange={this.changeSexe}>
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" value="1"/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">
                                        Homme
                                    </label>
                                    <br></br>
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" value="0"/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">
                                        Femme
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Annuler"/>
                            <input type="submit" className="btn btn-success" data-dismiss="modal" onClick={this.addPersonne} defaultValue="Add"/>
                        </div>  
                    </div>
                </div>
            </div>

        </div>
        );
    }
}