import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import CardDashboard from '../../components/CardDashboard/CardDashboard';
import axios from 'axios';
import AvisRow from '../../components/AvisRow/AvisRow';

export default class Avis extends Component {

    constructor(props){
        super(props);
        this.state = {
            allAvis : [],
            IdUserEnvoi: "",
            avis: "",
            dateAvis: "",
            note: true
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/avis')
        .then( res => {
            this.setState({allAvis: res.data['hydra:member'], showLoading: false});
        });
    }
    
  render() {
    return (

<div className="body">
    <div className="container-fluid">   
        <CardDashboard></CardDashboard>
            <div className="container-fluid">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2> MODERATION AVIS</h2>
                                </div>
                            </div>
                        </div>
                        
                        {this.state.showLoading ? 
                                <div className="text-center">
                                    <div class="loadingio-spinner-spin-72vopomcjiw"><div class="ldio-1j0dsquuvl3">
                                    <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
                                    </div></div>
                                </div>
                            :
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Pseudo</th>
                                    <th>Date</th>
                                    <th>Note</th>
                                    <th>Avis</th>
                                    <th>Options</th>
                                </tr>
                            </thead> 
                            
                            <tbody>
                                {this.state.allAvis.map(e => (
                                    <AvisRow idAvis={e.id} idUserEnvoi={e.idUser} avis={e.avis} dateAvis={e.dateAvis} note={e.note}></AvisRow>
                                ))}
                            </tbody>
                            
                            
                        </table>
                        }
                    </div>
                </div>
            </div>   
                
                           
                    
            {/* Edit Modal HTML */}
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                <div className="modal-content">
                    <form>
                    <div className="modal-header">
                        <h4 className="modal-title">Moderer avis</h4>
                        <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                        >
                        ×
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                        <label>Avis</label>
                        <textarea className="form-control" required defaultValue={""} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <input
                        type="button"
                        className="btn btn-default"
                        data-dismiss="modal"
                        defaultValue="Annuler"
                        />
                        <input type="submit" className="btn btn-info" defaultValue="Save" />
                    </div>
                    </form>
                </div>
                </div>
            </div>
            {/* Delete Modal HTML */}
            <div id="deleteEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <form>
                        <div className="modal-header">
                            <h4 className="modal-title">Supprimer l'avis</h4>
                            <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-hidden="true"
                            >
                            ×
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Etes-vous sur ? Cette action est irréversible !</p>
                        </div>
                        <div className="modal-footer">
                            <input
                            type="button"
                            className="btn btn-default"
                            data-dismiss="modal"
                            defaultValue="Annuler"
                            />
                            <input
                            type="submit"
                            className="btn btn-danger"
                            defaultValue="Supprimer"
                            />
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>        
    </div>
    
);
}
}

