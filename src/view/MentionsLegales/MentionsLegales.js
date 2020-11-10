import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import Header from '../../view/Common/Header';
import Footer from '../../view/Common/Footer';



export default class MentionsLegales extends Component {
  componentDidMount() {
    document.title = "Mentions Légales"
  }

  render() {
    return (
        <div className="body" id="bodyHome">

            {/* HEADER */}
            <Header></Header>

        
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-center"><b>Mentions Légales</b></h1>
                            </div>
                        </div>
                        <div className="row pt-5">
                            <div className="col-md-12">
                                <h6 className="text-center"><b>Vous êtes actuellement connecté au site «www.swap.fr» qui est la propriété exclusive de la société SWAP® :</b></h6>
                            </div>
                        </div>
                        <div className="row pt-5">
                            <div className="col-md-12">
                                <p>Immatriculée au RCS de LILLE METROPOLE sous le n° 881 143 820, le 30-01-2020 - Enregistrée à l'INSEE le 01-01-2020</p>
                                <p><b>Siège social :</b> 54, rue Pierre Legrand - 59800 LILLE</p>
                                <p><b>Code APE :</b> 6201Z</p>
                                <p><b>SIRET :</b> 88114382000010</p>
                                <p className="text-center"><b>CONTACT :</b></p>
                                <p><b>Entreprise SWAP®</b> </p>
                                <p><b>Téléphone :</b> 07.54.37.03.69 </p>
                                <p><b>Email :</b> contact@swap.fr</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p className="text-center"><b>DIRECTRICES DE LA PUBLICATION :</b></p>
                                <p>LARA LECOMTE et BOUDJADJA SAMIRA</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p className="text-center"><b>HÉBERGEUR :</b></p>
                                <p>OVH</p>
                                <p>SAS au capital de 10 069 020 €,</p>
                                <p>Immatriculée au RCS de LILLE METROPOLE sous le n° 424 761 419</p>
                                <p><b>Siège social :</b> 2 rue Kellermann - 59100 ROUBAIX – FRANCE</p>
                                <p><b>Téléphone :</b> 09 72 10 10 07</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p className="text-center"><b>DROITS DE PROPRIÉTÉ INTELLECTUELLE :</b></p>
                                <p>L'Entreprise est titulaire du nom de domaine www.swap.fr. Le Site est une œuvre de l'esprit protégée par les lois de la propriété intellectuelle. Le Site dans son ensemble et chacun des éléments qui le composent (tels que textes, arborescences, logiciels, animations, photographies, illustrations, schémas, logos) sont la propriété exclusive de l'Entreprise qui est seule habilitée à utiliser les droits de propriété intellectuelle y afférents. </p>
                                <p>L'usage de tout ou partie du Site, notamment par téléchargement, reproduction, transmission, représentation ou diffusion à d'autres fins que pour votre usage personnel et privé dans un but non commercial est strictement interdit. La violation de ces dispositions vous soumet aux sanctions prévues tant par le Code de la Propriété Intellectuelle et le Code Pénal au titre notamment de la contrefaçon de droit d'auteur et du droit des marques, que par le Code Civil en matière de responsabilité civile.</p> 
                                <p>Les marques et noms de domaine ainsi que les dessins et modèles qui apparaissent sur le Site sont la propriété exclusive de l'Entreprise. La création de liens hypertextes vers le Site ne peut être faite qu'avec l'autorisation écrite et préalable de l'Entreprise, laquelle autorisation peut être révoquée à tout moment. Tous les sites ayant un lien hypertexte vers le Site ne sont pas sous le contrôle de l'Entreprise et celle-ci décline par conséquent toute responsabilité (notamment éditoriale) concernant l'accès et le contenu de ces sites. L'Entreprise est libre de modifier, à tout moment et sans préavis, le contenu du Site.</p>
                            </div>
                        </div>
                    </div>
                </div>
            {/* FOOTER */}
            <Footer></Footer>
        </div>
   

    );
  }
}
