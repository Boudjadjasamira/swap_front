import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//Inclu les fichiers communs
import Header from '../../view/Common/Header';
import Footer from '../..//view/Common/Footer';

import ProfilInfoGauche from '../../components/ProfilInfoGauche/ProfilInfoGauche';
import axios from 'axios';

export default class Trophy extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstTrophy: "assets/trophy/trophy.png",
            secondTrophy: "assets/trophy/trophy.png",
            thirdTrophy: "assets/trophy/trophy.png",
            quadTrophy: "assets/trophy/trophy.png",
            fiveTrophy: "assets/trophy/trophy.png",
            sixTrophy: "assets/trophy/trophy.png"
        }
    }


    componentDidMount(){
        document.title = "Profil - Trophées";

        let compteurSwap1 = 0;
        let compteurAnnonces1 = 0;
        let compteurSwap2 = 0;
        let compteurMessages = 0;
        let compteurAvis = 0;

        // TROPHE 1 
        axios.get('http://149.91.89.142:8000/api/users/' + localStorage.getItem('ID'))
        .then(res => {
            if(res.data.nom.toString().length > 0 && res.data.prenom.toString().length > 0 && res.data.codePostal.toString().length > 0 && res.data.mail.toString().length > 0 && res.data.photo.toString().length > 0){
                this.setState({firstTrophy: process.env.PUBLIC_URL + "assets/trophy/user.png"})
            }else{
                this.setState({firstTrophy: "assets/trophy/trophy.png"})
            }
        });

        // TROPHE 2
        axios.get('http://149.91.89.142:8000/api/swaps')
        .then(res => {
            res.data['hydra:member'].map(e => {
                if(e.idUser == localStorage.getItem('ID')){
                    compteurSwap1++
                }
            })

            if(compteurSwap1 >= 5){
                this.setState({secondTrophy: process.env.PUBLIC_URL + "assets/icone/validate.png"});
            }else{
                this.setState({secondTrophy: "assets/trophy/trophy.png"})
            }

            // TROPHE 4
            if(compteurSwap2 >= 10){
                this.setState({quadTrophy: process.env.PUBLIC_URL + "assets/trophy/swap.png"})
            }else{
                this.setState({quadTrophy: "assets/trophy/trophy.png"})
            }
        });

        // TROPHE 3
        axios.get('http://149.91.89.142:8000/api/annonces')
        .then(res => {
            res.data['hydra:member'].map(e => {
                if(e.idUser == localStorage.getItem('ID')){
                    compteurAnnonces1++
                }
            })

            if(compteurAnnonces1 == 10){
                this.setState({thirdTrophy: process.env.PUBLIC_URL + "assets/trophy/annonce.png"});
            }else{
                this.setState({thirdTrophy: "assets/trophy/trophy.png"})
            }
        });


        // TROPHE 5
        axios.get('http://149.91.89.142:8000/api/messageries')
        .then(res => {
            res.data['hydra:member'].map(e => {
                if(e.idUser == localStorage.getItem('ID')){
                    compteurMessages++
                }
            })

            if(compteurMessages >= 5){
                this.setState({fiveTrophy: process.env.PUBLIC_URL + "assets/trophy/email.png"});
            }else{
                this.setState({fiveTrophy: "assets/trophy/trophy.png"})
            }
        });

        axios.get('http://149.91.89.142:8000/api/avis')
        .then(res => {
            res.data['hydra:member'].map(e => {
                if(e.idUser == localStorage.getItem('ID')){
                    compteurAvis++
                }
            })

            if(compteurAvis >= 10){
                this.setState({sixTrophy: process.env.PUBLIC_URL + "assets/trophy/review.png"});
            }else{
                this.setState({sixTrophy: "assets/trophy/trophy.png"})
            }
        });

 
        
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
                                                        <div className="col-xl-4 col-sm-6 mb-5">
                                                            <div className="bg-white rounded  py-4 px-4   ">
                                                                <img
                                                                    src={this.state.firstTrophy}
                                                                    alt="trophée"
                                                                    width={80}
                                                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm animate__animated animate__flipInY"
                                                                />
                                                                <div className="d-block2 text-truncate mb-1">
                                                                    <br />
                                                                    <h6 className="trophy title">Who i am ?</h6>
                                                                </div>
                                                                <div className="trophyd-block2">
                                                                    <span>Remplir à 100% son profil</span>
                                                                    <br />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* End */}
                                                        {/* Team item */}
                                                        <div className="col-xl-4 col-sm-6 mb-5">
                                                            <div className="bg-white rounded  py-4 px-4 ">
                                                                <img
                                                                    src={this.state.secondTrophy}
                                                                    alt=" trophée"
                                                                    width={100}
                                                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm animate__animated animate__flipInY"
                                                                />
                                                                <div className="d-block2 text-truncate mb-1">
                                                                    <br />
                                                                    <h6 className="trophy title">Super User</h6>
                                                                </div>
                                                                <div className="trophyd-block2">
                                                                    <span>Effectuer plus de 5 swaps</span>
                                                                    <br />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* End */}
                                                        {/* Team item */}
                                                        <div className="col-xl-4 col-sm-6 mb-5">
                                                            <div className="bg-white rounded py-4 px-4  ">
                                                                <img
                                                                    src={this.state.thirdTrophy}
                                                                    alt=" trophée"
                                                                    style={{width: "80px"}}
                                                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm animate__animated animate__flipInY "
                                                                />
                                                                <div className="d-block2 text-truncate mb-1">
                                                                    <br />
                                                                    <h6 className="trophy title">Top services</h6>
                                                                </div>
                                                                <div className="trophyd-block2">
                                                                    <span>Publier 10 annonces</span>
                                                                    <br />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* End */}
                                                        {/* Team item */}
                                                        <div className="col-xl-4 col-sm-6 mb-5">
                                                            <div className="bg-white rounded   py-4 px-4 ">
                                                                <img
                                                                    src={this.state.quadTrophy}
                                                                    alt=" trophée"
                                                                    width={100}
                                                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm animate__animated animate__flipInY"
                                                                />
                                                                <div className="d-block2 text-truncate mb-1">
                                                                    <br />
                                                                    <h6 className="trophy title">Swapper</h6>
                                                                </div>
                                                                <div className="trophyd-block2">
                                                                    <span>Plus de 10 swaps</span>
                                                                    <br />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* End */}
                                                        {/* Team item */}
                                                        <div className="col-xl-4 col-sm-6 mb-5">
                                                            <div className="bg-white rounded   py-4 px-4  ">
                                                                <img
                                                                    src={this.state.fiveTrophy}
                                                                    alt=" trophée"
                                                                    width={100}
                                                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm animate__animated animate__flipInY"
                                                                />
                                                                <div className="d-block2 text-truncate mb-1">
                                                                    <br />
                                                                    <h6 className="trophy title">Premier contact</h6>
                                                                </div>
                                                                <div className="trophyd-block2">
                                                                    <span>Envoyer 5 messages</span>
                                                                    <br />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* End */}
                                                        {/* Team item */}
                                                        <div className="col-xl-4 col-sm-6 mb-5">
                                                            <div className="bg-white rounded   py-4 px-4  ">
                                                                <img
                                                                    src={this.state.sixTrophy}
                                                                    alt="trophée"
                                                                    width={100}
                                                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm animate__animated animate__flipInY"
                                                                />
                                                                <div className="d-block2 text-truncate mb-1">
                                                                    <br />
                                                                    <h6 className="trophy title">Best rewiever</h6>
                                                                </div>
                                                                <div className="trophyd-block2">
                                                                    <span>Poster 10 avis</span>
                                                                    <br />
                                                                    <br />
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
