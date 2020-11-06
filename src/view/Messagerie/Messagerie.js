import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//Inclus les fichiers communs
import Header from '../../view/Common/Header';
import Footer from '../../view/Common/Footer';
//Inclus les components

//Inclus Axios
import axios from 'axios';

import ProfilInfoGauche from '../../components/ProfilInfoGauche/ProfilInfoGauche';


export default class Messagerie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allAnnonces: [],
      allCategories: [],
      confirm: true
    }
  }

  componentDidMount() {
    document.title = "Profil - Messagerie"

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
                                        <input
                                        type="text"
                                        className="form-control"
                                        name="search"
                                        placeholder="Recherche"
                                        />
                                    </form>
                                    <div className="contacts-outter">
                                        {/* Section Reception message */}
                                        <ul className="list-unstyled contacts">
                                        <li
                                            data-toggle="tab"
                                            data-target="#inbox-message-1"
                                            className="active"
                                        >
                                            <div className="message-count"> 1 </div>
                                            <img
                                            alt
                                            className="img-circle medium-image"
                                            src="assets/img/avatar.png"
                                            />
                                            <div className="vcentered info-combo">
                                            <h3 className="no-margin-bottom name"> Jane Doe </h3>
                                            <h5>
                                                {" "}
                                                Morbi eu ex sed est imperdiet condimentum vitae et neque. 
                                            </h5>
                                            </div>
                                            <div className="contacts-add">
                                            <span className="message-time">
                                                {" "}
                                                2:32 
                                            </span>
                                            <i className="fa fa-trash-o" />
                                            <i className="fa fa-paperclip" />
                                            </div>
                                        </li>
                                        <li data-toggle="tab" data-target="#inbox-message-2">
                                            <img
                                            alt
                                            className="img-circle medium-image"
                                            src="assets/img/avatar_man.png"
                                            />
                                            <div className="vcentered info-combo">
                                            <h3 className="no-margin-bottom name"> Batman </h3>
                                            <h5>
                                                {" "}
                                                Donec eu convallis felis. Etiam nec lobortis nibh, eu tincidunt enim. Nullam at leo vel{" "}
                                            </h5>
                                            </div>
                                            <div className="contacts-add">
                                            <span className="message-time">
                                                {" "}
                                                3:56 
                                            </span>
                                            <i className="fa fa-trash-o" />
                                            <i className="fa fa-paperclip" />
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                    </div>

                                    {/* Section nouveau  */}
                                    <div id="sent" className="contacts-outter-wrapper tab-pane">
                                    <form className="panel-search-form success form-group has-feedback no-margin-bottom">
                                        <input
                                        type="text"
                                        className="form-control"
                                        name="search"
                                        placeholder="Search"
                                        />
                                        <span className="fa fa-search form-control-feedback" />
                                    </form>
                                    <div className="contacts-outter">
                                        <ul className="list-unstyled contacts success">
                                        <li data-toggle="tab" data-target="#sent-message-1">
                                            <img
                                            alt
                                            className="img-circle medium-image"
                                            src="assets/img/avatar.png"
                                            />
                                            <div className="vcentered info-combo">
                                            <h3 className="no-margin-bottom name"> David Beckham </h3>
                                            <h5>
                                                {" "}
                                                I would like to take a look at it this evening, is it
                                                possible ?{" "}
                                            </h5>
                                            </div>
                                            <div className="contacts-add">
                                            <span className="message-time">
                                                {" "}
                                                2:24 
                                            </span>
                                            <i className="fa fa-trash-o" />
                                            <i className="fa fa-paperclip" />
                                            </div>
                                        </li>
                                        <li data-toggle="tab" data-target="#sent-message-2">
                                            <div className="message-count"> 7 </div>
                                            <img
                                            alt
                                            className="img-circle medium-image"
                                            src="assets/img/avatar_man.png"
                                            />
                                            <div className="vcentered info-combo">
                                            <h3 className="no-margin-bottom name"> Toto </h3>
                                            <h5>
                                                {" "}
                                                Hello, Dennis. I will take a look at it tomorrow, because
                                                I'm{" "}
                                            </h5>
                                            </div>
                                            <div className="contacts-add">
                                            <span className="message-time">
                                                {" "}
                                                12:41 
                                            </span>
                                            <i className="fa fa-trash-o" />
                                            <i className="fa fa-paperclip" />
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                    </div>
                                    
                                   
                                </div>
                                </div>
                                
                                <div className="tab-content">
                                <div className="tab-pane message-body active" id="inbox-message-1">
                                    <div>
                                    <div className="new-message-wrapper">
                                        <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Répondre..."
                                        />
                                        <a className="btn btn-danger close-new-message" href="#">
                                            <i className="fa fa-times" />
                                        </a>
                                        </div>
                                        <div className="chat-footer new-message-textarea">
                                        <textarea className="send-message-text" defaultValue={"sdsd"} placeholder="Répondre..." />
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
                                    <div className="message-chat">
                                    <div className="chat-body">
                                        <div className="message info">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="/assets/img/avatar.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-info">
                                            <h4> Jane Doe </h4>
                                            <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 2:25{" "}
                                            </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                            Morbi eu ex sed est imperdiet condimentum vitae et neque. Donec eu convallis felis. Etiam nec lobortis nibh, eu tincidunt enim. Nullam at leo vel
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                        <div className="alert alert-info text-center" role="alert">
                                            <h5 className="alert-heading text-center">Nouvelle proposition de swap !</h5>
                                            <p className="mt-2 mb-2">Jane Doe souhaite échanger ce service : (titreService) contre (titreService)</p>
                                            <button type="button" className="btn btn-success btn-sm">Accepter</button>&nbsp;
                                            <button type="button" className="btn btn-danger btn-sm">Refuser</button>
                                        </div>
                                        <div className="message my-message">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="/assets/img/avatar_man.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-body-inner">
                                            <div className="message-info">
                                                <h4> Superman </h4>
                                                <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 2:28{" "}
                                                </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                            Morbi eu ex sed est imperdiet condimentum vitae et neque. Donec eu convallis felis. Etiam nec lobortis nibh, eu tincidunt enim. Nullam at leo vel
                                            </div>
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                        <div className="message info">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="/assets/img/avatar.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-info">
                                            <h4> Jane Doe </h4>
                                            <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 2:32{" "}
                                            </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                            Morbi eu ex sed est imperdiet condimentum vitae et neque. Donec eu convallis felis. Etiam nec lobortis nibh, eu tincidunt enim. Nullam at leo vel
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
                                <div className="tab-pane message-body" id="inbox-message-2">
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
                                        <div className="message info">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="assets/img/avatar_man.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-info">
                                            <h4> Mark Zuckerberg </h4>
                                            <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 3:45{" "}
                                            </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                            Morbi eu ex sed est imperdiet condimentum vitae et neque. Donec eu convallis felis. Etiam nec lobortis nibh, eu tincidunt enim. Nullam at leo vel
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                        <div className="message my-message">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="assets/img/avatar.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-body-inner">
                                            <div className="message-info">
                                                <h4> Dennis Novac </h4>
                                                <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 3:52{" "}
                                                </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                            Morbi eu ex sed est imperdiet condimentum vitae et neque. Donec eu convallis felis. Etiam nec lobortis nibh, eu tincidunt enim. Nullam at leo vel
                                            </div>
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                        <div className="message info">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="assets/img/avatar_man.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-info">
                                            <h4> Mark Zuckerberg </h4>
                                            <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 3:56{" "}
                                            </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                            Morbi eu ex sed est imperdiet condimentum vitae et neque. Donec eu convallis felis. Etiam nec lobortis nibh, eu tincidunt enim. Nullam at leo vel
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                        <div className="message my-message">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="assets/img/avatar.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-body-inner">
                                            <div className="message-info">
                                                <h4> Dennis Novac </h4>
                                                <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 4:01{" "}
                                                </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">Great, thank you.</div>
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
                                <div className="tab-pane message-body" id="inbox-message-3">
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
                                        <div className="message info">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="assets/img/avatar_man.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-info">
                                            <h4> Evan Williams </h4>
                                            <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 5:07{" "}
                                            </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                            Morbi eu ex sed est imperdiet condimentum vitae et neque. Donec eu convallis felis. Etiam nec lobortis nibh, eu tincidunt enim. Nullam at leo vel
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                        <div className="message my-message">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="assets/img/avatar.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-body-inner">
                                            <div className="message-info">
                                                <h4> Dennis Novac </h4>
                                                <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 5:16{" "}
                                                </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                            Morbi eu ex sed est imperdiet condimentum vitae et neque. Donec eu convallis felis. Etiam nec lobortis nibh, eu tincidunt enim. Nullam at leo vel
                                            </div>
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                        <div className="message info">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="assets/img/avatar.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-info">
                                            <h4> Evan Williams </h4>
                                            <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 5:21{" "}
                                            </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                            Morbi eu ex sed est imperdiet condimentum vitae et neque. Donec eu convallis felis. Etiam nec lobortis nibh, eu tincidunt enim. Nullam at leo vel
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
                                <div className="tab-pane message-body" id="inbox-message-4">
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
                                        <div className="message info">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="/assets/img/avatar_man.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-info">
                                            <h4> Jonahtan Ive </h4>
                                            <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 6:12{" "}
                                            </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                            Morbi eu ex sed est imperdiet condimentum vitae et neque. Donec eu convallis felis. Etiam nec lobortis nibh, eu tincidunt enim. Nullam at leo vel
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                        <div className="message my-message">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="/assets/img/avatar_man.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-body-inner">
                                            <div className="message-info">
                                                <h4> Dennis Novac </h4>
                                                <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 6:16{" "}
                                                </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                            Morbi eu ex sed est imperdiet condimentum vitae et neque. Donec eu convallis felis. Etiam nec lobortis nibh, eu tincidunt enim. Nullam at leo vel
                                            </div>
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                        <div className="message info">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="/assets/img/avatar_man.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-info">
                                            <h4> Jonahtan Ive </h4>
                                            <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 6:12{" "}
                                            </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                            Morbi eu ex sed est imperdiet condimentum vitae et neque. Donec eu convallis felis. Etiam nec lobortis nibh, eu tincidunt enim. Nullam at leo vel
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                        <div className="message info">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="/assets/img/avatar_man.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-info">
                                            <h4> Jonahtan Ive </h4>
                                            <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 6:13{" "}
                                            </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                            Morbi eu ex sed est imperdiet condimentum vitae et neque. Donec eu convallis felis. Etiam nec lobortis nibh, eu tincidunt enim. Nullam at leo vel
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
                                <div className="tab-pane message-body" id="sent-message-1">
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
                                            src="/assets/img/avatar_man.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-body-inner">
                                            <div className="message-info">
                                                <h4> Dennis Novac </h4>
                                                <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 2:05{" "}
                                                </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                            Morbi eu ex sed est imperdiet condimentum vitae et neque. Donec eu convallis felis. Etiam nec lobortis nibh, eu tincidunt enim. Nullam at leo vel
                                            </div>
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                        <div className="message success">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="/assets/img/avatar_man.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-info">
                                            <h4> David Beckham </h4>
                                            <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 2:11{" "}
                                            </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                            Morbi eu ex sed est imperdiet condimentum vitae et neque. Donec eu convallis felis. Etiam nec lobortis nibh, eu tincidunt enim. Nullam at leo vel
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                        <div className="message success">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="/assets/img/avatar_man.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-info">
                                            <h4> David Beckham </h4>
                                            <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 2:24{" "}
                                            </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                            Morbi eu ex sed est imperdiet condimentum vitae et neque. Donec eu convallis felis. Etiam nec lobortis nibh, eu tincidunt enim. Nullam at leo vel
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                        <div className="message my-message">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="/assets/img/avatar_man.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-body-inner">
                                            <div className="message-info">
                                                <h4> Dennis Novac </h4>
                                                <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 2:25{" "}
                                                </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                                Morbi eu ex sed est imperdiet condimentum vitae et neque. Donec eu convallis felis. Etiam nec lobortis nibh, eu tincidunt enim. Nullam at leo vel
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
                                <div className="tab-pane message-body" id="sent-message-2">
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
                                            src="/assets/img/avatar_man.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-body-inner">
                                            <div className="message-info">
                                                <h4> Dennis Novac </h4>
                                                <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 12:36{" "}
                                                </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                            Morbi eu ex sed est imperdiet condimentum vitae et neque. Donec eu convallis felis. Etiam nec lobortis nibh, eu tincidunt enim. Nullam at leo vel
                                            </div>
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                        <div className="message success">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="/assets/img/avatar_man.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-info">
                                            <h4> Jeff Williams </h4>
                                            <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 12:41{" "}
                                            </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">
                                            Morbi eu ex sed est imperdiet condimentum vitae et neque. Donec eu convallis felis. Etiam nec lobortis nibh, eu tincidunt enim. Nullam at leo vel
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                        <div className="message my-message">
                                        <img
                                            alt
                                            className="img-circle medium-image"
                                            src="/assets/img/avatar_man.png"
                                        />
                                        <div className="message-body">
                                            <div className="message-body-inner">
                                            <div className="message-info">
                                                <h4> Dennis Novac </h4>
                                                <h5>
                                                {" "}
                                                <i className="fa fa-clock-o" /> 12:46{" "}
                                                </h5>
                                            </div>
                                            <hr />
                                            <div className="message-text">Thanks :)</div>
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
