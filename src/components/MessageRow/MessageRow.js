import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import { SRLWrapper } from 'simple-react-lightbox'



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
        const options = {
            // options Lightbox
            thumbnails: {
              showThumbnails: false,
              
            },
            buttons: {
                backgroundColor: 'rgba(30,30,36,0.8)',
                iconColor: 'rgba(255, 255, 255, 0.8)',
                iconPadding: '5px',
                showAutoplayButton: false,
                showCloseButton: true,
                showDownloadButton: true,
                showFullscreenButton: true,
                showNextButton: false,
                showPrevButton: false,
                size: '40px'
              }
        }
        return (
            <tr style={{display: this.state.supprimerLaLigne}}>
                <td>{this.state.nom}</td>
                <td>{this.state.prenom}</td>
                <td>{this.state.categorie}</td>
                <td>{this.state.message}</td>
                <td><SRLWrapper options={options}><img className="image-contact" src={"http://localhost:8000/uploads/contacts/" + this.state.photo} data-attribute="SRL" alt="Piece-jointe" /></SRLWrapper></td>
                <td>
                    <a href={"#" + this.state.modalNameDelete} className="delete" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Supprimer">delete</i>
                    </a>
                </td>
                

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