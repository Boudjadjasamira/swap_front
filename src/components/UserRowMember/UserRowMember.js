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
            labelIsActif: "Désactiver"
        }
        this.desactivePersonne = this.desactivePersonne.bind(this);
    }

    componentDidMount(){
        this.setState({
            idMembre: this.props.idPersonne,
            modalDisabled: "disabledUserModel" + this.props.idPersonne
        });
        axios.get('http://localhost:8000/api/users/' + this.props.idPersonne)
        .then(res => {
            this.setState({actifUser: res.data.actif})
            if(res.data.actif == false){
                this.setState({labelIsActif: "Activer"})
            }
        })
    }

    desactivePersonne(){
        let activerPersonne = true;

        if(this.state.labelIsActif == "Désactiver"){
            activerPersonne = false;
            this.setState({labelIsActif: "Activer"})
        }else{
            this.setState({labelIsActif: "Désactiver"})
        }

        axios.patch('http://localhost:8000/api/users/' + this.state.idMembre, {
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

    render(){
        return (
            <tr>
                <td>{this.props.nomPersonne} {this.props.prenomPersonne}</td>
                <td>{this.props.mailPersonne}</td>
                <td>                                        
                    <div className="center">
                        <input type="checkbox" name />
                    </div>
                </td>
                <td>
                    <a href="#editEmployeeModal" className="edit" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Edit"></i>Editer
                    </a>
                    <a href={"#" + this.state.modalDisabled} className="edit" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Edit"></i>{this.state.labelIsActif}
                    </a>
                </td>


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