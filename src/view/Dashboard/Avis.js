import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import { Link } from 'react-router-dom';
import CardDashboard from '../../components/CardDashboard/CardDashboard';

export default class Avis extends Component {
    
  render() {
    return (

<div className="body" id="bodyHome">
  {/* Just an image */}

                <div className="container-fluid">                   
                    
                <CardDashboard></CardDashboard>
                            <div className="container-fluid">
                                <div className="table-responsive">
                                <div className="table-wrapper">
                                    <div className="table-title">
                                    <div className="row">
                                        <div className="col-sm-6">
                                        <h2>
                                            MODERATION AVIS
                                        </h2>
                                        </div>
                                        
                                    </div>
                                    </div>
                                    <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                        <th>
                                            <span className="custom-checkbox">
                                            <input type="checkbox" id="selectAll" />
                                            <label htmlFor="selectAll" />
                                            </span>
                                        </th>
                                        <th scope="col">Pseudo</th>
                                        <th scope="col">Note</th>
                                        <th scope="col">Avis</th>
                                        <th scope="col">Options</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>
                                            <span className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                id="checkbox1"
                                                name="options[]"
                                                defaultValue={1}
                                            />
                                            <label htmlFor="checkbox1" />
                                            </span>
                                        </td>
                                        <td>Jane Doe</td>
                                        <td><div className="rating">
                                                                <input
                                                                    type="radio"
                                                                    id="star5"
                                                                    name="rating"
                                                                    defaultValue={5}
                                                                />
                                                                <label htmlFor="star5" title="Super !">
                                                                    5 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star4"
                                                                    name="rating"
                                                                    defaultValue={4}
                                                                />
                                                                <label htmlFor="star4" title="Satisfaisant">
                                                                    4 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star3"
                                                                    name="rating"
                                                                    defaultValue={3}
                                                                />
                                                                <label htmlFor="star3" title="Moyen">
                                                                    3 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star2"
                                                                    name="rating"
                                                                    defaultValue={2}
                                                                />
                                                                <label htmlFor="star2" title="Acceptable">
                                                                    2 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star1"
                                                                    name="rating"
                                                                    defaultValue={1}
                                                                />
                                                                <label htmlFor="star1" title="Bof">
                                                                    1 star
                        </label>
                                                            </div></td>
                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                                        <td>
                                            <a
                                            href="#editEmployeeModal"
                                            className="edit"
                                            data-toggle="modal"
                                            >
                                            <i
                                                className="material-icons"
                                                data-toggle="tooltip"
                                                title="Moderer"
                                            >
                                                
                                            </i>
                                            </a>
                                            <a
                                            href="#deleteEmployeeModal"
                                            className="delete"
                                            data-toggle="modal"
                                            >
                                            <i
                                                className="material-icons"
                                                data-toggle="tooltip"
                                                title="Supprimer"
                                            >
                                                
                                            </i>
                                            </a>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <span className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                id="checkbox1"
                                                name="options[]"
                                                defaultValue={1}
                                            />
                                            <label htmlFor="checkbox1" />
                                            </span>
                                        </td>
                                        <td>Jane Doe</td>
                                        <td><div className="rating">
                                                                <input
                                                                    type="radio"
                                                                    id="star5"
                                                                    name="rating"
                                                                    defaultValue={5}
                                                                />
                                                                <label htmlFor="star5" title="Super !">
                                                                    5 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star4"
                                                                    name="rating"
                                                                    defaultValue={4}
                                                                />
                                                                <label htmlFor="star4" title="Satisfaisant">
                                                                    4 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star3"
                                                                    name="rating"
                                                                    defaultValue={3}
                                                                />
                                                                <label htmlFor="star3" title="Moyen">
                                                                    3 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star2"
                                                                    name="rating"
                                                                    defaultValue={2}
                                                                />
                                                                <label htmlFor="star2" title="Acceptable">
                                                                    2 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star1"
                                                                    name="rating"
                                                                    defaultValue={1}
                                                                />
                                                                <label htmlFor="star1" title="Bof">
                                                                    1 star
                        </label>
                                                            </div></td>
                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                                        <td>
                                            <a
                                            href="#editEmployeeModal"
                                            className="edit"
                                            data-toggle="modal"
                                            >
                                            <i
                                                className="material-icons"
                                                data-toggle="tooltip"
                                                title="Moderer"
                                            >
                                                
                                            </i>
                                            </a>
                                            <a
                                            href="#deleteEmployeeModal"
                                            className="delete"
                                            data-toggle="modal"
                                            >
                                            <i
                                                className="material-icons"
                                                data-toggle="tooltip"
                                                title="Supprimer"
                                            >
                                                
                                            </i>
                                            </a>
                                        </td>
                                        </tr><tr>
                                        <td>
                                            <span className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                id="checkbox1"
                                                name="options[]"
                                                defaultValue={1}
                                            />
                                            <label htmlFor="checkbox1" />
                                            </span>
                                        </td>
                                        <td>Jane Doe</td>
                                        <td><div className="rating">
                                                                <input
                                                                    type="radio"
                                                                    id="star5"
                                                                    name="rating"
                                                                    defaultValue={5}
                                                                />
                                                                <label htmlFor="star5" title="Super !">
                                                                    5 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star4"
                                                                    name="rating"
                                                                    defaultValue={4}
                                                                />
                                                                <label htmlFor="star4" title="Satisfaisant">
                                                                    4 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star3"
                                                                    name="rating"
                                                                    defaultValue={3}
                                                                />
                                                                <label htmlFor="star3" title="Moyen">
                                                                    3 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star2"
                                                                    name="rating"
                                                                    defaultValue={2}
                                                                />
                                                                <label htmlFor="star2" title="Acceptable">
                                                                    2 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star1"
                                                                    name="rating"
                                                                    defaultValue={1}
                                                                />
                                                                <label htmlFor="star1" title="Bof">
                                                                    1 star
                        </label>
                                                            </div></td>
                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                                        <td>
                                            <a
                                            href="#editEmployeeModal"
                                            className="edit"
                                            data-toggle="modal"
                                            >
                                            <i
                                                className="material-icons"
                                                data-toggle="tooltip"
                                                title="Moderer"
                                            >
                                                
                                            </i>
                                            </a>
                                            <a
                                            href="#deleteEmployeeModal"
                                            className="delete"
                                            data-toggle="modal"
                                            >
                                            <i
                                                className="material-icons"
                                                data-toggle="tooltip"
                                                title="Supprimer"
                                            >
                                                
                                            </i>
                                            </a>
                                        </td>
                                        </tr><tr>
                                        <td>
                                            <span className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                id="checkbox1"
                                                name="options[]"
                                                defaultValue={1}
                                            />
                                            <label htmlFor="checkbox1" />
                                            </span>
                                        </td>
                                        <td>Jane Doe</td>
                                        <td><div className="rating">
                                                                <input
                                                                    type="radio"
                                                                    id="star5"
                                                                    name="rating"
                                                                    defaultValue={5}
                                                                />
                                                                <label htmlFor="star5" title="Super !">
                                                                    5 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star4"
                                                                    name="rating"
                                                                    defaultValue={4}
                                                                />
                                                                <label htmlFor="star4" title="Satisfaisant">
                                                                    4 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star3"
                                                                    name="rating"
                                                                    defaultValue={3}
                                                                />
                                                                <label htmlFor="star3" title="Moyen">
                                                                    3 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star2"
                                                                    name="rating"
                                                                    defaultValue={2}
                                                                />
                                                                <label htmlFor="star2" title="Acceptable">
                                                                    2 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star1"
                                                                    name="rating"
                                                                    defaultValue={1}
                                                                />
                                                                <label htmlFor="star1" title="Bof">
                                                                    1 star
                        </label>
                                                            </div></td>
                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                                        <td>
                                            <a
                                            href="#editEmployeeModal"
                                            className="edit"
                                            data-toggle="modal"
                                            >
                                            <i
                                                className="material-icons"
                                                data-toggle="tooltip"
                                                title="Moderer"
                                            >
                                                
                                            </i>
                                            </a>
                                            <a
                                            href="#deleteEmployeeModal"
                                            className="delete"
                                            data-toggle="modal"
                                            >
                                            <i
                                                className="material-icons"
                                                data-toggle="tooltip"
                                                title="Supprimer"
                                            >
                                                
                                            </i>
                                            </a>
                                        </td>
                                        </tr><tr>
                                        <td>
                                            <span className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                id="checkbox1"
                                                name="options[]"
                                                defaultValue={1}
                                            />
                                            <label htmlFor="checkbox1" />
                                            </span>
                                        </td>
                                        <td>Jane Doe</td>
                                        <td><div className="rating">
                                                                <input
                                                                    type="radio"
                                                                    id="star5"
                                                                    name="rating"
                                                                    defaultValue={5}
                                                                />
                                                                <label htmlFor="star5" title="Super !">
                                                                    5 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star4"
                                                                    name="rating"
                                                                    defaultValue={4}
                                                                />
                                                                <label htmlFor="star4" title="Satisfaisant">
                                                                    4 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star3"
                                                                    name="rating"
                                                                    defaultValue={3}
                                                                />
                                                                <label htmlFor="star3" title="Moyen">
                                                                    3 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star2"
                                                                    name="rating"
                                                                    defaultValue={2}
                                                                />
                                                                <label htmlFor="star2" title="Acceptable">
                                                                    2 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star1"
                                                                    name="rating"
                                                                    defaultValue={1}
                                                                />
                                                                <label htmlFor="star1" title="Bof">
                                                                    1 star
                        </label>
                                                            </div></td>
                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                                        <td>
                                            <a
                                            href="#editEmployeeModal"
                                            className="edit"
                                            data-toggle="modal"
                                            >
                                            <i
                                                className="material-icons"
                                                data-toggle="tooltip"
                                                title="Moderer"
                                            >
                                                
                                            </i>
                                            </a>
                                            <a
                                            href="#deleteEmployeeModal"
                                            className="delete"
                                            data-toggle="modal"
                                            >
                                            <i
                                                className="material-icons"
                                                data-toggle="tooltip"
                                                title="Supprimer"
                                            >
                                                
                                            </i>
                                            </a>
                                        </td>
                                        </tr>


                                       
                                    </tbody>
                                    </table>
                                    <div className="clearfix">
                                    
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* Edit Modal HTML */}
                            
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

