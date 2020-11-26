import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
//Inclu les fichiers communs
import Header from '../../view/Common/Header';
import Footer from '../../view/Common/Footer';
//Import du composant Avis
import Avis from '../../components/Avis/Avis';
import ProfilInfoGauche from '../../components/ProfilInfoGauche/ProfilInfoGauche';


export default class Review extends Component {

    componentDidMount(){
        document.title = "Profil - Mes avis";
    }

    render() {
        return (
            <div className="body" id="bodyHome">
    
            {/* HEADER */}
            <Header></Header>
    
                <div>
                    {/* ./Infos compte */}
                    <div className="container">
                        <h1>Mes avis</h1>
                        <hr />
                        <div className="row">
                            <div className="col-md-3">
                                <ProfilInfoGauche></ProfilInfoGauche>
                            </div>
                            {/* module colonn droite */}
                            <div className="col-md-9 personal-info">
                                <form className="form-horizontal">
                                    <Avis></Avis>
                                </form>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
                {/* FOOTER */}
                <Footer></Footer>
            </div >

        );
    }
}
