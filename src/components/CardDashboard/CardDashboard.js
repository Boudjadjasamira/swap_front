import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class CardDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
          nombreMessagesContact: 0,
          nombreAnnonces: 0,
          nombreUtilisateurs: 0
        }
    }
      
    componentDidMount() {
        document.title = "Dashboard";
        axios.get(`http://localhost:8000/api/contacts`)
        .then(res => {
            this.setState({ nombreMessagesContact: res.data['hydra:member'].length.toString() });
        })

        axios.get(`http://localhost:8000/api/annonces`)
        .then(res => {
            this.setState({ nombreAnnonces: res.data['hydra:member'].length.toString() });
        })

        axios.get(`http://localhost:8000/api/users`)
        .then(res => {
            this.setState({ nombreUtilisateurs: res.data['hydra:member'].length.toString() });
        })        
    } 

    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-light bg-light nav justify-content-center">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                        <img src="../assets/img/logo.png" alt="logo" width="80%" />
                    </Link> 
                </nav>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="card-box bg-blue">
                            <div className="inner">
                                <h3 id="nombreMessagesContacts">{this.state.nombreMessagesContact} </h3>
                                <p> MESSAGES </p>
                            </div>
                            <div className="icon">
                                <i className="fa fa-comment" aria-hidden="true" />
                            </div>
                            <Link className="card-box-footer" to={process.env.PUBLIC_URL + "/Dashboard"}> Voir plus <i className="fa fa-arrow-circle-right" /></Link>  
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="card-box bg-green">
                            <div className="inner">
                                <h3 > {this.state.nombreUtilisateurs} </h3>
                                <p> MEMBRES</p>
                            </div>
                            <div className="icon">
                                <i className="fa fa fa-users" aria-hidden="true" />
                            </div>
                            <Link className="card-box-footer" to={process.env.PUBLIC_URL + "/Dashboard/Membres"}> Voir plus <i className="fa fa-arrow-circle-right" /></Link>  
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="card-box bg-orange">
                            <div className="inner">
                                <h3>650 </h3>
                                <p> AVIS </p>
                            </div>
                            <div className="icon">
                                <i className="fa fa-star" aria-hidden="true" />
                            </div>
                            <Link className="card-box-footer" to={process.env.PUBLIC_URL + "/Dashboard/Avis"}> Voir plus <i className="fa fa-arrow-circle-right" /></Link>  
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="card-box bg-red">
                            <div className="inner">
                                <h3 id="nombresAnnoncesTotal"> {this.state.nombreAnnonces} </h3>
                                <p> ANNONCES </p>
                            </div>
                            <div className="icon">
                                <i className="fa fa-list-alt" />
                            </div>
                            <Link className="card-box-footer" to={process.env.PUBLIC_URL + "/Dashboard/AdminAnnonces"}> Voir plus <i className="fa fa-arrow-circle-right" /></Link>  
                        </div>
                    </div>
                </div>
            </div>
        );
    }  
};