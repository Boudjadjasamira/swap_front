import React, { Component } from 'react';
import axios from 'axios';

export default class BulleMessage extends Component {

    constructor(props){
        super(props);
        this.state = {
            nom: "",
            prenom: "",
            photoProfil: "",
            dateMessage: this.props.dateTime,
            idMessage: this.props.idMessage,
            isVisible: true
        }
        this.deleteMyMessage = this.deleteMyMessage.bind(this);
    }

    componentDidMount(){
        let yearAnnonce = this.state.dateMessage.split('-')[0];
        let mois = this.state.dateMessage.split('-')[1];
        let jours = this.state.dateMessage.split('-')[2].split('T')[0];
                
        this.setState({dateMessage: jours+"/"+mois+"/"+yearAnnonce});

        //Recuperation de l'avatar + nom + prenom
        axios.get('http://149.91.89.142:8000/api/users/' + this.props.idProfil)
        .then(res => {
            this.setState({
                photoProfil: res.data['photo'],
                nom: res.data['nom'],
                prenom: res.data['prenom']
            })
        });
    }

    deleteMyMessage(){
        axios.delete('http://149.91.89.142:8000/api/messageries/' + this.state.idMessage)
        .then(res => {
            this.setState({isVisible: false})
        })
    }
    
    render() {
        return (
            <div> 
                {this.props.idProfil != localStorage.getItem('ID') ? 
                    <div className="message info">
                        <img alt={this.state.photo} className="img-circle medium-image" src={"http://149.91.89.142:8000/uploads/avatars/" + this.state.photoProfil}/>
                            <div className="message-body">
                                <div className="message-info">
                                    <h5 style={{paddingLeft:'16px'}}><i className="fa fa-clock-o" />{this.state.dateMessage}</h5>
                                    <h5 style={{paddingLeft:'10px'}}> {this.state.nom} {this.state.prenom} </h5>
                                </div>
                                <hr/>
                                <div className="message-text">
                                    {this.props.message}
                                </div>
                            </div>
                        <br />
                    </div>
                :
                    <div>  
                        {this.state.isVisible ? 
                        <div className="message my-message">
                            <img alt={this.props.photoMoi} className="img-circle medium-image" src={"http://149.91.89.142:8000/uploads/avatars/" + this.props.photoMoi}/>
                            <div className="message-body">
                                <div className="message-body-inner">
                                    <div className="message-info">
                                        <h5 style={{paddingRight:'10px'}}> {this.props.nomMoi} {this.props.prenomMoi} </h5>
                                        <h5 style={{paddingRight:'16px'}}><i className="fa fa-clock-o" />{this.state.dateMessage}</h5>
                                    </div>
                                    <hr />
                                    <div className="message-text">
                                        {this.props.message}
                                    </div>
                                    <i onClick={this.deleteMyMessage} className="material-icons" data-toggle="tooltip" title="Supprimer" style={{cursor:'pointer',fontSize:'20px', paddingLeft:'6px'}}>delete</i>
                                </div>
                            </div>
                            <br />
                        </div>
                        :null
                        }
                    </div>
                }
            </div>
        )
    }
};