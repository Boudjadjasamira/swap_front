import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import CardDashboard from '../../components/CardDashboard/CardDashboard';
import AnnoncesRow from '../../components/AnnoncesRow/AnnoncesRow';
import axios from 'axios';
import '../../css/spinnerCss/violet.css';

export default class AdminAnnonces extends Component {

    constructor(props){
        super(props);
        this.state = {
            allAnnonces: [],
            showLoading: true
        }
    }
    
    componentDidMount(){
        document.title = "Dashboard - Annonces"
        axios.get('http://localhost:8000/api/annonces')
        .then((res => {
            this.setState({allAnnonces: res.data['hydra:member'], showLoading: false});
        }))
    }
    
    render() {
    return (
        <div className="body" id="bodyHome" >
            
            <CardDashboard></CardDashboard>
            <div className="container-fluid">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>MODERATION ANNONCES</h2>
                                </div>
                            </div>
                        </div>
                        {this.state.showLoading ? 
                            <div className="text-center">
                                <div class="loadingio-spinner-spin-0gjuzjgw2ib"><div class="ldio-cy9rqjf1ny4">
                                <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
                                </div></div>                            
                            </div>
                            :
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Pseudo</th>
                                    <th scope="col">Catégories</th>
                                    <th scope="col">Annonces</th>
                                    <th scope="col">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.allAnnonces.map(e => (
                                    <AnnoncesRow idAnnonces={e.id}></AnnoncesRow>
                                ))}
                                
                            </tbody>
                        </table>}
                        <div className="clearfix"></div> 
                        
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