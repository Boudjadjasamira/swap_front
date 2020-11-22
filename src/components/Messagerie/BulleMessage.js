import React, { Component } from 'react';
import axios from 'axios';

export default class BulleMessage extends Component {

    constructor(props){
        super(props);
        this.state = {
            nom: "",
            prenom: "",
            photoProfil: "",
            dateMessage: this.props.dateTime
        }
    }

    componentDidMount(){
        let yearAnnonce = this.state.dateMessage.split('-')[0];
        let mois = this.state.dateMessage.split('-')[1];
        let jours = this.state.dateMessage.split('-')[2].split('T')[0];
                
        this.setState({dateMessage: jours+"/"+mois+"/"+yearAnnonce});

        //Recuperation de l'avatar + nom + prenom
        axios.get('http://localhost:8000/api/users/' + this.props.idProfil)
        .then(res => {
            this.setState({
                photoProfil: res.data['photo'],
                nom: res.data['nom'],
                prenom: res.data['prenom']
            })
        });
    }

    render() {
        return (
            <div> 
                {this.props.idProfil != localStorage.getItem('ID') ? 
                    <div className="message info">
                        <img alt={this.state.photo} className="img-circle medium-image" src={"http://localhost:8000/uploads/avatars/" + this.state.photoProfil}/>
                            <div className="message-body">
                                <div className="message-info">
                                    <h4> {this.state.nom} {this.state.prenom} </h4>
                                    <h5><i className="fa fa-clock-o" />{this.state.dateMessage}</h5>
                                </div>
                                <hr/>
                                <div className="message-text">
                                    {this.props.message}
                                </div>
                            </div>
                        <br />
                    </div>
                :
                    <div className="message my-message">
                        <img alt={this.props.photoMoi} className="img-circle medium-image" src={"http://localhost:8000/uploads/avatars/" + this.props.photoMoi}/>
                        <div className="message-body">
                            <div className="message-body-inner">
                                <div className="message-info">
                                    <h4> {this.props.nomMoi} {this.props.prenomMoi} </h4>
                                    <h5><i className="fa fa-clock-o" />{this.state.dateMessage}</h5>
                                </div>
                                <hr />
                                <div className="message-text">
                                    {this.props.message}
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                }
            </div>
        )
    }
};