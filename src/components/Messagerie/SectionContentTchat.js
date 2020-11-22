import React, { Component } from 'react';
import axios from 'axios';
import BulleMessage from './BulleMessage';
import Swal from 'sweetalert2';

export default class SectionContentTchat extends Component {

    constructor(props){
        super(props);
        this.state = {
            nom: "",
            prenom: "",
            photo: "",
            allBullesMessages: [],
            myMessage: ""
        }
        this.changeMessage = this.changeMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
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

            bulleMessageTemp.sort(function(a,b){
                return new Date(a.dateMsg) - new Date(b.dateMsg);
            });

            this.setState({allBullesMessages: bulleMessageTemp});

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

    changeMessage(e){
        this.setState({myMessage: e.target.value});
    }

    sendMessage(){


        function getDateTime() {
            var now     = new Date(); 
            var year    = now.getFullYear();
            var month   = now.getMonth()+1; 
            var day     = now.getDate();
            var hour    = now.getHours();
            var minute  = now.getMinutes();
            var second  = now.getSeconds(); 
            if(month.toString().length == 1) {
                month = '0'+month;
            }
            if(day.toString().length == 1) {
                day = '0'+day;
            }   
            if(hour.toString().length == 1) {
                hour = '0'+hour;
            }
            if(minute.toString().length == 1) {
                minute = '0'+minute;
            }
            if(second.toString().length == 1) {
                second = '0'+second;
            }   
            var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
            return dateTime;
        }

        Swal.fire({
            title: "Envoie en cours...",
            html: '<div class="loadingio-spinner-spin-gkmwr87oy9"><div class="ldio-qorx55o730n"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div></div>',
            showConfirmButton: false,
            allowOutsideClick: false
          });

        axios.post('http://localhost:8000/api/messageries', {idSalon: this.props.idContent, idUser: localStorage.getItem('ID')*1, message: this.state.myMessage, dateMsg: getDateTime()})
        .then(res => {

          this.setState({myMessage: ""});

          let bulleMessageTemp = [];

          axios.get('http://localhost:8000/api/messageries')
          .then(res => {
              res.data['hydra:member'].map(e => {
                  if(e.idSalon == this.props.idContent){
                      bulleMessageTemp.push(e);
                  }
              })
  
              bulleMessageTemp.sort(function(a,b){
                  return new Date(a.dateMsg) - new Date(b.dateMsg);
              });
  
              this.setState({allBullesMessages: bulleMessageTemp});
  
              //Recuperation de l'avatar + nom + prenom
              axios.get('http://localhost:8000/api/users/' + localStorage.getItem('ID'))
              .then(res => {
                  this.setState({
                      photo: res.data['photo'],
                      nom: res.data['nom'],
                      prenom: res.data['prenom']
                  })
              });
                Swal.fire({
                    icon: 'success',
                    title: 'Message envoyé !',
                    showConfirmButton: true,
                    timer: 1500,
                });
          });

        })

    }

    render() {
        return (
                <div className="tab-pane message-body" id={"inbox-message-" + this.props.idContent}>
                    <div className="message-chat">
                        
                        <div className="chat-body">
                            {this.state.allBullesMessages.map(e => (
                                <BulleMessage idProfil={e.idUser} nomMoi={this.state.nom} prenomMoi={this.state.prenom} photoMoi={this.state.photo} message={e.message} dateTime={e.dateMsg}></BulleMessage>
                            ))}
                        </div>
                                       
                        <div className="chat-footer">
                            <textarea className="send-message-text" value={this.state.myMessage} onChange={this.changeMessage} defaultValue={""} placeholder="Répondre..." />
                            <label className="upload-file">
                                <input type="file" required />
                                <i className="fa fa-paperclip" />
                            </label>
                            <button type="button" id="messageTchat" onClick={this.sendMessage} className="send-message-button btn-danger">
                                <i className="fa fa-send" />
                            </button>
                        </div>

                    </div>
                </div>
        )
    }
};