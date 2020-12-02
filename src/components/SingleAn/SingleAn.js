import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import axios from 'axios';
import $ from 'jquery';
import Swal from 'sweetalert2';
import { useImperativeHandle } from 'react';
import { Redirect } from 'react-router-dom';

export default class SingleAnnonce extends Component {

  constructor(props){
    super(props);
    this.state = {
      titre: "",
      categorie: "",
      idCategorie: 0,
      description: "",
      codePostal: "",
      date: "",
      photo: "",
      idUser:"",
      ville:"",
      createur: "",
      allCategories: [],
      allAnnonces: [],
      isMyAnnonce: false,
      contactMessage: "",
      idAnnonce: 0,
      serviceSelected: "",
      isVisibleSwap: true,
      isAvisVisible: false,
      myAvis: "",
      myNote: 0,
      idSwap: 0,
      
    }
    this.openModalConfirm = this.openModalConfirm.bind(this);
    this.openModelContacter = this.openModelContacter.bind(this);
    this.changeContactMessage = this.changeContactMessage.bind(this);
    this.changeServicesSelect = this.changeServicesSelect.bind(this);
    this.changeMyAvis = this.changeMyAvis.bind(this);
    this.openModalAvisSend = this.openModalAvisSend.bind(this);
    this.changeMyNote = this.changeMyNote.bind(this);
  }

  componentDidMount() {
    const search = window.location.pathname.toString().split('-')[1];
    this.setState({idAnnonce: search});
    if(localStorage.getItem('ID')*1 == 0){
      this.setState({isMyAnnonce: true});
    }
    axios.get('http://149.91.89.142:8000/api/annonces/' + search)
    .then(( res => {
        this.setState({
          titre: res.data["titre"],
          idCategorie: res.data["idCategorie"],
          description: res.data["description"],
          date: res.data["date"],
          codePostal: res.data['codePostal'],
          photo: res.data["photo"],
          ville: res.data["ville"],
          idUser:res.data["idUser"]
        });

        document.title = "Annonce - " + this.state.titre.toString() + " - ";

        //Verification si la personne qui a creer son annonce est dessus ou pas
        if(res.data['idUser'] == localStorage.getItem('ID')){
         this.setState({isMyAnnonce: true});
        }
    }));

    //recuperation de toutes les categories
    axios.get(`http://149.91.89.142:8000/api/categories`)
     .then(res => {
      res.data['hydra:member'].forEach(
        element => {
          if(element.id == this.state.idCategorie){
            this.setState({categorie: element.titre})
          }
        }
      )
    });

    //recuperation du pseudo
    axios.get(`http://149.91.89.142:8000/api/users`)
     .then(res => {
      res.data['hydra:member'].forEach(
        element => {
          if(element.id == this.state.idUser){
            this.setState({createur: element.pseudo})
          }
        }
      )
      document.title = "Annonce - " + this.state.titre.toString() + " - " + this.state.categorie.toString()
    });

    //recuperation des annonces de l'utilisateurs connecté
    axios.get(`http://149.91.89.142:8000/api/annonces`)
      .then(res => {
        let tabTempAnnonce = [];
        res.data['hydra:member'].forEach(
          element => {
             if(element.idUser == localStorage.getItem('ID')){
               tabTempAnnonce.push(element);
             }
           }
          );
        this.setState({allAnnonces: tabTempAnnonce});
    });

    let verifSalon = true;
    let idSalonRecup = 0;
        //Verification pour savoir la conversation existe
        axios.get('http://149.91.89.142:8000/api/salons')
        .then( res => {
          res.data['hydra:member'].map(e => {
            if((e.idUser1 == this.state.idUser) && (e.idUser2 == localStorage.getItem('ID')) && (e.idAnnonce == this.state.idAnnonce)){
              verifSalon = true;
              idSalonRecup = e.id;
            }
            if((e.idUser1 == localStorage.getItem('ID')) && (e.idUser2 == this.state.idUser) && (e.idAnnonce == this.state.idAnnonce)){
              verifSalon = true;
              idSalonRecup = e.id;
            }
          })
    
          if(verifSalon == true){
            this.setState({isVisibleSwap: false});
          }



          axios.get('http://149.91.89.142:8000/api/swaps')
          .then(res => {
            res.data['hydra:member'].map(k => {
              if(k.idSalon == idSalonRecup && k.isClotured == true && k.isAccepted == true){
                this.setState({isAvisVisible: true});
              }
              if(k.idSalon == idSalonRecup){
                this.setState({idSwap: k.id})
              }
            })
          })

        });
 


  }

