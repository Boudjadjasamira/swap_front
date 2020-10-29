import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class CardDashboard extends Component {

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
                            <h3>{this.props.nombreMessagesContact} </h3>
                            <p> MESSAGES </p>
                            </div>
                            <div className="icon">
                            <i className="fa fa-comment" aria-hidden="true" />
                            </div>
                            <Link className="card-box-footer" to={process.env.PUBLIC_URL + "/Dashboard"}> View More <i className="fa fa-arrow-circle-right" /></Link>  
                        </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                        <div className="card-box bg-green">
                            <div className="inner">
                            <h3> 183 </h3>
                            <p> MEMBRES</p>
                            </div>
                            <div className="icon">
                            <i className="fa fa fa-users" aria-hidden="true" />
                            </div>
                            <Link className="card-box-footer" to={process.env.PUBLIC_URL + "/Membres"}> View More <i className="fa fa-arrow-circle-right" /></Link>  
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
                            <Link className="card-box-footer" to={process.env.PUBLIC_URL + "/Avis"}> View More <i className="fa fa-arrow-circle-right" /></Link>  
                        </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                        <div className="card-box bg-red">
                            <div className="inner">
                            <h3> 820 </h3>
                            <p> ANNONCES </p>
                            </div>
                            <div className="icon">
                            <i className="fa fa-list-alt" />
                            </div>
                            <Link className="card-box-footer" to={process.env.PUBLIC_URL + "/AdminAnnonces"}> View More <i className="fa fa-arrow-circle-right" /></Link>  
                        </div>
                        </div>
            </div>
            </div>
 


         )
        }
        
         
};