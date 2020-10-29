import React, { Component } from 'react';
import axios from 'axios';


export default class MessageRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
          allContact: [],
        }
      
    
     
    
        //on recupere les messages 
            axios.get(`http://localhost:8000/api/contacts/` + this.props.idContact)
            .then(res =>
                this.setState({
                  nom: res.data.nom,
                  prenom: res.data.prenom,
                  categorie: res.data.categorie,
                  message: res.data.message,
                  photo: res.data.photo
                })
            )

      }

    render() {
        return (
            
                                    <tbody>
                                        <tr>
                                        <td>{this.state.nom}</td>
                                        <td>{this.state.prenom}</td>
                                        <td>{this.state.categorie}</td>
                                        <td>{this.state.message}</td>
                                        <td><img
                            className="image-contact"
                            src={"http://localhost:8000/uploads/contacts/" + this.state.photo}
                            alt="imageContact"
                            /></td>
                                        <td>
                                            <a
                                            href="#editEmployeeModal"
                                            className="edit"
                                            data-toggle="modal"
                                            >
                                            <i
                                                className="material-icons"
                                                data-toggle="tooltip"
                                                title="Répondre"
                                            >
                                                
                                            </i>
                                            </a>
                                            <a
                                            href="#deleteEmployeeModal"
                                            className="delete"
                                            data-toggle="modal"
                                            >
                                            <i
                                                className="material-icons"
                                                data-toggle="tooltip"
                                                title="Supprimer"
                                            >
                                                
                                            </i>
                                            </a>
                                        </td>
                                        </tr>
                                        </tbody>
                                  
                    
        
 


         )
        }
        
         
};