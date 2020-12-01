import React, { Component } from 'react';
import $ from 'jquery';
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
            prenom:"",
            isVisible: true,


        }
        this.deleteConversation = this.deleteConversation.bind(this);
    }

    componentDidMount(){
        let recupIDPseudoEnFace = 0;
        axios.get('http://149.91.89.142:8000/api/salons/' + this.props.idRow)
        .then(res => {
            if(res.data['idUser1'] == localStorage.getItem('ID')*1){
                recupIDPseudoEnFace = res.data['idUser2'];
            }else{
                recupIDPseudoEnFace = res.data['idUser1'];
            }
            
            //Recuperation de l'avatar + nom + prenom
            axios.get('http://149.91.89.142:8000/api/users/' + recupIDPseudoEnFace)
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
            axios.get('http://149.91.89.142:8000/api/messageries')
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
                });

                let yearAnnonce = this.state.dateHeureLastMessage.split('-')[0];
                let mois = this.state.dateHeureLastMessage.split('-')[1];
                let jours = this.state.dateHeureLastMessage.split('-')[2].split('T')[0];
                
                this.setState({dateHeureLastMessage: jours+"/"+mois+"/"+yearAnnonce});
                
            })

        })

        $("li").click(function(){
            let myThis = $(this).data('target');
            
            $('li').each(function(){
                if(myThis == $(this).data('target')){
                    $(this).addClass('active');
                    $(myThis).addClass('active');
                }else{
                    $(this).removeClass('active');
                    $($(this).data('target')).removeClass('active');
                }
            })
            
        });
    }
        
        //Suppression du salon (Conversation entiere)
        deleteConversation(){            
            axios.delete('http://149.91.89.142:8000/api/salons/' + this.props.idRow)
            .then(res => {
                this.setState({isVisible: false})
            })           

        }

    render() {
        return (
            <div> 
                {this.state.isVisible ? 
                    <li data-target={"#inbox-message-" + this.props.idRow}>
                        <div className="message-count"> 
                            {this.state.compteurMessage}
                        </div>
                        <img alt={this.state.photo} className="img-circle medium-image" src={"http://149.91.89.142:8000/uploads/avatars/" + this.state.photo} />
                        <div className="vcentered info-combo">
                            <h3 className="no-margin-bottom name"> {this.state.nom} {this.state.prenom}  </h3>
                            <h5>{this.state.lastMessage}</h5>
                            
                        </div>
                        <div className="contacts-add">
                            <span className="message-time">{this.state.dateHeureLastMessage}</span> 
                            <i onClick={this.deleteConversation} className="material-icons" data-toggle="tooltip" title="Supprimer" style={{cursor:'pointer',fontSize:'20px', paddingLeft:'6px', color:'grey'}}>delete</i>
                        </div>                    
                    </li>   
                    :null
                }                             
            </div>
          
        )
    }
};