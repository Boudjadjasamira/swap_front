import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//Inclu les fichiers communs
import Header from '../../view/Common/Header';
import Footer from '../..//view/Common/Footer';

import ProfilInfoGauche from '../../components/ProfilInfoGauche/ProfilInfoGauche';



export default class Trophy extends Component {

    componentDidMount(){
        document.title = "Profil - Trophées";
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
                                        <div className="media border p-3 flex-column flex-md-row ">
                                            <div className="col-md-12 personal-info ">
                                                <div className="container ">
                                                    <div className="row text-center">
                                                        {/* Team item */}
                                                        <div className="col-xl-3 col-sm-6 mb-5">
                                                            <div className="bg-white rounded  py-4 px-4   ">
                                                                <img
                                                                    src={process.env.PUBLIC_URL + 'assets/trophy/user.png'}
                                                                    alt="trophée"
                                                                    width={100}
                                                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm animate__animated animate__pulse"
                                                                />
                                                                <div className="d-block text-truncate mb-1">
                                                                    <br />
                                                                    <h6 className="trophy title">Who i am ?</h6>
                                                                </div>
                                                                <div className="trophy d-block">
                                                                    <span>Remplir à 100% son profil</span>
                                                                    <br />
                                                                </div>
                                                                <div className="percent d-block">
                                                                    <div className="bar">
                                                                        {" "}
                                                                        <span className="volume" style={{ width: "68%" }}>
                                                                            68%
                            </span>{" "}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* End */}
                                                        {/* Team item */}
                                                        <div className="col-xl-3 col-sm-6 mb-5">
                                                            <div className="bg-white rounded  py-4 px-4  ">
                                                                <img
                                                                    src={process.env.PUBLIC_URL + 'assets/icone/validate.png'}
                                                                    alt=" trophée"
                                                                    width={100}
                                                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm animate__animated animate__pulse"
                                                                />
                                                                <div className="d-block text-truncate mb-1">
                                                                    <br />
                                                                    <h6 className="trophy title">Super User</h6>
                                                                </div>
                                                                <div className="trophy d-block">
                                                                    <span>Obtenir l'indice de confiance</span>
                                                                    <br />
                                                                </div>
                                                                <div className="percent d-block">
                                                                    <div className="bar">
                                                                        {" "}
                                                                        <span className="volume" style={{ width: "72%" }}>
                                                                            72%
                            </span>{" "}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* End */}
                                                        {/* Team item */}
                                                        <div className="col-xl-3 col-sm-6 mb-5">
                                                            <div className="bg-white rounded   py-4 px-4  ">
                                                                <img
                                                                    src={process.env.PUBLIC_URL + 'assets/trophy/annonce.png'}
                                                                    alt=" trophée"
                                                                    width={100}
                                                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm animate__animated animate__pulse"
                                                                />
                                                                <div className="d-block text-truncate mb-1">
                                                                    <br />
                                                                    <h6 className="trophy title">Top services</h6>
                                                                </div>
                                                                <div className="trophy d-block">
                                                                    <span>Publier 10 annonces</span>
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
                                                        {/* End */}
                                                        {/* Team item */}
                                                        <div className="col-xl-3 col-sm-6 mb-5">
                                                            <div className="bg-white rounded   py-4 px-4  ">
                                                                <img
                                                                    src={process.env.PUBLIC_URL + 'assets/trophy/business.png'}
                                                                    alt=" trophée"
                                                                    width={100}
                                                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm animate__animated animate__pulse"
                                                                />
                                                                <div className="d-block text-truncate mb-1">
                                                                    <br />
                                                                    <h6 className="trophy title">Godfather</h6>
                                                                </div>
                                                                <div className="trophy d-block">
                                                                    <span>Parrainer 3 Personnes</span>
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
                                                        {/* End */}
                                                        {/* Team item */}
                                                        <div className="col-xl-3 col-sm-6 mb-5">
                                                            <div className="bg-white rounded   py-4 px-4 ">
                                                                <img
                                                                    src={process.env.PUBLIC_URL + 'assets/trophy/gift.png'}
                                                                    alt=" trophée"
                                                                    width={100}
                                                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm animate__animated animate__pulse"
                                                                />
                                                                <div className="d-block text-truncate mb-1">
                                                                    <br />
                                                                    <h6 className="trophy title">Give me Gift !</h6>
                                                                </div>
                                                                <div className="trophy d-block">
                                                                    <span>Echanger vos points</span>
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
                                                        {/* End */}
                                                        {/* Team item */}
                                                        <div className="col-xl-3 col-sm-6 mb-5">
                                                            <div className="bg-white rounded   py-4 px-4 ">
                                                                <img
                                                                    src={process.env.PUBLIC_URL + 'assets/trophy/swap.png'}
                                                                    alt=" trophée"
                                                                    width={100}
                                                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm animate__animated animate__pulse"
                                                                />
                                                                <div className="d-block text-truncate mb-1">
                                                                    <br />
                                                                    <h6 className="trophy title">Swapper</h6>
                                                                </div>
                                                                <div className="trophy d-block">
                                                                    <span>échanger 10 services</span>
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
                                                        {/* End */}
                                                        {/* Team item */}
                                                        <div className="col-xl-3 col-sm-6 mb-5">
                                                            <div className="bg-white rounded   py-4 px-4  ">
                                                                <img
                                                                    src={process.env.PUBLIC_URL + 'assets/trophy/email.png'}
                                                                    alt=" trophée"
                                                                    width={100}
                                                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm animate__animated animate__pulse"
                                                                />
                                                                <div className="d-block text-truncate mb-1">
                                                                    <br />
                                                                    <h6 className="trophy title">Premier contact</h6>
                                                                </div>
                                                                <div className="trophy d-block">
                                                                    <span>Envoyer 5 messages</span>
                                                                    <br />
                                                                </div>
                                                                <div className="percent d-block">
                                                                    <div className="bar">
                                                                        {" "}
                                                                        <span className="volume" style={{ width: "34%" }}>
                                                                            34%
                            </span>{" "}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* End */}
                                                        {/* Team item */}
                                                        <div className="col-xl-3 col-sm-6 mb-5">
                                                            <div className="bg-white rounded   py-4 px-4  ">
                                                                <img
                                                                    src={process.env.PUBLIC_URL + 'assets/trophy/review.png'}
                                                                    alt="trophée"
                                                                    width={100}
                                                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm animate__animated animate__pulse"
                                                                />
                                                                <div className="d-block text-truncate mb-1">
                                                                    <br />
                                                                    <h6 className="trophy title">Best rewiever</h6>
                                                                </div>
                                                                <div className="trophy d-block">
                                                                    <span>Poster 10 avis</span>
                                                                    <br />
                                                                    <br />
                                                                </div>
                                                                <div className="percent d-block">
                                                                    <div className="bar">
                                                                        {" "}
                                                                        <span className="volume" style={{ width: "58%" }}>
                                                                            58%
                            </span>{" "}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* End */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>



                {/* FOOTER */}
                <Footer></Footer>
            </div>
            </div>
        );
    }
}
