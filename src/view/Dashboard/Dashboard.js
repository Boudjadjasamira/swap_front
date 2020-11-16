import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import CardDashboard from '../../components/CardDashboard/CardDashboard';
import MessageRow from '../../components/MessageRow/MessageRow';
import axios from 'axios';
import SimpleReactLightbox from 'simple-react-lightbox'

import '../../css/loading.css';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
          allContact: [],
          showLoading: true
        }
    }
      
    componentDidMount() {
        document.title = "Dashboard";
        axios.get(`http://localhost:8000/api/contacts`)
        .then(res => {
            this.setState({ allContact: res.data['hydra:member'], showLoading: false });
        })
    } 

    render() {
        return (
            <div className="body">
                <CardDashboard> </CardDashboard>
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
                            {this.state.showLoading ? 
                                <div className="text-center">
                  <             div class="loadingio-spinner-spin-gkmwr87oy9"><div class="ldio-qorx55o730n"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div></div>
                                </div>
                            :
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
                                   <SimpleReactLightbox><MessageRow idContact={e.id}></MessageRow></SimpleReactLightbox>
                                ))}
                                </tbody>
                            </table>
                            }
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