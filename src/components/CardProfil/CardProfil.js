import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class CardProfil extends Component {

    constructor(props){
        super(props);
        this.state = {
            labelCategorie: ""
        }
    }

    componentDidMount(){
        axios.get('http://51.68.44.146:8000/api/categories/' + this.props.categorieEnvoi)
            .then(res => {
                console.log(res.data['titre']);
                this.setState({labelCategorie: res.data['titre']});
            });
    }

    render() {
        return (
            <div > 
                <section data-type={this.props.typeAnnonce} className={"search-result-item border"}>
                      
                        <img className="image-annonce image-link" src={"http://51.68.44.146:8000/uploads/annonces/" + this.props.photoAnnonce} alt={this.props.photoAnnonce}/>
                        
                        <div className="search-result-item-body ">
                            <div className="row">
                                <div className="col-sm-9">
                                    <div className="search-result-item-heading">
                                        <br />
                                        <Link to={process.env.PUBLIC_URL + "/Annonce-" + this.props.idAnnonce}><h4>{this.props.titreEnvoi}</h4></Link>
                                        <hr />
                                    </div>
                                    <p className="description text-justify">{this.props.descriptionEnvoi}</p>
                                </div>
                                <div className="col-sm-3 text-align-center">
                                    <br />
                                    <span className="badge badge-pill bg-warning text-white fw-normal pull-right">{this.state.labelCategorie}</span>
                                    <p className="value3 mt-sm">Le {this.props.dateEnvoi}</p>
                                    <p className="value3 mt-sm">Ville : {this.props.villeEnvoi}</p>
                                </div>
                            </div>
                        </div>
                </section>
                < br />
            </div>

        )
    }
};
