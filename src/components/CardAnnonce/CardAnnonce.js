import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class CardAnnonce extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // removed: true,
            effectRemove: "animate__animated animate__fadeInDown",
            categorieLabel: this.props.categorieEnvoi,
            pseudo: "",
            codePostal: "",
            description: "",
            titrePhoto: "",
            type: 0,
            ville: ""
        }
        this.deleteAnnonce = this.deleteAnnonce.bind(this);
    }

    componentDidMount(){
        /* eslint eqeqeq: 0 */
        this.props.lesCategories.forEach(
            element => {
                if(element.id == this.props.categorieEnvoi){
                    this.setState({categorieLabel: element.titre})
                }
            }
        );
        
        axios.get('http://149.91.89.142:8000/api/users')
        .then(res => {
            res.data['hydra:member'].map(e => {
                if(e.id == this.props.idUserEnvoi){
                    this.setState({pseudo: e.pseudo})
                }
                return true
            })
        })
    }

    deleteAnnonce() {
        axios.delete('http://149.91.89.142:8000/api/annonces/' + this.props.idAnnonce)
            .then(res => {
                this.setState({ effectRemove: "animate__animated animate__fadeOutRight" });

                setTimeout(() => {
                    this.setState({ removed: true });
                }, 1000);
            })
    }

    render() {
        return (
            <div > 
                <section data-type={this.props.typeAnnonce} className={"search-result-item border " + this.state.effectRemove}>
                      
                            <img
                            className="image-annonce image-link"
                            src={"http://149.91.89.142:8000/uploads/annonces/" + this.props.photoAnnonce}
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
                                <p className="value3 mt-sm">Posté par {this.state.pseudo}</p>
                                <p className="value3 mt-sm">Le {this.props.dateEnvoi}</p>
                                <p className="value3 mt-sm">Code Postal : {this.props.codePostalEnvoi}</p>
                                <p className="value3 mt-sm">Ville : {this.props.villeEnvoi}</p>
                                {/* <button className="btn btn-outline-dark  btn-sm" onClick={this.deleteAnnonce}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                        </svg></button> */}
                            </div>
                            </div>
                        </div>
                </section>
                < br />
            </div>

        )
    }
};
