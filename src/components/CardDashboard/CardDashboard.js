import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class CardDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
          nombreMessagesContact: 0,
          nombreAnnonces: 0,
          nombreUtilisateurs: 0,
          nombreAvis: 0,
          dateToday : new Date().toLocaleString(),
        }
    }
      
    componentDidMount() {
        document.title = "Dashboard";
        axios.get(`http://149.91.89.142:8000/api/contacts`)
        .then(res => {
            this.setState({ nombreMessagesContact: res.data['hydra:member'].length.toString() });
        })

        axios.get(`http://149.91.89.142:8000/api/annonces`)
        .then(res => {
            this.setState({ nombreAnnonces: res.data['hydra:member'].length.toString() });
        })

        axios.get(`http://149.91.89.142:8000/api/users`)
        .then(res => {
            this.setState({ nombreUtilisateurs: res.data['hydra:member'].length.toString() });
        })  
        axios.get(`http://149.91.89.142:8000/api/avis`)
        .then(res => {
            this.setState({ nombreAvis: res.data['hydra:member'].length.toString() });
        })     
        
        //Requete pour recuperer les infos utilisateurs/ID
        axios.get(`http://149.91.89.142:8000/api/users/` + localStorage.getItem('ID'))
        .then(res =>
            this.setState({
            pseudo: res.data.pseudo,
            nom: res.data.nom,
            prenom: res.data.prenom,
            mail: res.data.mail,
            codePostal: res.data.codePostal,
            description: res.data.description,
            titrePhoto: res.data.photo
            })
        )
  
    } 

    render() {
        return (
            <div className="container-fluid">
                <nav className="navbarDash navbar-light bg-light nav justify-content-between">
                <p className="text-white  " style={{paddingTop:'60px',paddingLeft:'30px', paddingRight:'200px'}}>Nous sommes le  {this.state.dateToday} &nbsp;</p>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                        <img  src="../assets/img/swap_light.png" alt="logo" width="60%" style={{paddingBottom:'15px', paddingRight:'50px'}}/>
                    </Link> 
                    <p className="text-white  " style={{paddingTop:'60px',paddingRight:'20px'}}>Bienvenue {this.state.pseudo} &nbsp;
                    <Link type="button" className="btn btn-secondary"  to={process.env.PUBLIC_URL + "/Logout"}>
                    <p className="text-white ">Déconnexion </p> 
                    </Link></p> 
                    
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
                            <Link className="card-box-footer" to={process.env.PUBLIC_URL + "/Dashboard-Membres"}> Voir plus <i className="fa fa-arrow-circle-right" /></Link>  
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="card-box bg-orange">
                            <div className="inner">
                                <h3>{this.state.nombreAvis} </h3>
                                <p> AVIS </p>
                            </div>
                            <div className="icon">
                                <i className="fa fa-star" aria-hidden="true" />
                            </div>
                            <Link className="card-box-footer" to={process.env.PUBLIC_URL + "/Dashboard-Avis"}> Voir plus <i className="fa fa-arrow-circle-right" /></Link>  
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
                            <Link className="card-box-footer" to={process.env.PUBLIC_URL + "/Dashboard-AdminAnnonces"}> Voir plus <i className="fa fa-arrow-circle-right" /></Link>  
                        </div>
                    </div>
                </div>
            </div>
        );
    }  
};