import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default class UserRowMember extends Component {

    constructor(props){
        super(props);

        this.state = {
            idMembre: 0,
            modalDisabled: "",
            actifUser: false,
            labelIsActif: "Désactiver",
            modalEdite: "",
            newPseudoPersonne: "",
            changeMailPersonne: "",
            pseudoDeBase: this.props.pseudoPersonne,
            mailDeBase: this.props.mailPersonne
        }
        this.desactivePersonne = this.desactivePersonne.bind(this);
        this.editPersonne = this.editPersonne.bind(this);

        this.changePseudoPersonne = this.changePseudoPersonne.bind(this);
        this.changeMailPersonne = this.changeMailPersonne.bind(this);
    }

    componentDidMount(){
        this.setState({
            idMembre: this.props.idPersonne,
            modalDisabled: "disabledUserModel" + this.props.idPersonne,
            modalEdite: "enabledUserModel" + this.props.idPersonne
        }); 
        /* eslint eqeqeq: 0 */
        axios.get('http://51.68.44.146:8000/api/users/' + this.props.idPersonne)
        .then(res => {
            this.setState({actifUser: res.data.actif})
            if(res.data.actif == false){
                this.setState({labelIsActif: "Activer"})
            }
        })
    }

    changePseudoPersonne(e){
        this.setState({newPseudoPersonne: e.target.value});
    }

    changeMailPersonne(e){
        this.setState({newMailPersonne: e.target.value})
    }

    desactivePersonne(){
        let activerPersonne = true;

        if(this.state.labelIsActif == "Désactiver"){
            activerPersonne = false;
            this.setState({labelIsActif: "Activer"})
        }else{
            this.setState({labelIsActif: "Désactiver"})
        }

        axios.patch('http://51.68.44.146:8000/api/users/' + this.state.idMembre, {
            actif: activerPersonne
        }, { headers: {
            "Content-type":"application/merge-patch+json"
        }}).then(res => {
            console.log(res.data);
        })

        Swal.fire({
            icon: 'success',
            title: "Modification effectuée",
            html: '<p>La personne est '+ this.state.labelIsActif+ '</p>',
            showConfirmButton: true,
        });
    }

    editPersonne(){
        Swal.fire({
            icon: 'information',
            title: "Modification en cours...",
            allowOutsideClick: false,
            showConfirmButton: true,
        });

        axios.patch('http://51.68.44.146:8000/api/users/' + this.state.idMembre, {
            pseudo: this.state.newPseudoPersonne,
            mail: this.state.newMailPersonne
        }, { headers: {
            "Content-type":"application/merge-patch+json"
        }}).then(res => {
            this.setState({pseudoDeBase: this.state.newPseudoPersonne,mailDeBase: this.state.newMailPersonne})
        })

        Swal.fire({
            icon: 'success',
            title: "Modification effectuée",
            showConfirmButton: true,
        });
    }

    render(){
        return (
            <tr>
                <td>{this.state.pseudoDeBase}</td>
                <td>{this.state.mailDeBase}</td>
                <td>                                        
                    <div className="center">
                        <input type="checkbox" name />
                    </div>
                </td>
                <td>
                    <a href={"#" + this.state.modalEdite} className="edit" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Edit"></i>Editer
                    </a>
                    <a href={"#" + this.state.modalDisabled} className="edit" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Edit"></i>{this.state.labelIsActif}
                    </a>
                </td>


                {/* EDITER UNE PERSONNE */}
                <div id={this.state.modalEdite} className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Mettre à jour les informations</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Pseudo</label>
                                    <input type="text" className="form-control" value={this.state.newPseudoPersonne} onChange={this.changePseudoPersonne} required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" value={this.state.newMailPersonne} onChange={this.changeMailPersonne} required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Annuler"/>
                                <input type="submit" className="btn btn-info" data-dismiss="modal" onClick={this.editPersonne} defaultValue="Sauvegarder" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* DESACTIVER UNE PERSONNE */}
                <div id={this.state.modalDisabled} className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Desactiver de {this.props.nomPersonne} {this.props.prenomPersonne} - {this.props.mailPersonne}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <p>Etes-vous sur ? </p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Annuler"/>
                                <input type="submit" className="btn btn-danger" data-dismiss="modal" onClick={this.desactivePersonne} defaultValue="Supprimer"/>
                            </div>
                        </div>
                    </div>
                </div>

            </tr>
        );
    }
}