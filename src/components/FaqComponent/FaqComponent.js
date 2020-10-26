import React, { Component } from 'react';


export default class FaqComponent extends Component {

    render() {
        return (
            <div >
                <section
                    className="accordion-section clearfix mt-3"
                    aria-label="Question Accordions"
                >
                    <div className="container">
                        <center>
                            <h1>Frequently Asked Questions </h1>
                        </center>
                        <br />
                        <hr />
                        <br />
                        <br />
                        <div
                            className="panel-group"
                            id="accordion"
                            role="tablist"
                            aria-multiselectable="true"
                        >
                            <div className="panel panel-default">
                                <div className="panel-heading p-3 mb-3" role="tab" id="heading0">
                                    <h3 className="panel-title">
                                        <a
                                            className="collapsed"
                                            role="button"
                                            title
                                            data-toggle="collapse"
                                            data-parent="#accordion"
                                            href="#collapse0"
                                            aria-expanded="true"
                                            aria-controls="collapse0"
                                        >
                                            Comment fonctionne Swap ?
                                        </a>
                                    </h3>
                                </div>
                                <div
                                    id="collapse0"
                                    className="panel-collapse collapse"
                                    role="tabpanel"
                                    aria-labelledby="heading0"
                                >
                                    <div className="panel-body px-3 mb-4">
                                        <p>
                                            Swap est une plateforme d'échange de service entre particulier, Swappez c'est tres simple ! Choisissez un service parmis les annonces deposées par les membres et échangé le contre un service que vous proposé !
                                            Contacter le membre et convenez d'un jour et d'un lieu pour effectué le swap !
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading p-3 mb-3" role="tab" id="heading1">
                                    <h3 className="panel-title">
                                        <a
                                            className="collapsed"
                                            role="button"
                                            title
                                            data-toggle="collapse"
                                            data-parent="#accordion"
                                            href="#collapse1"
                                            aria-expanded="true"
                                            aria-controls="collapse1"
                                        >
                                            L'inscription est-elle gratuite ?
                                    </a>
                                    </h3>
                                </div>
                                <div
                                    id="collapse1"
                                    className="panel-collapse collapse"
                                    role="tabpanel"
                                    aria-labelledby="heading1"
                                >
                                    <div className="panel-body px-3 mb-4">
                                        <p>
                                            L'inscription est gratuite, Swappez c'est échanger un service gratuitement ou contre des points que vous auriez accumulé grace au parrainnage et au récompense. Aucunes transactions bancaire n'est nécessaire !
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading p-3 mb-3" role="tab" id="heading2">
                                    <h3 className="panel-title">
                                        <a
                                            className="collapsed"
                                            role="button"
                                            title
                                            data-toggle="collapse"
                                            data-parent="#accordion"
                                            href="#collapse2"
                                            aria-expanded="true"
                                            aria-controls="collapse2"
                                        >
                                            Mes coordonnées sont-elles visibles ?
                                            </a>
                                    </h3>
                                </div>
                                <div
                                    id="collapse2"
                                    className="panel-collapse collapse"
                                    role="tabpanel"
                                    aria-labelledby="heading2"
                                >
                                    <div className="panel-body px-3 mb-4">
                                        <p>
                                            Vos coordonnées, nom, prenom ne sont pas visible par les membres de Swap ! Vous pouvez decider vous-meme de partager ces informations.
                                         </p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading p-3 mb-3" role="tab" id="heading3">
                                    <h3 className="panel-title">
                                        <a
                                            className="collapsed"
                                            role="button"
                                            title
                                            data-toggle="collapse"
                                            data-parent="#accordion"
                                            href="#collapse3"
                                            aria-expanded="true"
                                            aria-controls="collapse3"
                                        >
                                            Comment supprimer mon compte ?
                                     </a>
                                    </h3>
                                </div>
                                <div
                                    id="collapse3"
                                    className="panel-collapse collapse"
                                    role="tabpanel"
                                    aria-labelledby="heading3"
                                >
                                    <div className="panel-body px-3 mb-4">
                                        <p>
                                            Pour supprimer votre compte c'est simple, rendez-vous dans la section informations personnelles de votre compte utilisateur, tout en bas cliquez sur supprimer mon profil.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading p-3 mb-3" role="tab" id="heading4">
                                <h3 className="panel-title">
                                    <a
                                        className="collapsed"
                                        role="button"
                                        title
                                        data-toggle="collapse"
                                        data-parent="#accordion"
                                        href="#collapse4"
                                        aria-expanded="true"
                                        aria-controls="collapse4"
                                    >
                                        Suis-je assuré ?
                                 </a>
                                </h3>
                            </div>
                            <div
                                id="collapse4"
                                className="panel-collapse collapse"
                                role="tabpanel"
                                aria-labelledby="heading3"
                            >
                                <div className="panel-body px-3 mb-4">
                                    <p>
                                        Vous étes assuré sous le régime de la responsabilité civile, lorsqu'un accident surviens chez le membres chez qui vous effectué votre swap, son assurance prend en charge les dommages physique que vous auriez subis </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
};
