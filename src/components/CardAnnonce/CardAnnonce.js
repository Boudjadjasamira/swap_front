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
                this.setState({ effectRemove: "animate__animated animate__fadeOutRight" });

                setTimeout(() => {
                    this.setState({ removed: true });
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
                            <div className="d-flex">
                            <div className="p-1 "><Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>{this.props.titreEnvoi}</h4></Link></div>
                            <div className="ml-auto p-2"><small><i>Posté par {this.props.pseudoEnvoi}, le {this.props.dateEnvoi}</i></small></div>
                            </div>
                                <hr />
                                <p className="text-justify">
                                    {this.props.descriptionEnvoi}
                                </p>
                                <br />
                                <button class="btn btn-outline-dark  btn-sm" onClick={this.deleteAnnonce}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
</svg></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
};
