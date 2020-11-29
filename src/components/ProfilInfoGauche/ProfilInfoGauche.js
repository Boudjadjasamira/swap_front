import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../css/loading.css';

export default class ProfilInfoGauche extends Component {

    constructor(props){
        super(props);
        this.state = {
            pseudo: "",
            titrePhoto: "",
            nombreDeTchatEnCours: 0,
            imgLoaded: true
        };
        this.changePicture = this.changePicture.bind(this);
    }

    componentDidMount(){
        //Recuperation des infos
        axios.get(`http://149.91.89.142:8000/api/users/` + localStorage.getItem('ID'))
        .then(res =>
            this.setState({
              pseudo: res.data.pseudo,
              titrePhoto: res.data.photo
            })
        )

        let compteurDeTchat = 0;

        axios.get('http://149.91.89.142:8000/api/salons')
        .then(res => {
          res.data['hydra:member'].map(e => {
            if((e.idUser1 == localStorage.getItem('ID') || (e.idUser2 == localStorage.getItem('ID')))){
              compteurDeTchat++;
            }
          })
          this.setState({nombreDeTchatEnCours: compteurDeTchat});
        })


    }

    changePicture(e){
        this.setState({
          images: e.target.files,
          titrePhoto: e.target.files[0].name,
        });
        
        const formData = new FormData();
    
        Array.from(e.target.files).forEach(image => {
          formData.append('files', image);
        });
    
        axios.post('http://149.91.89.142:8000/uploadAvatar.php', formData)
        .then(res => {
            console.log({res});
        }).catch(err => {
            console.error({err});
        });
    
        axios.put('http://149.91.89.142:8000/api/users/' + localStorage.getItem('ID'), {
          photo: e.target.files[0].name
        },{
          headers: {
              'Content-Type': 'application/json'
          }})
        .then(res => {
            console.log({res});
        }).catch(err => {
            console.error({err});
        });
    
      }

    render() {
        return (
            <div>
                <div className="text-center">
                  <div className="col-sm-4">
                    <div className="item">
                      <span className="notify-badge">
                        <div className="image-upload">
                          <label htmlFor="file-input">
                            <svg
                              width="1.5em"
                              height="1.3em"
                              viewBox="0 0 16 16"
                              className="bi bi-camera"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"
                              />
                              <path
                                fillRule="evenodd"
                                d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                              />
                              <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                            </svg>
                          </label>
                          <input id="file-input" onChange={this.changePicture} type="file" />
                        </div>
                      </span>
                      {this.state.imgLoaded ? 
                          <div class="loadingio-spinner-spin-gkmwr87oy9"><div class="ldio-qorx55o730n"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div></div>
                        :
                        <img className="image-avatar" src={"http://149.91.89.142:8000/uploads/avatars/" + this.state.titrePhoto} width="240px" />
                      }

                      <img style={{display:"none"}} onLoad={() => this.setState({imgLoaded: false})} src={"http://149.91.89.142:8000/uploads/avatars/" + this.state.titrePhoto} width="240px" />
                      
                      <br />
                      <br />
                      <h4>@{this.state.pseudo}</h4>
                      <Link to={process.env.PUBLIC_URL + "/Myprofil"}> Voir mon profil</Link>
                      <br />
                      <br />
                      <div className="menu">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-pencil-square"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fillRule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>{" "}
                &nbsp;
                <span>
                          <Link to={process.env.PUBLIC_URL + "/Publish"}> Publier une annonce</Link>
                        </span>
                        <br />
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-info-circle"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                          />
                          <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
                          <circle cx={8} cy="4.5" r={1} />
                        </svg>{" "}
                &nbsp;
                <span>
                          <a href="/Account"> Infos</a>
                        </span>
                        <br />
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-list-task"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
                          />
                          <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                          <path
                            fillRule="evenodd"
                            d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
                          />
                        </svg>{" "}
                &nbsp;
                <span>
                          <Link to={process.env.PUBLIC_URL + "/Services"}> Mes services</Link>
                        </span>
                        <br />
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                          <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>{" "}
                &nbsp;
                <span>
                          <Link to={process.env.PUBLIC_URL + "/Messagerie"}> Messagerie <span className="badge badge-pill badge-danger">{this.state.nombreDeTchatEnCours}</span></Link>
                        </span>
                        <br />
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-star"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                          />
                        </svg>{" "}
                &nbsp;
                <span>
                          <Link to={process.env.PUBLIC_URL + "/Review"}> Mes avis</Link>
                        </span>
                        <br />
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-gift"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"
                          />
                        </svg>{" "}
                
                &nbsp;
                <span>
                          <Link to={process.env.PUBLIC_URL + "/Trophy"}> Trophées</Link>
                        </span>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        )
    }
};