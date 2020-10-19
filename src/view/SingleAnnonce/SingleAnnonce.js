import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { Link } from 'react-router-dom';
import * as firebase from "firebase";
import "../../firebase";


export default class SingleAnnonce extends Component {



  componentDidMount() {
    document.title = "Home"
  }

  render() {

    return (
      <div className="body" id="bodyHome">
        {/* HEADER */}
        <Header></Header>

        <div className="container w-50 p-3">
          <br />
          <div className="media border p-3 flex-column flex-md-row">
            <div className="media-body align-self-center">
              {/*Carousel Wrapper*/}
              <div
                id="carousel-example-2"
                className="carousel slide carousel-fade z-depth-1-half"
                data-ride="carousel"
              >
                {/*Indicators*/}
                <ol className="carousel-indicators">
                  <li
                    data-target="#carousel-example-2"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#carousel-example-2" data-slide-to={1} />
                  <li data-target="#carousel-example-2" data-slide-to={2} />
                  <li data-target="#carousel-example-2" data-slide-to={3} />
                </ol>
                {/*/.Indicators*/}
                {/*Slides*/}
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <div className="view">
                      <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/250x150"
                        alt="First slide"
                      />
                      <div className="mask rgba-black-light" />
                    </div>
                  </div>
                  <div className="carousel-item">
                    {/*Mask color*/}
                    <div className="view">
                      <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/250x150"
                        alt="Second slide"
                      />
                      <div className="mask rgba-black-light" />
                    </div>
                  </div>
                  <div className="carousel-item">
                    {/*Mask color*/}
                    <div className="view">
                      <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/250x150"
                        alt="Third slide"
                      />
                      <div className="mask rgba-black-light" />
                    </div>
                  </div>
                  <div className="carousel-item">
                    {/*Mask color*/}
                    <div className="view">
                      <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/250x150"
                        alt="Four slide"
                      />
                      <div className="mask rgba-black-light" />
                    </div>
                  </div>
                </div>
                {/*/.Slides*/}
                {/*Controls*/}
                <a
                  className="carousel-control-prev"
                  href="#carousel-example-2"
                  role="button"
                  data-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carousel-example-2"
                  role="button"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
                {/*/.Controls*/}
              </div>
              {/*/.Carousel Wrapper*/}
              <br />
              <h5>Titre annonce</h5>
              <hr />
              <p>Catégorie - Nom catégorie</p>
              <p>Ville - Régions</p>
              <p>Posté le 00/00/0000</p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod,
                neque id auctor laoreet, urna velit tempor ipsum, sed posuere elit nibh
                sit amet massa. Maecenas sed ipsum id felis molestie dapibus a nec
                risus. Proin auctor dui eu sagittis facilisis. Sed a viverra mi. Morbi
                nisl sapien, vulputate sit amet blandit eget, auctor nec libero. Duis
                rutrum viverra augue at efficitur. Fusce massa tortor, tempus ut
                scelerisque eget, blandit sit amet risus. Aliquam commodo ut velit
                vestibulum condimentum. Aenean nisi mauris, finibus eget euismod ac,
                porta a nisi. Suspendisse mattis et est non bibendum. Ut dolor mauris,
                fermentum nec pretium ac, finibus sed nunc. Nunc et imperdiet ante.
                Praesent et quam neque. Sed maximus et neque eu vulputate.
              </p>
              <br />
              <Link className="btn btn-outline-dark my-2 my-sm-0" to={process.env.PUBLIC_URL + "/Account"}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                </svg>
                    &nbsp; Contacter
                  </Link>
            </div>
          </div>
        </div>;



        {/* FOOTER */}
        <Footer></Footer>
      </div>
    );
  }
}
