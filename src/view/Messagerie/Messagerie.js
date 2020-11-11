import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    axios.get(('http://localhost:8000/api/salons'))
    .then(res => {
        res.data['hydra:member'].map(row => {
            if((row.idUser1 == localStorage.getItem('ID')) || (row.idUser2 == localStorage.getItem('ID'))){
                salonsTemp.push(row);
            }
        })
        this.setState({allConversations: salonsTemp});
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
                                        <div data-toggle="tab" data-target="#inbox" className="active">
                                        {" "}
                                        Reception{" "}
                                        </div>
                                    </div>
                                <div className="tab-content">
                                    <div id="inbox" className="contacts-outter-wrapper tab-pane active">
                                        <form className="panel-search-form info form-group has-feedback no-margin-bottom">
                                            <input type="text" className="form-control" name="search" placeholder="Recherche"/>
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
                                
                                
                                <div className="tab-pane message-body" id="marked-message-1">
                                    <div className="new-message-wrapper">
                                        <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Send message to..."
                                        />
                                        <a className="btn btn-danger close-new-message" href="#">
                                            <i className="fa fa-times" />
                                        </a>
                                        </div>
                                        <div className="chat-footer new-message-textarea">
                                        <textarea className="send-message-text" defaultValue={""} />
                                        <label className="upload-file">
                                            <input type="file" required />
                                            <i className="fa fa-paperclip" />
                                        </label>
                                        <button type="button" className="send-message-button btn-danger">
                                            {" "}
                                            <i className="fa fa-send" />{" "}
                                        </button>
                                        </div>
                                    </div>
                                    <div className="message-chat">
                                    <div className="chat-body">
                                        <div className="message warning">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="/assets/img/avatar.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-info">
                                            <h4> Jessica Fresco </h4>
                                            <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 1:44 PM{" "}
                                            </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                            Hello, Dennis. I wanted to let you know we reviewed your
                                            proposal and decided you'll start working together with our
                                            UI/UX team on Tuesday, January 10th, 2017. Congratulations and
                                            thank you!
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                        <div className="message my-message">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="/assets/img/avatar.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-body-inner">
                                            <div className="message-info">
                                                <h4> Dennis Novac </h4>
                                                <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 1:51 PM{" "}
                                                </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                                Hello, great news. I'm sure we're going to make something
                                                amazing together!
                                            </div>
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                    </div>
                                    <div className="chat-footer">
                                        <textarea className="send-message-text" defaultValue={""} />
                                        <label className="upload-file">
                                        <input type="file" required />
                                        <i className="fa fa-paperclip" />
                                        </label>
                                        <button type="button" className="send-message-button btn-danger">
                                        {" "}
                                        <i className="fa fa-send" />{" "}
                                        </button>
                                    </div>
                                    </div>
                                </div>
                                <div className="tab-pane message-body" id="marked-message-2">
                                    <div className="new-message-wrapper">
                                        <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Send message to..."
                                        />
                                        <a className="btn btn-danger close-new-message" href="#">
                                            <i className="fa fa-times" />
                                        </a>
                                        </div>
                                        <div className="chat-footer new-message-textarea">
                                        <textarea className="send-message-text" defaultValue={""} />
                                        <label className="upload-file">
                                            <input type="file" required />
                                            <i className="fa fa-paperclip" />
                                        </label>
                                        <button type="button" className="send-message-button btn-danger">
                                            {" "}
                                            <i className="fa fa-send" />{" "}
                                        </button>
                                        </div>
                                    </div>
                                    <div className="message-chat">
                                    <div className="chat-body">
                                        <div className="message warning">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="/assets/img/avatar.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-info">
                                            <h4> Pavel Durov </h4>
                                            <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 3:23 PM{" "}
                                            </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                            Hey, we need your help for our next Telegram re-design. Are
                                            you available to talk about this tomorrow evening at around 8
                                            PM ?
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                        <div className="message my-message">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="/assets/img/avatar.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-body-inner">
                                            <div className="message-info">
                                                <h4> Dennis Novac </h4>
                                                <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 3:31 PM{" "}
                                                </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                                Hello, yes I will. It's always a pleasure to work with you
                                                and your team :)
                                            </div>
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                        <div className="message warning">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="/assets/img/avatar.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-info">
                                            <h4> Pavel Durov </h4>
                                            <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 3:35 PM{" "}
                                            </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                            Perfect, talk to you tomorrow evening.
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                    </div>
                                    <div className="chat-footer">
                                        <textarea className="send-message-text" defaultValue={""} />
                                        <label className="upload-file">
                                        <input type="file" required />
                                        <i className="fa fa-paperclip" />
                                        </label>
                                        <button type="button" className="send-message-button btn-danger">
                                        {" "}
                                        <i className="fa fa-send" />{" "}
                                        </button>
                                    </div>
                                    </div>
                                </div>
                                <div className="tab-pane message-body" id="draft-message-1">
                                    <div className="new-message-wrapper">
                                        <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Send message to..."
                                        />
                                        <a className="btn btn-danger close-new-message" href="#">
                                            <i className="fa fa-times" />
                                        </a>
                                        </div>
                                        <div className="chat-footer new-message-textarea">
                                        <textarea className="send-message-text" defaultValue={""} />
                                        <label className="upload-file">
                                            <input type="file" required />
                                            <i className="fa fa-paperclip" />
                                        </label>
                                        <button type="button" className="send-message-button btn-danger">
                                            {" "}
                                            <i className="fa fa-send" />{" "}
                                        </button>
                                        </div>
                                    </div>
                                    <div className="message-chat">
                                    <div className="chat-body">
                                        <div className="message my-message">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="/assets/img/avatar.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-body-inner">
                                            <div className="message-info">
                                                <h4> Dennis Novac </h4>
                                                <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 4:22 PM{" "}
                                                </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                                Hello, Mila, can you send me the latest pack of icons, I
                                                need all the source files. Thanks.
                                            </div>
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                    </div>
                                    <div className="chat-footer">
                                        <textarea className="send-message-text" defaultValue={""} />
                                        <label className="upload-file">
                                        <input type="file" required />
                                        <i className="fa fa-paperclip" />
                                        </label>
                                        <button type="button" className="send-message-button btn-danger">
                                        {" "}
                                        <i className="fa fa-send" />{" "}
                                        </button>
                                    </div>
                                    </div>
                                </div>
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
