import React, { Component } from 'react';

import axios from 'axios';

export default class SectionReceptionRow extends Component {

    constructor(props){
        super(props);
        this.state = {
            compteurMessage: 0,
            photo: "",
            lastMessage: "",
            dateHeureLastMessage: "",
            nom: "",
            prenom:""
        }
    }

    componentDidMount(){
        let recupIDPseudoEnFace = 0;
        axios.get('http://localhost:8000/api/salons/' + this.props.idRow)
        .then(res => {
            if(res.data['idUser1'] == localStorage.getItem('ID')*1){
                recupIDPseudoEnFace = res.data['idUser2'];
            }else{
                recupIDPseudoEnFace = res.data['idUser1'];
            }
            
            //Recuperation de l'avatar + nom + prenom
            axios.get('http://localhost:8000/api/users/' + recupIDPseudoEnFace)
            .then(res => {
                this.setState({
                    photo: res.data['photo'],
                    nom: res.data['nom'],
                    prenom: res.data['prenom']
                })
            })

            let lastMessageTemp = "";
            let lastDateTimeTemp = "";
            let compteurMessageTemp = 0;
            //recuperation du dernier message et heure
            axios.get('http://localhost:8000/api/messageries')
            .then(res => {
                res.data['hydra:member'].map(e => {
                    if(e.idSalon == this.props.idRow){
                        lastMessageTemp = e.message;
                        lastDateTimeTemp = e.dateMsg;
                        compteurMessageTemp++;
                    }
                })
                this.setState({
                    lastMessage: lastMessageTemp,
                    dateHeureLastMessage: lastDateTimeTemp,
                    compteurMessage: compteurMessageTemp
                })
            } )

        })
    }

    render() {
        return (
            <div> 
                <li data-toggle="tab" data-target={"#inbox-message-" + this.props.idRow}>
                    <div className="message-count"> 
                         {this.state.compteurMessage}
                    </div>
                    <img alt={this.state.photo} className="img-circle medium-image" src={"http://localhost:8000/uploads/avatars/" + this.state.photo} />
                    <div className="vcentered info-combo">
                        <h3 className="no-margin-bottom name"> {this.state.nom} {this.state.prenom} </h3>
                        <h5>{this.state.lastMessage}</h5>
                    </div>
                    <div className="contacts-add">
                        <span className="message-time">{this.state.dateHeureLastMessage}</span>
                        <i className="fa fa-trash-o" />
                        <i className="fa fa-paperclip" />
                    </div>
                </li>
          </div>
        )
    }
};