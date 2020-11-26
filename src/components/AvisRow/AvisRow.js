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
            id:""
        }
        this.deleteAvis = this.deleteAvis.bind(this);
    }
      
    
    componentDidMount(){
        axios.get(`http://localhost:8000/api/Avis/`)
        .then(res =>
            this.setState({
              idUserEnvoi: res.data.pseudo,
              avis: res.data.avis,
              dateAvis: res.data.dateAvis,
              note: res.data.note,
              modalNameDelete: "deleteAvis" + this.props.id
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
        axios.delete('http://localhost:8000/api/avis/' + this.state.id)
        .then((res => 
            this.setState({
                supprimerLaLigne: "none"
            })  
        ))
        let compteur = ($("#nombreAvis").text() * 1) - 1;
        $("#nombreAvis").text(compteur.toString());
    }


    
    render() {

        return (
            <tr style={{display: this.state.supprimerLaLigne}}>
                <td>{this.state.pseudo}</td>
                <td>{this.props.dateAvis}</td>
                <td>{this.props.note}</td>
                <td>{this.props.avis}</td>
                <td>
                    <a href="#editEmployeeModal" className="edit" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Répondre">create</i>
                    </a>
                    <a href={"#" + this.state.modalNameDelete} className="delete" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Supprimer">delete</i>
                    </a>
                </td>
                
                {/* MODAL EDIT */}
                <div id="editEmployeeModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Envoyer message</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Avis</label>
                                    <textarea className="form-control" required defaultValue={""} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel"/>
                                <input type="submit" className="btn btn-info" defaultValue="Envoyer" />
                            </div>           
                        </div>
                    </div>
                </div>

                {/* MODAL DELETE */}
                <div id={this.state.modalNameDelete} className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Supprimer le message</h4>
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