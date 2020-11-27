import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
//Inclus les fichiers communs
import Header from '../../view/Common/Header';
import Footer from '../../view/Common/Footer';
//Inclus les components

//Inclus Axios
import axios from 'axios';

import ProfilInfoGauche from '../../components/ProfilInfoGauche/ProfilInfoGauche';
import SectionReceptionRow from '../../components/Messagerie/SectionReceptionRow';
import SectionContentTchat from '../../components/Messagerie/SectionContentTchat';


export default class Messagerie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allConversations: []
    }
  }

  componentDidMount() {
    document.title = "Profil - Messagerie";

    let salonsTemp = [];
    //recuperation de toutes les conversations
    axios.get(('http://51.68.44.146:8000/api/salons'))
    .then(res => {
        res.data['hydra:member'].map(row => {
            if((row.idUser1 == localStorage.getItem('ID')) || (row.idUser2 == localStorage.getItem('ID'))){
                salonsTemp.push(row);
            }
        })
        this.setState({allConversations: salonsTemp});
    });

    //rechercher un membre dans la messagerie 
    $("#inputSearchMessage").on("keyup", function() {
        var value = $(this).val().toLowerCase();

        $(".contacts > div").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    
  } 

  render() {
    return (
        <div className="body" id="bodyHome">
        {/* HEADER */}
        <Header></Header>
            <div>
                {/* ./Infos compte */}
                <div className="container">
                    <h1>Messagerie</h1>
                    <hr />
                    <div className="row">
                        <div className="col-md-3">
                            <ProfilInfoGauche></ProfilInfoGauche>
                        </div>
                        {/* module colonn droite */}
                        <div className="col-md-9 personal-info">
                            <div className="container"> 
                            <br />
                                <div className="panel messages-panel border">
                                    <div className="contacts-list">
                                        <div className="inbox-categories">
                                            <div data-toggle="tab" data-target="#inbox" className="active">Reception</div>
                                        </div>
                                    
                                        <div className="tab-content">
                                            <div className="contacts-outter-wrapper tab-pane active">
                                                <form className="panel-search-form info form-group has-feedback no-margin-bottom">
                                                    <input id="inputSearchMessage" type="text" className="form-control" name="search" placeholder="Recherche"/>
                                                </form>
                                                <div className="contacts-outter">
                                                    {/* Section Reception message */}
                                                    <ul className="list-unstyled contacts">
                                                        {this.state.allConversations.map( e => (
                                                            <SectionReceptionRow idRow={e.id}></SectionReceptionRow>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    
                                    <div className="tab-content">
                                        {this.state.allConversations.map( e => (
                                            <SectionContentTchat idContent={e.id}></SectionContentTchat>
                                        ))}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER */}
                    <Footer></Footer>
                </div>
            </div>
        </div>                
        );
    }
}
