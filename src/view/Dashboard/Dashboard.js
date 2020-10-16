import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';


export default class Dashboard extends Component {

    render() {
        return (

            <div>

                {/* Navbar */}
                <div className="horizontal-menu">
                    <nav className="navbar top-navbar col-lg-12 col-12 p-0">
                        <div className="container-fluid">
                            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
                                <ul className="navbar-nav navbar-nav-left">
                                    <li className="nav-item nav-search d-none d-lg-block ml-3"></li>
                                </ul>
                                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                                    <a className="navbar-brand brand-logo" href="index.html">
                                        <img src="../images/logo.png" alt="logo" />
                                    </a>
                                    <a className="navbar-brand brand-logo-mini" href="index.html">
                                        <img src="../images/logo.png" alt="logo" />
                                    </a>
                                </div>
                                <ul className="navbar-nav navbar-nav-right">
                                    <li className="nav-item nav-profile dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            data-toggle="dropdown"
                                            id="profileDropdown"
                                        >
                                            <span className="nav-profile-name">Admin</span>
                                            <span className="online-status" />
                                            <img src="../images/avatar/avatar.jpg" alt="profile" />
                                        </a>
                                        <div
                                            className="dropdown-menu dropdown-menu-right navbar-dropdown"
                                            aria-labelledby="profileDropdown"
                                        >
                                            <a className="dropdown-item">
                                                <i className="mdi mdi-logout text-primary" /> Logout
                </a>
                                        </div>
                                    </li>
                                </ul>
                                <button
                                    className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                                    type="button"
                                    data-toggle="horizontal-menu-toggle"
                                >
                                    <span className="mdi mdi-menu" />
                                </button>
                            </div>
                        </div>
                    </nav>
                    <nav className="bottom-navbar">
                        <div className="container">
                            <ul className="nav page-navigation">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">
                                        <i className="mdi  mdi-desktop-mac-dashboard  menu-icon" />
                                        <span className="menu-title">Dashboard</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="user_admin.html" className="nav-link">
                                        <i className="mdi mdi mdi-account menu-icon" />
                                        <span className="menu-title">Utilisateurs</span>
                                        <i className="menu-arrow" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="review_admin.html" className="nav-link">
                                        <i className="mdi  mdi-star-circle menu-icon" />
                                        <span className="menu-title">Avis</span>
                                        <i className="menu-arrow" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="annonces_admin.html" className="nav-link">
                                        <i className="mdi mdi-format-list-bulleted menu-icon" />
                                        <span className="menu-title">Annonces</span>
                                        <i className="menu-arrow" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="messages_admin.html" className="nav-link">
                                        <i className="mdi mdi-message-processing menu-icon" />
                                        <span className="menu-title">Messages</span>
                                        <i className="menu-arrow" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                {/* Encart infos */}
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="row">
                                <div className="col-lg-3 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body pb-5">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h2 className="text-light font-weight-bold">123456</h2>
                                                <i className="mdi mdi-format-list-bulleted mdi-18px text-dark" />
                                            </div>
                                        </div>
                                        <div className="line-chart-row-title">ANNONCES</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body pb-5">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h2 className="text-light font-weight-bold">123</h2>
                                                <i className="mdi mdi-message-processing mdi-18px text-dark" />
                                            </div>
                                        </div>
                                        <div className="line-chart-row-title">MESSAGES</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body pb-5">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h2 className="text-light font-weight-bold">2345</h2>
                                                <i className="mdi mdi mdi-account menu-icon mdi-18px text-dark" />
                                            </div>
                                        </div>
                                        <div className="line-chart-row-title">UTILISATEURS</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body pb-5">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h2 className="text-light font-weight-bold">4561</h2>
                                                <i className="mdi mdi-star-circle mdi-18px text-dark" />
                                            </div>
                                        </div>
                                        <div className="line-chart-row-title">AVIS</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h4 className="card-title">
                                                    Répartition des annonces dans les catégories
                  </h4>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="progress progress-lg grouped mb-2">
                                                            <div
                                                                className="progress-bar  bg-danger"
                                                                role="progressbar"
                                                                style={{ width: "40%" }}
                                                                aria-valuenow={25}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                            <div
                                                                className="progress-bar bg-success"
                                                                role="progressbar"
                                                                style={{ width: "10%" }}
                                                                aria-valuenow={50}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                            <div
                                                                className="progress-bar bg-warning"
                                                                role="progressbar"
                                                                style={{ width: "20%" }}
                                                                aria-valuenow={50}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                            <div
                                                                className="progress-bar bg-secondary"
                                                                role="progressbar"
                                                                style={{ width: "30%" }}
                                                                aria-valuenow={50}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                            <div
                                                                className="progress-bar  bg-dark"
                                                                role="progressbar"
                                                                style={{ width: "40%" }}
                                                                aria-valuenow={25}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                            <div
                                                                className="progress-bar bg-info"
                                                                role="progressbar"
                                                                style={{ width: "10%" }}
                                                                aria-valuenow={50}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                            <div
                                                                className="progress-bar bg-light"
                                                                role="progressbar"
                                                                style={{ width: "20%" }}
                                                                aria-valuenow={50}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                            <div
                                                                className="progress-bar bg-primary"
                                                                role="progressbar"
                                                                style={{ width: "30%" }}
                                                                aria-valuenow={50}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <ul className="graphl-legend-rectangle">
                                                            <li>
                                                                <span className="bg-danger" />
                          Bricolage
                        </li>
                                                            <li>
                                                                <span className="bg-success" />
                          Cours
                        </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <ul className="graphl-legend-rectangle">
                                                            <li>
                                                                <span className="bg-warning" />
                          Maison
                        </li>
                                                            <li>
                                                                <span className="bg-secondary" />
                          Aide a la personne
                        </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <ul className="graphl-legend-rectangle">
                                                            <li>
                                                                <span className="bg-dark" />
                          Mécanique
                        </li>
                                                            <li>
                                                                <span className="bg-info" />
                          Beauté
                        </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <ul className="graphl-legend-rectangle">
                                                            <li>
                                                                <span className="bg-light" />
                          Loisirs
                        </li>
                                                            <li>
                                                                <span className="bg-primary" />
                          Vacances
                        </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Annonces</h4>
                                        <hr />
                                        <div className="col-lg-12 col-lg-offset-4">
                                            <input
                                                type="search"
                                                id="search"
                                                defaultValue
                                                className="form-control"
                                                placeholder="Rechercher"
                                            />
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Date</th>
                                                        <th>Catégories</th>
                                                        <th>Pseudo</th>
                                                        <th>Titre</th>
                                                        <th>Options</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td> 1</td>
                                                        <td> 00/00/0000</td>
                                                        <td>#catégories</td>
                                                        <td>@pseudo</td>
                                                        <td>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                                                        </td>
                                                        <td>
                                                            <button
                                                                type="button"
                                                                className="btn btn-inverse-danger btn-rounded btn-icon"
                                                            >
                                                                <i className="mdi mdi-square-edit-outline" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-inverse-danger btn-rounded btn-icon"
                                                            >
                                                                <i className="mdi mdi-trash-can" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-inverse-danger btn-rounded btn-icon"
                                                            >
                                                                <i className="mdi  mdi-feature-search-outline" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td> 2</td>
                                                        <td> 00/00/0000</td>
                                                        <td>#catégories</td>
                                                        <td>@pseudo</td>
                                                        <td>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                                                        </td>
                                                        <td>
                                                            <button
                                                                type="button"
                                                                className="btn btn-inverse-danger btn-rounded btn-icon"
                                                            >
                                                                <i className="mdi mdi-square-edit-outline" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-inverse-danger btn-rounded btn-icon"
                                                            >
                                                                <i className="mdi mdi-trash-can" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-inverse-danger btn-rounded btn-icon"
                                                            >
                                                                <i className="mdi  mdi-feature-search-outline" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td> 00/00/0000</td>
                                                        <td>#catégories</td>
                                                        <td>@pseudo</td>
                                                        <td>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                                                        </td>
                                                        <td>
                                                            <button
                                                                type="button"
                                                                className="btn btn-inverse-danger btn-rounded btn-icon"
                                                            >
                                                                <i className="mdi mdi-square-edit-outline" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-inverse-danger btn-rounded btn-icon"
                                                            >
                                                                <i className="mdi mdi-trash-can" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-inverse-danger btn-rounded btn-icon"
                                                            >
                                                                <i className="mdi  mdi-feature-search-outline" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td> 4</td>
                                                        <td> 00/00/0000</td>
                                                        <td>#catégories</td>
                                                        <td>@pseudo</td>
                                                        <td>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                                                        </td>
                                                        <td>
                                                            <button
                                                                type="button"
                                                                className="btn btn-inverse-danger btn-rounded btn-icon"
                                                            >
                                                                <i className="mdi mdi-square-edit-outline" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-inverse-danger btn-rounded btn-icon"
                                                            >
                                                                <i className="mdi mdi-trash-can" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-inverse-danger btn-rounded btn-icon"
                                                            >
                                                                <i className="mdi  mdi-feature-search-outline" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* content-wrapper ends */}
                {/* partial:partials/_footer.html */}
                <footer className="footer">
                    <div className="footer-wrap">
                        <div className="w-100 clearfix">
                            <span className="d-block text-center text-sm-left d-sm-inline-block">
                                Copyright © 2020{" "}
                                <a href="https://www.bootstrapdash.com/" target="_blank">
                                    SWAP
          </a>
          . All rights reserved.
        </span>
                            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                                Made with <i className="mdi mdi-heart-outline" />
                            </span>
                        </div>
                    </div>
                </footer>
            </div>




        );
    }
}
