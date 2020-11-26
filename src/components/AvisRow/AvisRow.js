import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';



export default class AvisRow extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            allAvis : [],
            IdUser: "",
            avis: "",
            dateAvis: "",
            note: true,
            idAvis:0, 
            modalSupprimer:"",
            modalEditer:"", 
            supprimerLaLigne: "display:block",
            nouvelleAvis:"", 
        }
        this.deleteAvis = this.deleteAvis.bind(this);
        this.EditAvis = this.editAvis.bind(this);
        this.updateAvis = this.updateAvis.bind(this);
    }
      
    
    componentDidMount(){
        axios.get(`http://localhost:8000/api/Avis/`+ this.props.idAvis)
        .then(res =>
            this.setState({
              idUserEnvoi: res.data.pseudo,
              avis: res.data.avis,
              dateAvis: res.data.dateAvis,
              note: res.data.note,
              modalSupprimer: "deleteModal" + this.props.idAvis,
              modalEditer: "editerModal" + this.props.idAvis,
              idAvis:res.data.id
            })
            
        )

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

    deleteAvis(){
        axios.delete('http://localhost:8000/api/avis/' + this.state.idAvis)
        .then((res => 
            this.setState({
                supprimerLaLigne: "none"
            })  
        ))
        let compteur = ($("#nombreAvis").text() * 1) - 1;
        $("#nombreAvis").text(compteur.toString());
    }

    updateAvis(e){
        this.setState({nouvelleAvis: e.target.value})
    }

    editAvis(){
        axios.patch('http://localhost:8000/api/avis/' + this.props.idAvis, {
            avis: this.state.nouvelleAvis
        },{
            headers: {
                'Content-Type': 'application/merge-patch+json'
            }
        }
        ).then(res => console.log(res));
        this.setState({avis: this.state.nouvelleAvis})
    }


    
    render() {

        return (
            <tr style={{display: this.state.supprimerLaLigne}}>
                <td>{this.state.pseudo}</td>
                <td>{this.props.dateAvis}</td>
                <td>{this.props.note}</td>
                <td>{this.props.avis}</td>
                <td>
                    <a href={"#" + this.state.modalEditer} className="edit" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Editer">create</i>
                    </a>
                    <a href={"#" + this.state.modalSupprimer} className="delete" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Supprimer">delete</i>
                    </a>
                </td>
                
                {/* MODAL EDIT */}
                <div id={this.state.modalEditer} className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Moderer Avis</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Avis</label>
                                    <textarea className="form-control" onChange={this.updateAvis} value={this.state.nouvelleAvis} required defaultValue={""} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Annuler"/>
                                <input type="submit" className="btn btn-info" onClick={this.editAvis} defaultValue="Sauvegarder" />
                            </div>           
                        </div>
                    </div>
                </div>

                {/* MODAL DELETE */}
                <div id={this.state.modalSupprimer} className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Supprimer l'avis</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <p>Etes-vous sur ? Cette action est irréversible !</p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal"  defaultValue="Annuler"/>
                                <button className="btn btn-warning" data-dismiss="modal" onClick={this.deleteAvis}>Supprimer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </tr>
        )
    }    
};