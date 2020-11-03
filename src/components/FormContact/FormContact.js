import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


export default class FormContact extends Component {

    constructor(props){
        super(props);
        this.state = {
            nom: "",
            prenom: "",
            categorie: "",
            message: "",
            images: [],
            titrePhoto: ""
        };


        this.changeNom = this.changeNom.bind(this);
        this.changePrenom = this.changePrenom.bind(this);
        this.changeCategorie = this.changeCategorie.bind(this);
        this.changeMessage = this.changeMessage.bind(this);
        this.changePicture = this.changePicture.bind(this);
        this.addContact = this.addContact.bind(this);
    }

    changeNom(e){
        this.setState({
            nom: e.target.value
        });
    }

    changePrenom(e){
        this.setState({
            prenom: e.target.value
        });
    }

    changeCategorie(e){
        this.setState({
            categorie: e.target.value
        })
    }

    changeMessage(e){
        this.setState({
            message: e.target.value
        });
    }

    changePrenom(e){
        this.setState({
            prenom: e.target.value
        });
    }

    changePicture(e){
        this.setState({
            images: e.target.files,
            titrePhoto: e.target.files[0].name
        });
    }

    addContact(){


        const formData = new FormData();

        Array.from(this.state.images).forEach(image => {
          formData.append('files', image);
        });
    
        axios.post('http://localhost:8000/uploadContacts.php', formData)
        .then(res => {
            console.log({res});
        }).catch(err => {
            console.error({err});
        });

        axios.post("http://localhost:8000/api/contacts", {
            nom: this.state.nom,
            prenom: this.state.prenom,
            categorie: this.state.categorie,
            message: this.state.message,
            photo: this.state.titrePhoto
        }).then((res => 
            console.log(res),

            Swal.fire({
                icon: 'success',
                title: 'Votre message est envoyé !',
                showConfirmButton: false,
                timer: 2500
            })
          
        ))

        this.setState({
            nom: "",
            prenom: "",
            message: "",
            photo: ""
        });
    }

    render() {
        return (
            <div className="container">
                <div className="d-flex col flex-wrap ">
                    <div className="align-self-center">
                        <img className="img-fluid " src={process.env.PUBLIC_URL + 'assets/img/contact.png'} alt="Contact_img" width="90%" />
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className="container  col-6">
                        <center>
                            <h1>Contact </h1>
                        </center>
                        <br />
                        <br />
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Nom</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={this.changeNom}
                                    value={this.state.nom}
                                    required="required"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Prenom</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={this.changePrenom}
                                    value={this.state.prenom}
                                    required="required"
                                />
                            </div>
                            <label htmlFor="exampleInputEmail1">Choisissez une catégorie.</label>
                            <select onChange={this.changeCategorie} className="form-control custom-select" required="required">
                                <option selected disabled> Catégories </option>
                                <option>Demande d'informations</option>
                                <option>Litige</option>
                                <option>Autre</option>
                            </select>
                            <br />
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Votre message</label>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows={3}
                                    defaultValue={""}
                                    onChange={this.changeMessage}
                                    value={this.state.message}
                                    required="required"
                                />
                            </div>
                            <label htmlFor="exampleFormControlTextarea1">Ajouter une image ( *Format png-jpg)</label>
                            <div className="custom-file">
                                
                                <input
                                    type="file"
                                    className="custom-file-input"
                                    id="customFileLang"
                                    lang="fr"
                                    onChange={this.changePicture}
                                />
                                <label className="custom-file-label" htmlFor="customFileLang">
                                <span class="badge badge-pill badge-dark text-white">{this.state.titrePhoto}</span>
                                </label>
                            </div>
                        </form>
                        <br />
                        <div className="col-md-12">
                            <input
                                type="submit"
                                className="btn btn-dark btn-send"
                                defaultValue="Envoyer"
                                onClick={this.addContact}
                            />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        )
    }
};
