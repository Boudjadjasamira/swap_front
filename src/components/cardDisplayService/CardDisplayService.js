import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class CardDisplayService extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // removed: true,
            effectRemove: "animate__animated animate__fadeInDown",
            categorieLabel: this.props.categorieEnvoi,
            codePostal: "",
            description: "",
            titrePhoto: "",
            type: 0,
            ville: "",
            modalEditer: "",
            titre:"",
            idAnnonce:"",
        }
        this.deleteAnnonce = this.deleteAnnonce.bind(this);
        this.changeDescription= this.changeDescription.bind(this);
        this.changeTitre = this.changeTitre.bind(this);
        this.editAnnonce = this.editAnnonce.bind(this);
    }

    componentDidMount(){

        this.props.lesCategories.forEach(
            element => {
                if(element.id == this.props.categorieEnvoi){
                    this.setState({categorieLabel: element.titre})
                }
            }
        );
        
        axios.get('http://localhost:8000/api/users')
        .then(res => {
            res.data['hydra:member'].map(e => {
                if(e.id == this.props.idUserEnvoi){
                    this.setState({pseudo: e.pseudo})
                }
                return true
            })
        })

        axios.get('http://localhost:8000/api/annonces/' + this.props.idAnnonce)
        .then(res => {
            this.setState({
                pseudo: res.data['pseudo'],
                description: res.data['description'],
                titre:res.data['titre'],
                idAnnonce: res.data['id'],
            });
        })
    }

    //Requete pour supprimer les annonces 
    deleteAnnonce() {
        axios.delete('http://localhost:8000/api/annonces/' + this.props.idAnnonce)
            .then(res => {
                this.setState({ effectRemove: "animate__animated animate__fadeOutRight" });

                setTimeout(() => {
                    this.setState({ removed: true });
                }, 1000);
            })            
    }

    
    //Requete pour mettre à jour les annonces 
    editAnnonce(){
    axios.patch('http://localhost:8000/api/annonces/'+ localStorage.getItem('ID'), {
        description: this.state.nouvelleDescription,
        titre: this.state.nouveauTitre, 
    },{
        headers: {
            'Content-Type': 'application/merge-patch+json'
        }
    }
    ).then(res => console.log(res));
    }


    //On crée des méthodes pour changer chaques champs
    changeDescription(e){
        this.setState({nouvelleDescription: e.target.value})
    }

    changeTitre(e){
        this.setState({nouveauTitre: e.target.value})
    }


    render() {
        return (
            <div > 
                <section data-type={this.props.typeAnnonce} className={"search-result-item border " + this.state.effectRemove}>
                      
                            <img
                            className="image-annonce image-link"
                            src={"http://localhost:8000/uploads/annonces/" + this.props.photoAnnonce}
                            alt="imageAnnonce"
                            />
                        
                        <div className="search-result-item-body ">
                            <div className="row">
                            <div className="col-sm-9">
                                <div className="search-result-item-heading">
                                    <br />
                                <Link to={process.env.PUBLIC_URL + "/Annonce-" + this.props.idAnnonce}><h4>{this.props.titreEnvoi}</h4></Link>
                                <hr />
                                </div>
                                <p className="description text-justify">
                                {this.props.descriptionEnvoi}
                                </p>
                            </div>
                            <div className="col-sm-3 text-align-center">
                            <br />
                            <span className="badge badge-pill bg-warning text-white  fw-normal pull-right">
                                {this.state.categorieLabel}
                                </span>
                                <p className="value3 mt-sm">Le {this.props.dateEnvoi}</p>
                                <p className="value3 mt-sm">Ville : {this.props.villeEnvoi}</p>
                                <button className="btn btn-outline-dark  btn-sm" onClick={this.deleteAnnonce}>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                                    </svg>
                                </button> &nbsp;
                                <button className="btn btn-outline-dark  btn-sm" onClick={this.editAnnonce} data-toggle="modal" data-target="#editModal">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                                </button> 
                                
                            </div>  
                        </div>
                    </div>
                </section>
                 {/* MODAL EDIT*/}
                 <div className="modal fade" id="editModal">
                    <div className="modal-dialog">
                        <div className="modal-content">      
                            <div className="modal-header">
                                <h4 className="modal-title">Editer mon annonce</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                            <div className="form-group">
                                    <label>Editer le titre</label>
                                    <input className="form-control" onChange={this.changeTitre} value={this.state.nouveauTitre} required defaultValue={""} />
                                </div>
                                <div className="form-group">
                                    <label>Editer l'annonce</label>
                                    <textarea className="form-control" onChange={this.changeDescription} value={this.state.nouvelleDescription} required defaultValue={""} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Annuler"/>
                                <input type="submit" className="btn btn-info" data-dismiss="modal" onClick={this.editAnnonce} defaultValue="Save" />
                            </div>                   
                        </div>
                    </div>
                </div>
                < br />
            </div>
        )
    }
};
