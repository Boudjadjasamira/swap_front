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
        this.deleteMessage = this.deleteMessage.bind(this);
       
      }
    
      componentDidMount() {
        document.title = "Dashboard";
    
        axios.get(`http://localhost:8000/api/contacts`)
    .then(res => {
      this.setState({ allContact: res.data['hydra:member'] });
    })
    

    } 

    deleteMessage() {
        axios.delete('http://localhost:8000/api/contacts/' + this.props.idContact)
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
                                        <h2>
                                            MESSAGES
                                        </h2>
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
                                    
                                    
                                    {this.state.allContact.map(e => (
                                        <MessageRow idContact={e.id}></MessageRow>
                                        ))}
                                        </table>
                                </div>
                                </div>
                                
                            </div>
                            
                  
                            
                            {/* Edit Modal HTML */}
                            <div id="editEmployeeModal" className="modal fade">
                                <div className="modal-dialog">
                                <div className="modal-content">
                                    <form>
                                    <div className="modal-header">
                                        <h4 className="modal-title">Envoyer message</h4>
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
                                        <label>Pseudo</label>
                                        <input type="text" className="form-control" required />
                                        </div>
                                        <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" required />
                                        </div>
                                        <div className="form-group">
                                        <label>Message</label>
                                        <textarea className="form-control" required defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <input
                                        type="button"
                                        className="btn btn-default"
                                        data-dismiss="modal"
                                        defaultValue="Cancel"
                                        />
                                        <input type="submit" className="btn btn-info" defaultValue="Envoyer" />
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
                                        <h4 className="modal-title">Supprimer le message</h4>
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
                                        <button className="btn btn-warning" onClick={this.deleteMessage}>Supprimer</button>
                                    </div>
                                    </form>
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

