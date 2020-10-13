import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { Link } from 'react-router-dom';

export default class SingleAnnonce extends Component {


  componentDidMount() {
    document.title = "Home"
  }

  render() {

    return (
      <div className="body" id="bodyHome">
        {/* HEADER */}
        <Header title="Home"></Header>

        <div className="container">
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
                        src="https://via.placeholder.com/350x150"
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
        Praesent et quam neque. Sed maximus et neque eu vulputate.{" "}
              </p>
              <br />
            </div>
          </div>
        </div>;



        {/* FOOTER */}
        <Footer></Footer>
      </div>
    );
  }
}
