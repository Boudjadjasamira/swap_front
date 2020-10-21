import React, { Component } from 'react';

export default class FormContact extends Component {

    render() {
        return (
            <div className="container">
                <div className="d-flex col flex-wrap ">
                    <div className="align-self-center">
                        <img className="img-fluid " src={process.env.PUBLIC_URL + 'assets/img/contact.png'} alt="Contact_img" width="90%" />
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className="container  col-6">
                        <center>
                            <h1>Contact </h1>
                        </center>
                        <br />
                        <br />
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Nom</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Entre votre Nom*"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Prenom</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Entre votre prénom*"
                                />
                            </div>
                            <label htmlFor="exampleInputEmail1">Choisissez une catégorie.</label>
                            <select className="form-control custom-select">
                                <option selected disabled> Catégories </option>
                                <option>Demande d'informations</option>
                                <option>Litige</option>
                                <option>Autre</option>
                            </select>
                            <br />
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Votre message</label>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows={3}
                                    defaultValue={""}
                                />
                            </div>
                            <div className="custom-file">
                                <input
                                    type="file"
                                    className="custom-file-input"
                                    id="customFileLang"
                                    lang="fr"
                                />
                                <label className="custom-file-label" htmlFor="customFileLang">
                                    Parcourir les fichiers{" "}
                                </label>
                            </div>
                        </form>
                        <br />
                        <div className="col-md-12">
                            <input
                                type="submit"
                                className="btn btn-dark btn-send"
                                defaultValue="Envoyer"
                            />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        )
    }
};
