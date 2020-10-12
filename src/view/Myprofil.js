import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class Myprofil extends Component {
    
  render() {
    return (
<div>

    
  <div className="container profile shadow-lg p-3 mb-5 bg-white rounded">
    <div className="container">
      <div className="text-center-profil">
        <div className="item">
          <span className="notify-badge-profil">
            <img src="assets/icone/validate.png" alt="#" style={{ width: 60 }} />
          </span>
          <img src="assets/img/avatar.png" alt="avatar" width="240px" />
          <br />
          <br />
          <h1>@Pseudo</h1>
        </div>
      </div>
      <br />
      {/*---avatar et badge End*/}
      <div className="text-center">
        <p>Inscrit depuis le 00/00/00</p>
        {/*------ Rating----*/}
        <div className="row-center">
          <div className="rating">
            <input type="radio" id="star5" name="rating" defaultValue={5} />
            <label htmlFor="star5" title="Super !">
              5 stars
            </label>
            <input type="radio" id="star4" name="rating" defaultValue={4} />
            <label htmlFor="star4" title="Satisfaisant">
              4 stars
            </label>
            <input type="radio" id="star3" name="rating" defaultValue={3} />
            <label htmlFor="star3" title="Moyen">
              3 stars
            </label>
            <input type="radio" id="star2" name="rating" defaultValue={2} />
            <label htmlFor="star2" title="Acceptable">
              2 stars
            </label>
            <input type="radio" id="star1" name="rating" defaultValue={1} />
            <label htmlFor="star1" title="Bof">
              1 star
            </label>
          </div>
        </div>
      </div>
      <h5>
        <img
          src="assets/icone/quote.png"
          alt="#"
          className="align-self-center mr-2"
          style={{ width: 70 }}
        />
         Présentation
      </h5>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="media-body align-self-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
                ipsum aliquam metus facilisis scelerisque. Quisque vitae
                condimentum nulla. Vestibulum lobortis ullamcorper augue id
                consequat. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Phasellus at aliquet dui. Mauris
                dapibus lectus id laoreet iaculis. Duis auctor augue augue, eget
                lobortis quam auctor at. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nam vel ipsum aliquam metus facilisis
                scelerisque. Quisque vitae condimentum nulla. Vestibulum lobortis
                ullamcorper augue id consequat. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Phasellus at
                aliquet dui. Mauris dapibus lectus id laoreet iaculis. Duis auctor
                augue augue, eget lobortis quam auctor at.
              </p>
            </div>
          </div>
        </div>
        <br />
        {/* Section annonces */}
        <h5>Mes services</h5>
        <hr />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="media border p-3 flex-column flex-md-row">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="#"
                  className="align-self-center mr-3"
                  style={{ width: 100 }}
                />
                  
                <div className="media-body align-self-center">
                  <h4>
                    Titre annonce{" "}
                    <small>
                      <i> Posté le 00/00/0000</i>
                    </small>
                  </h4>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    vel ipsum aliquam metus facilisis scelerisque. Quisque vitae
                    condimentum nulla. Vestibulum lobortis ullamcorper augue id
                    consequat. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Phasellus at
                    aliquet dui. Mauris dapibus lectus id laoreet iaculis. Duis
                    auctor augue augue, eget lobortis quam auctor at.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12">
              <div className="media border p-3 flex-column flex-md-row">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="#"
                  className="align-self-center mr-3"
                  style={{ width: 100 }}
                />
                  
                <div className="media-body align-self-center">
                  <h4>
                    Titre annonce{" "}
                    <small>
                      <i> Posté le 00/00/0000</i>
                    </small>
                  </h4>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    vel ipsum aliquam metus facilisis scelerisque. Quisque vitae
                    condimentum nulla. Vestibulum lobortis ullamcorper augue id
                    consequat. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Phasellus at
                    aliquet dui. Mauris dapibus lectus id laoreet iaculis. Duis
                    auctor augue augue, eget lobortis quam auctor at.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12">
              <div className="media border p-3 flex-column flex-md-row">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="#"
                  className="align-self-center mr-3"
                  style={{ width: 100 }}
                />
                  
                <div className="media-body align-self-center">
                  <h4>
                    Titre annonce{" "}
                    <small>
                      <i> Posté le 00/00/0000</i>
                    </small>
                  </h4>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    vel ipsum aliquam metus facilisis scelerisque. Quisque vitae
                    condimentum nulla. Vestibulum lobortis ullamcorper augue id
                    consequat. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Phasellus at
                    aliquet dui. Mauris dapibus lectus id laoreet iaculis. Duis
                    auctor augue augue, eget lobortis quam auctor at.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12">
              <div className="media border p-3 flex-column flex-md-row">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="#"
                  className="align-self-center mr-3"
                  style={{ width: 100 }}
                />
                  
                <div className="media-body align-self-center">
                  <h4>
                    Titre annonce{" "}
                    <small>
                      <i> Posté le 00/00/0000</i>
                    </small>
                  </h4>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    vel ipsum aliquam metus facilisis scelerisque. Quisque vitae
                    condimentum nulla. Vestibulum lobortis ullamcorper augue id
                    consequat. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Phasellus at
                    aliquet dui. Mauris dapibus lectus id laoreet iaculis. Duis
                    auctor augue augue, eget lobortis quam auctor at.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
        <br />
        <br />
      </div>
    </div>
    {/* begin share*/}
    <div id="social-links" className=" col-lg-12">
      <div className="row justify-content-center">
        <div className="col-xs-6 col-sm-3 col-md-2 col-lg-3 social-btn-holder">
          <a
            title="google"
            className="btn btn-social btn-block btn-google"
            target="_BLANK"
            href
          >
            <i className="fa fa-google" />
          </a>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-2 col-lg-3 social-btn-holder">
          <a
            title="twitter"
            className="btn btn-social btn-block btn-twitter"
            target="_BLANK"
            href
          >
            <i className="fa fa-twitter" />
          </a>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-2 col-lg-3 social-btn-holder">
          <a
            title="github"
            className="btn btn-social btn-block btn-facebook"
            target="_BLANK"
            href
          >
            <i className="fa fa-facebook" />
          </a>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-2 col-lg-3 social-btn-holder">
          <a
            title="github"
            className="btn btn-social btn-block btn-mail"
            target="_BLANK"
            href
          >
            <i className="fa fa-envelope" />
          </a>
        </div>
      </div>
    </div>
    {/* end share */}
  </div>

  </div>
  
  );
}
}
