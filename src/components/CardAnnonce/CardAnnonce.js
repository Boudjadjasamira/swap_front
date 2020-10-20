import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class CardAnnonce extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // removed: true,
            effectRemove: "animate__animated animate__fadeInDown"
        }
        this.deleteAnnonce = this.deleteAnnonce.bind(this);
    }

    deleteAnnonce() {
        axios.delete('http://localhost:8000/api/annonces/' + this.props.idAnnonce)
        .then(res => {
            this.setState({effectRemove: "animate__animated animate__fadeOutRight"});
        
            setTimeout(() => {
                this.setState({removed: true});
            }, 1000);
        })
    }

    render() {
        return (
            <div>
                <div className={"row pb-3 " + this.state.effectRemove}>
                    <div className="col-12">
                        <div className="media border p-3 flex-column flex-md-row">
                            <img
                                src="https://via.placeholder.com/100x100"
                                alt="#"
                                className="align-self-center mr-3"
                                style={{ width: 100 }}
                            />
                            <div className="media-body align-self-center">
                                <Link to={process.env.PUBLIC_URL + "/Annonces/" + this.props.idAnnonce}><h4>{this.props.titreEnvoi}</h4></Link>
                                <small>
                                    <i>Posté par {this.props.pseudoEnvoi}, le {this.props.dateEnvoi}</i>
                                </small>
                                <hr />
                                <p>
                                    {this.props.descriptionEnvoi}
                                </p>
                                <button onClick={this.deleteAnnonce}>Supprimer</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
};
