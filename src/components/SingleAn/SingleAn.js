import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';



export default class SingleAnnonce extends Component {

  componentDidMount() {
    document.title = "Home"
  }

  render() {

    return (

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
              <h5 className="p-1 ">Titre annonce</h5>

              <hr />
              <p>Catégorie - Nom catégorie</p>
              <p>Ville - Régions</p>
              <p>Posté le 00/00/0000</p>
              <br />
              <p className="text-justify">
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
                  </Link> &nbsp;
              <Link className="btn btn-outline-dark my-2 my-sm-0" to={process.env.PUBLIC_URL + "/Account"}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-hand-thumbs-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16v-1c.563 0 .901-.272 1.066-.56a.865.865 0 0 0 .121-.416c0-.12-.035-.165-.04-.17l-.354-.354.353-.354c.202-.201.407-.511.505-.804.104-.312.043-.441-.005-.488l-.353-.354.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315L12.793 9l.353-.354c.353-.352.373-.713.267-1.02-.122-.35-.396-.593-.571-.652-.653-.217-1.447-.224-2.11-.164a8.907 8.907 0 0 0-1.094.171l-.014.003-.003.001a.5.5 0 0 1-.595-.643 8.34 8.34 0 0 0 .145-4.726c-.03-.111-.128-.215-.288-.255l-.262-.065c-.306-.077-.642.156-.667.518-.075 1.082-.239 2.15-.482 2.85-.174.502-.603 1.268-1.238 1.977-.637.712-1.519 1.41-2.614 1.708-.394.108-.62.396-.62.65v4.002c0 .26.22.515.553.55 1.293.137 1.936.53 2.491.868l.04.025c.27.164.495.296.776.393.277.095.63.163 1.14.163h3.5v1H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                </svg>
                    &nbsp; Swapper
                  </Link>
            </div>
          </div>
        </div>

    );
  }
}


