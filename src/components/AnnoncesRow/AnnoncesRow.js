import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

export default class AnnoncesRow extends Component {

    constructor(props){
        super(props);
        this.state = {
            pseudo: "",
            nomCategorie: "",
            description: "",
            modalSupprimer: "",
            modalEditer: "",
            idAnnonce: 0,
            supprimerLaLigne: "display:block",
            nouvelleDescription: ""
        };
        this.deleteAnnonces = this.deleteAnnonces.bind(this);
        this.nouvelleDescriptionChange = this.nouvelleDescriptionChange.bind(this);
        this.updateAnnonces = this.updateAnnonces.bind(this);
    }

    componentDidMount(){

        var idCategorie = 0;
    
        axios.get('http://localhost:8000/api/annonces/' + this.props.idAnnonces)
        .then(res => {
            this.setState({
                pseudo: res.data['pseudo'],
                description: res.data['description'],
                modalSupprimer: "deleteModal" + this.props.idAnnonces,
                modalEditer: "editerModal" + this.props.idAnnonces,
                idAnnonce: res.data['id']
            });
            idCategorie = res.data['idCategorie'];
        })

        axios.get('http://localhost:8000/api/categories')
        .then(res => {
            res.data['hydra:member'].map(e => {
                if(e.id == idCategorie){
                    this.setState({nomCategorie: e.titre})
                }
                return true
            })
        })

        axios.get('http://localhost:8000/api/users')
        .then(res => {
            res.data['hydra:member'].map(e => {
                if(e.id == this.props.idUserEnvoi){
                    this.setState({pseudo: e.pseudo})
                }
                return true
            })
        })

    }

    deleteAnnonces(){
        axios.delete('http://localhost:8000/api/annonces/' + this.state.idAnnonce)
        .then((res => 
            this.setState({
                supprimerLaLigne: "none"
            })  
        ));

        let compteur = ($("#nombresAnnoncesTotal").text() * 1) - 1;
        $("#nombresAnnoncesTotal").text(compteur.toString());

    }

    nouvelleDescriptionChange(e){
        this.setState({nouvelleDescription: e.target.value})
    }

    updateAnnonces(){
        axios.patch('http://localhost:8000/api/annonces/' + this.props.idAnnonces, {
            description: this.state.nouvelleDescription
        },{
            headers: {
                'Content-Type': 'application/merge-patch+json'
            }
        }
        ).then(res => console.log(res));
        this.setState({description: this.state.nouvelleDescription})
    }

    render() {
        return (
            <tr style={{display: this.state.supprimerLaLigne}}>
                <td>{this.state.pseudo}</td>
                <td>{this.state.nomCategorie}</td>
                <td>{this.state.description}</td>
                <td>
                    <a href={"#" + this.state.modalEditer} className="edit" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Moderer">create</i>
                    </a>
                    <a href={"#" + this.state.modalSupprimer} className="delete" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Supprimer">delete</i>
                    </a>
                </td>

                {/* MODAL EDIT*/}
                <div id={this.state.modalEditer} className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">      
                            <div className="modal-header">
                                <h4 className="modal-title">Moderer annonce</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Annonce</label>
                                    <textarea className="form-control" onChange={this.nouvelleDescriptionChange} value={this.state.nouvelleDescription} required defaultValue={""} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Annuler"/>
                                <input type="submit" className="btn btn-info" data-dismiss="modal" onClick={this.updateAnnonces} defaultValue="Save" />
                            </div>                   
                        </div>
                    </div>
                </div>

                {/* MODAL DELETE */}
                <div id={this.state.modalSupprimer} className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">  
                            <div className="modal-header">
                                <h4 className="modal-title">Supprimer l'annonce</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <p>Etes-vous sur ? Cette action est irréversible !</p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Annuler"/>
                                <input type="submit" className="btn btn-danger" data-dismiss="modal" onClick={this.deleteAnnonces} defaultValue="Supprimer"/>
                            </div>           
                        </div>
                    </div>
                </div>

            </tr>
        )
    }    
};