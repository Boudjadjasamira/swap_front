import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//Inclu les fichiers communs
import Header from '../../view/Common/Header';
import Footer from '../..//view/Common/Footer';

import ProfilInfoGauche from '../../components/ProfilInfoGauche/ProfilInfoGauche';


export default class Reward extends Component {

    componentDidMount(){
        document.title = "Profil - Récompenses"
    }

    render() {
        return (
            <div className="body" id="bodyHome">
    
            {/* HEADER */}
            <Header></Header>
    
                <div>
                    {/* ./Infos compte */}
                    <div className="container">
                        <h1>Informations Personnelles</h1>
                        <hr />
                        <div className="row">
                            <div className="col-md-3">
                                <ProfilInfoGauche></ProfilInfoGauche>
                            </div>
                            {/* module colonn droite */}
                            <div className="col-md-9 personal-info">
                                <form className="form-horizontal">
                                    <div className="row justify-content-start">
                                        <div className="col-12">
                                            <div className="media border p-3 flex-column flex-md-row">
                                                <div className="media-body align-self-center">
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-2 col-lg-1 col-xl-2">
                                                                <div className="bg-white rounded pt-1 animate__animated animate__pulse">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + 'assets/reward/money-bag.png'}
                                                                        alt="description annonce"
                                                                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-10 col-lg-9 col-xl-10">
                                                                <div className="d-block text-truncate mb-1">
                                                                    <br />
                                                                    <h5>Dans le mille !</h5>
                                                                </div>
                                                                <div className="trophy d-block">
                                                                    <span>Echange 1000 Points et tu en gagnes 500.</span>
                                                                    <br />
                                                                    <br />
                                                                </div>
                                                                <div className="percent d-block">
                                                                    <div className="bar">
                                                                        {" "}
                                                                        <span className="volume" style={{ width: "42%" }}>
                                                                            42%
          </span>{" "}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-2 col-lg-1 col-xl-2">
                                                                <div className="bg-white rounded pt-1 animate__animated animate__pulse">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + 'assets/reward/gift-box.png'}
                                                                        alt="description annonce"
                                                                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-10 col-lg-9 col-xl-10">
                                                                <div className="d-block text-truncate mb-1">
                                                                    <br />
                                                                    <h5>A votre Service !</h5>
                                                                </div>
                                                                <div className="trophy d-block">
                                                                    <span>Accompli 20 services et gagne 2000 Points</span>
                                                                    <br />
                                                                    <br />

                                                                </div>
                                                                <div className="percent d-block">
                                                                    <div className="bar">
                                                                        {" "}
                                                                        <span className="volume" style={{ width: "29%" }}>
                                                                            29%
          </span>{" "}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-2 col-lg-1 col-xl-2">
                                                                <div className="bg-white rounded pt-1 animate__animated animate__pulse">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + 'assets/reward/purse.png'}
                                                                        alt="description annonce"
                                                                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-10 col-lg-9 col-xl-10">
                                                                <div className="d-block text-truncate mb-1">
                                                                    <br />
                                                                    <h5>Deux avis valent mieux qu’un !</h5>
                                                                </div>
                                                                <div className="trophy d-block">
                                                                    <span>Dépose 30 avis et gagne 3000 Points</span>
                                                                    <br />
                                                                    <br />
                                                                </div>
                                                                <div className="percent d-block">
                                                                    <div className="bar">
                                                                        {" "}
                                                                        <span className="volume" style={{ width: "65%" }}>
                                                                            65%
          </span>{" "}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-2 col-lg-1 col-xl-2">
                                                                <div className="bg-white rounded pt-1 animate__animated animate__pulse">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + 'assets/reward/diamond.png'}
                                                                        alt="description annonce"
                                                                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-10 col-lg-9 col-xl-10">
                                                                <div className="d-block text-truncate mb-1">
                                                                    <br />
                                                                    <h5>Mystere !</h5>
                                                                </div>
                                                                <div className="trophy d-block">
                                                                    <span>La recompense ultime, chuut c'est une surprise.</span>
                                                                    <br />
                                                                    <br />
                                                                </div>
                                                                <div className="percent d-block">
                                                                    <div className="bar">
                                                                        {" "}
                                                                        <span className="volume" style={{ width: "89%" }}>
                                                                            89%
          </span>{" "}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>












                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>;



                {/* FOOTER */}
                <Footer></Footer>
            </div>

        );
    }
}
