import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

export default class MessageRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
          nom: "",
          prenom: "",
          categorie: "",
          message: "",
          photo: "",
          idContact: 0,
          modalNameDelete: "",
          supprimerLaLigne: "display:block"
        }
        this.deleteContact = this.deleteContact.bind(this);
    }
      
    componentDidMount(){
        axios.get(`http://localhost:8000/api/contacts/` + this.props.idContact)
        .then(res =>
            this.setState({
              nom: res.data.nom,
              prenom: res.data.prenom,
              categorie: res.data.categorie,
              message: res.data.message,
              photo: res.data.photo,
              idContact: this.props.idContact,
              modalNameDelete: "deleteModel" + this.props.idContact
            })
        )
    }

    deleteContact(){
        axios.delete('http://localhost:8000/api/contacts/' + this.state.idContact)
        .then((res => 
            this.setState({
                supprimerLaLigne: "none"
            })  
        ))
        let compteur = ($("#nombreMessagesContacts").text() * 1) - 1;
        $("#nombreMessagesContacts").text(compteur.toString());
    }
    
    render() {
        return (
            <tr style={{display: this.state.supprimerLaLigne}}>
                <td>{this.state.nom}</td>
                <td>{this.state.prenom}</td>
                <td>{this.state.categorie}</td>
                <td>{this.state.message}</td>
                <td><img className="image-contact" src={"http://localhost:8000/uploads/contacts/" + this.state.photo} alt="imageContact" /></td>
                <td>
                    <a href="#editEmployeeModal" className="edit" data-toggle="modal" >
<<<<<<< HEAD
<<<<<<< HEAD
                        <i className="material-icons" data-toggle="tooltip" title="Répondre"></i>create
                    </a>
                    <a href={"#" + this.state.modalNameDelete} className="delete" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Supprimer"></i>delete
=======
                        <i className="material-icons" data-toggle="tooltip" title="Répondre">create</i> 
                    </a>
                    <a href={"#" + this.state.modalNameDelete} className="delete" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Supprimer">delete</i>
>>>>>>> 9d7603d1f0249a09a24ee9a3649dfdc2ce3534ea
=======
                        <i className="material-icons" data-toggle="tooltip" title="Répondre">create</i> 
                    </a>
                    <a href={"#" + this.state.modalNameDelete} className="delete" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Supprimer">delete</i>
>>>>>>> 9d7603d1f0249a09a24ee9a3649dfdc2ce3534ea
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
                                    <label>Pseudo</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
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
                                <button className="btn btn-warning" data-dismiss="modal" onClick={this.deleteContact}>Supprimer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </tr>
        )
    }    
};