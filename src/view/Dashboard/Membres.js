import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import CardDashboard from '../../components/CardDashboard/CardDashboard';
import UserRowMember from '../../components/UserRowMember/UserRowMember';
import axios from 'axios';

export default class Membres extends Component {

    constructor(props){
        super(props);
        this.state = {
            allMembers : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/users')
        .then( res => {
            this.setState({allMembers: res.data['hydra:member']});
        });
    }
    
    render() {
    return (
        <div className="body" id="bodyHome">
            <CardDashboard></CardDashboard>
            <div className="container-fluid">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>GESTION MEMBRES</h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addEmployeModal" className="btn btn-secondary" data-toggle="modal">
                                        <i className="material-icons"></i>
                                        <span>Ajouter un membre</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Pseudo</th>
                                    <th>Email</th>
                                    <th>Certifié</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.allMembers.map(e => (
                                    <UserRowMember nomPersonne={e.nom} prenomPersonne={e.prenom} mailPersonne={e.mail} idPersonne={e.id}></UserRowMember>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>   
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                    <p className="h6">SWAP - 2020 Tous droits réservés</p>
                </div>
            </div>
        </div>
        );
    }
}