  changeServicesSelect(e){
    this.setState({serviceSelected: e.target.value});
  }

  changeMyNote(e){
    this.setState({myNote: e.target.value});
  }

  changeMyAvis(e){
    this.setState({myAvis: e.target.value});
  }

  openModalConfirm(){

    let verifSalon = false;
    let idSalonRecup = 0;

    Swal.fire({
      title: "Envoie en cours...",
      html: '<div class="loadingio-spinner-spin-gkmwr87oy9"><div class="ldio-qorx55o730n"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div></div>',
      showConfirmButton: false,
      allowOutsideClick: false
    });

    //Verification pour savoir la conversation existe
    axios.get('http://149.91.89.142:8000/api/salons')
    .then( res => {
      res.data['hydra:member'].map(e => {
        if((e.idUser1 == this.state.idUser) && (e.idUser2 == localStorage.getItem('ID')) && (e.idAnnonce == this.state.idAnnonce)){
          verifSalon = true;
          idSalonRecup = e.id;
        }
        if((e.idUser1 == localStorage.getItem('ID')) && (e.idUser2 == this.state.idUser) && (e.idAnnonce == this.state.idAnnonce)){
          verifSalon = true;
          idSalonRecup = e.id;
        }
      })

      console.log(verifSalon);
      console.log(idSalonRecup);

      axios.post('http://149.91.89.142:8000/api/swaps', {
        idUser: localStorage.getItem('ID')*1,
        idSalon: idSalonRecup*1,
        idService: this.state.serviceSelected*1,
        isAccepted: false,
        isClotured: false
      }).then(res => {
        Swal.fire({
          title: 'Swap Envoyé !',
          width: 300,
          background: 'white',
          timer: 2200,
          showConfirmButton: false,
          backdrop: `#21252952`
        });
      })
    });
          



    
  }

  openModelContacter(){


    Swal.fire({
      title: "Envoie en cours...",
      html: '<div class="loadingio-spinner-spin-gkmwr87oy9"><div class="ldio-qorx55o730n"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div></div>',
      showConfirmButton: false,
      allowOutsideClick: false
    });

    let verifSalon = false;
    let idSalonRecup = 0;


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

    //Verification pour savoir la conversation existe
    axios.get('http://149.91.89.142:8000/api/salons')
      .then( res => {
        res.data['hydra:member'].map(e => {
          if((e.idUser1 == this.state.idUser) && (e.idUser2 == localStorage.getItem('ID')) && (e.idAnnonce == this.state.idAnnonce)){
            verifSalon = true;
            idSalonRecup = e.id;
          }
          if((e.idUser1 == localStorage.getItem('ID')) && (e.idUser2 == this.state.idUser) && (e.idAnnonce == this.state.idAnnonce)){
            verifSalon = true;
            idSalonRecup = e.id;
          }
        })
        
        //si le salon existe pas alors creation du salon
        if(verifSalon == false){
          //création du salon de conversation
          axios.post('http://149.91.89.142:8000/api/salons', {idUser1: this.state.idUser, idUser2: localStorage.getItem('ID')*1, idAnnonce: this.state.idAnnonce*1})
          .then(res => {
            //recuperation de l'id salon qui vient d'etre cree
            
            idSalonRecup = res.data['id'];
            //Envoi du message dans le chat
              axios.post('http://149.91.89.142:8000/api/messageries', {idSalon: idSalonRecup, idUser: localStorage.getItem('ID')*1, message: this.state.contactMessage, dateMsg: getDateTime()})
              .then(res => {
                Swal.fire({
                title: 'Message Envoyé !',
                width: 300,
                background: 'white',
                timer: 2200,
                showConfirmButton: false,
                backdrop:`#21252952`
                })
              })

          });
        }else{
          //Envoi du message dans le chat
            axios.post('http://149.91.89.142:8000/api/messageries', {idSalon: idSalonRecup, idUser: localStorage.getItem('ID')*1, message: this.state.contactMessage, dateMsg: getDateTime()})
            .then(res => {
              Swal.fire({
              title: 'Message Envoyé !',
              width: 300,
              background: 'white',
              timer: 2200,
              showConfirmButton: false,
              backdrop:`#21252952`
              })
            })
          }


      })
  }

