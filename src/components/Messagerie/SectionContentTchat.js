import React, { Component } from 'react';
import axios from 'axios';
import BulleMessage from './BulleMessage';

export default class SectionContentTchat extends Component {

    constructor(props){
        super(props);
        this.state = {
            nom: "",
            prenom: "",
            photo: "",
            allBulleMessages: []
        }
    }

    componentDidMount(){
        let bulleMessageTemp = [];

        axios.get('http://localhost:8000/api/messageries')
        .then(res => {
            res.data['hydra:member'].map(e => {
                if(e.idSalon == this.props.idContent){
                    bulleMessageTemp.push(e);
                }
            })
            this.setState({allBulleMessages: bulleMessageTemp});

            //Recuperation de l'avatar + nom + prenom
            axios.get('http://localhost:8000/api/users/' + localStorage.getItem('ID'))
            .then(res => {
                this.setState({
                    photo: res.data['photo'],
                    nom: res.data['nom'],
                    prenom: res.data['prenom']
                })
            });
            
        });
    }

    render() {
        return (
            <div> 
               <div className="tab-pane message-body" id={"inbox-message-" + this.props.idContent}>
                                    
                    <div className="message-chat">
                        <div className="chat-body">
                            {this.state.allBulleMessages.map(e => (
                                <BulleMessage photoProfil={this.state.photo} nom={this.state.nom} prenom={this.state.prenom} message={e.message} dateTime={e.dateMsg}></BulleMessage>
                            ))}
                        </div>
                                       
                        <div className="chat-footer">
                            <textarea className="send-message-text" defaultValue={""} placeholder="Répondre..." />
                            <label className="upload-file">
                                <input type="file" required />
                                <i className="fa fa-paperclip" />
                            </label>
                            <button type="button" className="send-message-button btn-danger">
                                <i className="fa fa-send" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
};