import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Category extends Component {

    render() {
        return (

            <div>
                {/*Section card catégories */}
                < center >
                    <h1>Catégories</h1>
                </center >
                <br />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Link className="" to={process.env.PUBLIC_URL + "/Categorie/Bricolage"}>
                                <div className="card-counter secondary">
                                    <span className="count-name">BRICOLAGE</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link className="" to={process.env.PUBLIC_URL + "/Categorie/Cours"}>
                                <div className="card-counter secondary">
                                    <span className="count-name">COURS</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link className="" to={process.env.PUBLIC_URL + "/Categorie/AideALaPersonne"}>
                                <div className="card-counter secondary">
                                    <span className="count-name">AIDE A LA PERSONNE</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link className="" to={process.env.PUBLIC_URL + "/Categorie/Maison"}>
                                <div className="card-counter secondary">
                                    <span className="count-name">MAISON</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Link className="" to={process.env.PUBLIC_URL + "/Categorie/Mecanique"}>
                                <div className="card-counter secondary">
                                    <span className="count-name">MECANIQUE</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link className="" to={process.env.PUBLIC_URL + "/Categorie/Beaute"}>
                                <div className="card-counter secondary">
                                    <span className="count-name">BEAUTE</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link className="" to={process.env.PUBLIC_URL + "/Categorie/Loisirs"}>
                                <div className="card-counter secondary">
                                    <span className="count-name">LOISIRS</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link className="" to={process.env.PUBLIC_URL + "/Categorie/Vacances"}>
                                <div className="card-counter secondary">
                                    <span className="count-name">VACANCES</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                {/*Fin card catégorie */}
            </div>

        )

    }
};