  openModalAvisSend(){
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

    axios.post('http://149.91.89.142:8000/api/avis', {
      idUser: localStorage.getItem('ID')*1,
      avis: this.state.myAvis,
      dateAvis: getDateTime(),
      note: this.state.myNote*1,
      idSwap: this.state.idSwap*1
    }).then(res => {
      Swal.fire({
        title: 'Avis Envoyé !',
        width: 300,
        background: 'white',
        timer: 2200,
        showConfirmButton: false,
        backdrop: `#21252952`
        })
    })

  }

  changeContactMessage(e){
    this.setState({contactMessage: e.target.value});
  }

  render() {
    return (
      <div className="container w-50 p-3">
          <br />
          <div className="media border p-3 flex-column flex-md-row">
            <div className="media-body align-self-center">
              {/*Carousel Wrapper*/}
              <div id="carousel-example-2" className="carousel slide carousel-fade z-depth-1-half" data-ride="carousel">
                {/*Slides*/}
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <div className="view">
                      <img
                        className="d-block w-100"
                        src={"http://149.91.89.142:8000/uploads/annonces/" + this.state.photo}
                        alt={this.state.photo}
                      />
                      <div className="mask rgba-black-light" />
                    </div>
                  </div>
                </div>
                {/*/.Slides*/}
              </div>
              {/*/.Carousel Wrapper*/}
              <br />
              <h5 className="p-1">{this.state.titre}</h5>
              <hr />
              <p>Catégorie - {this.state.categorie}</p>
              <p>Code postal : {this.state.codePostal}</p>
              <p>Ville : {this.state.ville}</p>
              <p>Posté le {this.state.date} par {this.state.createur}</p>
              <br />
              <p className="text-justify">
                {this.state.description}
              </p>
              <br />

              {this.state.isMyAnnonce ? null :
                <div>
                  <button type="button" className="btn btn-outline-dark my-2 my-sm-0" data-toggle="modal" data-target="#myModal">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                    </svg>                               
                  </button>
                  &nbsp;
                  {this.state.isVisibleSwap ? null :
                  <button type="button" className="btn btn-outline-dark my-2 my-sm-0" data-toggle="modal" data-target="#myModal2">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-repeat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                      <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                    </svg>      
                  </button>
                  }
                  &nbsp;
                  {this.state.isAvisVisible ? 
                    <button type="button" className="btn btn-outline-dark my-2 my-sm-0" data-toggle="modal" data-target="#myModal3">
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
                        </svg>          
                    </button>
                  : 
                    null  
                  }
                </div>
              }
              
            </div>
          </div>
          
          {/* Modal Swap */}
          <div className="modal-box2 mx-auto" >
            <div className="modal fade" id="myModal2" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div className="modal-dialog" role="document">
                <div className="modal-content modal-body-swap" style={{ backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',paddingLeft:'30px'}}>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <div className="modal-body">
                      <img src={process.env.PUBLIC_URL + 'assets/img/logo.png'} className="modal-image" alt="Logo"/>
                      <p className="description">Selectionnez votre service! <br /> et envoyer votre Swap</p>
                      <div className="col-sm-8 mx-auto ">
                        <select className="form-control-index custom-select" value={this.state.serviceSelected} onChange={this.changeServicesSelect} name="Annonce">
                          <option>Mes Services</option>
                            {this.state.allAnnonces.map(e => (
                              <option value={e.id}>{e.titre}</option>   
                            ))}                                           
                        </select>
                      </div>
                      <button className="subscribe" onClick={this.openModalConfirm}> 
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-hand-thumbs-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16v-1c.563 0 .901-.272 1.066-.56a.865.865 0 0 0 .121-.416c0-.12-.035-.165-.04-.17l-.354-.354.353-.354c.202-.201.407-.511.505-.804.104-.312.043-.441-.005-.488l-.353-.354.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315L12.793 9l.353-.354c.353-.352.373-.713.267-1.02-.122-.35-.396-.593-.571-.652-.653-.217-1.447-.224-2.11-.164a8.907 8.907 0 0 0-1.094.171l-.014.003-.003.001a.5.5 0 0 1-.595-.643 8.34 8.34 0 0 0 .145-4.726c-.03-.111-.128-.215-.288-.255l-.262-.065c-.306-.077-.642.156-.667.518-.075 1.082-.239 2.15-.482 2.85-.174.502-.603 1.268-1.238 1.977-.637.712-1.519 1.41-2.614 1.708-.394.108-.62.396-.62.65v4.002c0 .26.22.515.553.55 1.293.137 1.936.53 2.491.868l.04.025c.27.164.495.296.776.393.277.095.63.163 1.14.163h3.5v1H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                        </svg>
                        &nbsp;Swap 
                      </button>
                    </div>
                </div>
              </div>
            </div>
          </div>            

          {/* MODAL CONTACTER */}
          <div className="modal-box2 mx-auto" >
            <div className="modal fade " id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div className="modal-dialog" role="document">
                <div className="modal-content modal-body-swap" style={{ backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',paddingLeft:'30px'}}>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                  <div className="modal-body">
                    <img src={process.env.PUBLIC_URL + 'assets/img/logo.png'} className="modal-image" alt="Logo"/>
                    <p className="description">Envoyer un message !</p>
                    <div className="col-sm-8 mx-auto ">
                      <textarea className="form-control" rows="2" value={this.state.contactMessage} onChange={this.changeContactMessage}></textarea>
                    </div>
                    <button className="subscribe" onClick={this.openModelContacter} style={{paddingLeft:'30px',paddingRight:'30px'}}> 
                      &nbsp;Contacter 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div className="modal-box2 mx-auto" >
            <div className="modal fade " id="myModal3" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div className="modal-dialog" role="document">
                <div className="modal-content modal-body-swap" style={{ backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',paddingLeft:'30px'}}>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                  <div className="modal-body">
                    <img src={process.env.PUBLIC_URL + 'assets/img/logo.png'} className="modal-image" alt="Logo"/>
                    <p className="description">Laisser un avis !</p>
                    <div className="col-sm-8 mx-auto ">
                      <textarea className="form-control" rows="2" value={this.state.myAvis} onChange={this.changeMyAvis}></textarea>
                      <br/>
                      <select className="form-control" value={this.state.myNote} onChange={this.changeMyNote}>
                            <option value="1">Mauvais</option>
                            <option value="2">Bof</option>
                            <option value="3">Moyen</option>
                            <option value="4">Bien</option>
                            <option value="5">Super</option>
                      </select>
                    </div>
                    <button className="subscribe" onClick={this.openModalAvisSend} style={{marginTop:'75px',paddingLeft:'30px', paddingRight:'36px', paddingTop:'10px'}}> 
                      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-hand-thumbs-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16v-1c.563 0 .901-.272 1.066-.56a.865.865 0 0 0 .121-.416c0-.12-.035-.165-.04-.17l-.354-.354.353-.354c.202-.201.407-.511.505-.804.104-.312.043-.441-.005-.488l-.353-.354.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315L12.793 9l.353-.354c.353-.352.373-.713.267-1.02-.122-.35-.396-.593-.571-.652-.653-.217-1.447-.224-2.11-.164a8.907 8.907 0 0 0-1.094.171l-.014.003-.003.001a.5.5 0 0 1-.595-.643 8.34 8.34 0 0 0 .145-4.726c-.03-.111-.128-.215-.288-.255l-.262-.065c-.306-.077-.642.156-.667.518-.075 1.082-.239 2.15-.482 2.85-.174.502-.603 1.268-1.238 1.977-.637.712-1.519 1.41-2.614 1.708-.394.108-.62.396-.62.65v4.002c0 .26.22.515.553.55 1.293.137 1.936.53 2.491.868l.04.025c.27.164.495.296.776.393.277.095.63.163 1.14.163h3.5v1H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                      </svg>
                      &nbsp;Envoyer
                    </button>
                  </div>
                </div>
              </div>
              </div>
            </div>
        </div>
    );
  }
}


