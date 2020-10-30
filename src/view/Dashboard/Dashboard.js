import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import axios from 'axios';
import CardDashboard from '../../components/CardDashboard/CardDashboard';
import MessageRow from '../../components/MessageRow/MessageRow';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
          allContact: [],
        }
    }
      
    componentDidMount() {
        document.title = "Dashboard";
        axios.get(`http://localhost:8000/api/contacts`)
        .then(res => {
            this.setState({ allContact: res.data['hydra:member'] });
        })
    } 

    render() {
        return (
            <div className="body" id="bodyHome">
                <CardDashboard nombreMessagesContact={this.state.allContact.length.toString()}> </CardDashboard>
                <div className="container-fluid">
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <div className="table-title">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h2>MESSAGES</h2>
                                    </div>
                                </div>
                            </div>
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Nom</th>
                                        <th>Prenom</th>
                                        <th>Catégorie</th>
                                        <th>Message</th>
                                        <th>Piece-jointe</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.allContact.map(e => (
                                    <MessageRow idContact={e.id}></MessageRow>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>     
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p className="h6">SWAP - 2020 Tous droits réservés</p>
                    </div>
                </div>
            </div>
        );
    }
}