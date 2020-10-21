import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
//Inclu les fichiers communs
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { Link } from 'react-router-dom';

export default class Home extends Component {


  componentDidMount() {
    document.title = "Home"
  }

  render() {

    return (
      <div className="body" id="bodyHome">
        {/* HEADER */}
        <Header title="Home"></Header>

        <div>
          <center>
            <img class="img-fluid" src={process.env.PUBLIC_URL + 'assets/img/img3.png'} alt="logo" width="60%" />
          </center>
          <br />
          <br />
          <br />
          {/*Section card catégories */}
          <center>
            <h1>Catégories</h1>
          </center>
          <br />
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Link className="" to={process.env.PUBLIC_URL + "/Categorie/Bricolage"}>
                  <div className="card-counter secondary">
                    <span className="count-name">BRICOLAGE</span>
                  </div>
                </Link>
              </div>

              <div className="col-md-3">
                <Link className="" to={process.env.PUBLIC_URL + "/Categorie/Cours"}>
                  <div className="card-counter secondary">
                    <span className="count-name">COURS</span>
                  </div>
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="" to={process.env.PUBLIC_URL + "/Categorie/AideALaPersonne"}>
                  <div className="card-counter secondary">
                    <span className="count-name">AIDE A LA PERSONNE</span>
                  </div>
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="" to={process.env.PUBLIC_URL + "/Categorie/Maison"}>
                  <div className="card-counter secondary">
                    <span className="count-name">MAISON</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Link className="" to={process.env.PUBLIC_URL + "/Categorie/Mecanique"}>
                  <div className="card-counter secondary">
                    <span className="count-name">MECANIQUE</span>
                  </div></Link>
              </div>
              <div className="col-md-3">
                <Link className="" to={process.env.PUBLIC_URL + "/Categorie/Beaute"}>
                  <div className="card-counter secondary">
                    <span className="count-name">BEAUTE</span>
                  </div></Link>
              </div>
              <div className="col-md-3">
                <Link className="" to={process.env.PUBLIC_URL + "/Categorie/Loisirs"}>
                  <div className="card-counter secondary">
                    <span className="count-name">LOISIRS</span>
                  </div></Link>
              </div>
              <div className="col-md-3">
                <Link className="" to={process.env.PUBLIC_URL + "/Categorie/Vacances"}>
                  <div className="card-counter secondary">
                    <span className="count-name">VACANCES</span>
                  </div></Link>
              </div>
            </div>
          </div>


          <br />
          <br />
          <br />
          <br />
          <br />
          {/*Fin card catégorie */}

          <br />
          {/*Section barre de recherche */}
          <section className="search-sec">
            <div className="container">
              <form action="#" method="post" noValidate="novalidate">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                        <select
                          className="form-control-index custom-select"
                          name="Régions"
                        >
                          <option selected disabled>Régions</option>
                          <option>Auvergne-Rhône-Alpes</option>
                          <option>Bourgogne-Franche-Comté</option>
                          <option>Bretagne</option>
                          <option>Centre-Val de Loire</option>
                          <option>Corse</option>
                          <option>Grand Est</option>
                          <option>Hauts-de-France</option>
                          <option>Île-de-France</option>
                          <option>Normandie</option>
                          <option>Nouvelle-Aquitaine</option>
                          <option>Occitanie</option>
                          <option>Pays de la Loire</option>
                          <option>Provence-Alpes-Côte d'Azur</option>
                          <option>Guadeloupe</option>
                          <option>Martinique</option>
                          <option>Guyane</option>
                          <option>La Réunion</option>
                          <option>Mayotte</option>
                        </select>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                        <select
                          className="form-control-index custom-select"
                          name="Régions"
                        >
                          <option selected disabled> Départements  </option>
                          <option value="01">01 - Ain </option>
                          <option value="02">02 - Aisne </option>
                          <option value="03">03 - Allier </option>
                          <option value="04">04 - Alpes de Haute Provence </option>
                          <option value="05">05 - Hautes Alpes </option>
                          <option value="06">06 - Alpes Maritimes </option>
                          <option value="07">07 - Ardèche </option>
                          <option value="08">08 - Ardennes </option>
                          <option value="09">09 - Ariège </option>
                          <option value="10">10 - Aube </option>
                          <option value="11">11 - Aude </option>
                          <option value="12">12 - Aveyron </option>
                          <option value="13">13 - Bouches du Rhône </option>
                          <option value="14">14 - Calvados </option>
                          <option value="15">15 - Cantal </option>
                          <option value="16">16 - Charente </option>
                          <option value="17">17 - Charente Maritime </option>
                          <option value="18">18 - Cher </option>
                          <option value="19">19 - Corrèze </option>
                          <option value="2A">2A - Corse du Sud </option>
                          <option value="2B">2B - Haute-Corse </option>
                          <option value="21">21 - Côte d'Or </option>
                          <option value="22">22 - Côtes d'Armor </option>
                          <option value="23">23 - Creuse </option>
                          <option value="24">24 - Dordogne </option>
                          <option value="25">25 - Doubs </option>
                          <option value="26">26 - Drôme </option>
                          <option value="27">27 - Eure </option>
                          <option value="28">28 - Eure et Loir </option>
                          <option value="29">29 - Finistère </option>
                          <option value="30">30 - Gard </option>
                          <option value="31">31 - Haute Garonne </option>
                          <option value="32">32 - Gers </option>
                          <option value="33">33 - Gironde </option>
                          <option value="34">34 - Hérault </option>
                          <option value="35">35 - Ille et Vilaine </option>
                          <option value="36">36 - Indre </option>
                          <option value="37">37 - Indre et Loire </option>
                          <option value="38">38 - Isère </option>
                          <option value="39">39 - Jura </option>
                          <option value="40">40 - Landes </option>
                          <option value="41">41 - Loir et Cher </option>
                          <option value="42">42 - Loire </option>
                          <option value="43">43 - Haute Loire </option>
                          <option value="44">44 - Loire Atlantique </option>
                          <option value="45">45 - Loiret </option>
                          <option value="46">46 - Lot </option>
                          <option value="47">47 - Lot et Garonne </option>
                          <option value="48">48 - Lozère </option>
                          <option value="49">49 - Maine et Loire </option>
                          <option value="50">50 - Manche </option>
                          <option value="51">51 - Marne </option>
                          <option value="52">52 - Haute Marne </option>
                          <option value="53">53 - Mayenne </option>
                          <option value="54">54 - Meurthe et Moselle </option>
                          <option value="55">55 - Meuse </option>
                          <option value="56">56 - Morbihan </option>
                          <option value="57">57 - Moselle </option>
                          <option value="58">58 - Nièvre </option>
                          <option value="59">59 - Nord </option>
                          <option value="60">60 - Oise </option>
                          <option value="61">61 - Orne </option>
                          <option value="62">62 - Pas de Calais </option>
                          <option value="63">63 - Puy de Dôme </option>
                          <option value="64">64 - Pyrénées Atlantiques </option>
                          <option value="65">65 - Hautes Pyrénées </option>
                          <option value="66">66 - Pyrénées Orientales </option>
                          <option value="67">67 - Bas Rhin </option>
                          <option value="68">68 - Haut Rhin </option>
                          <option value="69">69 - Rhône </option>
                          <option value="70">70 - Haute Saône </option>
                          <option value="71">71 - Saône et Loire </option>
                          <option value="72">72 - Sarthe </option>
                          <option value="73">73 - Savoie </option>
                          <option value="74">74 - Haute Savoie </option>
                          <option value="75">75 - Paris </option>
                          <option value="76">76 - Seine Maritime </option>
                          <option value="77">77 - Seine et Marne </option>
                          <option value="78">78 - Yvelines </option>
                          <option value="79">79 - Deux Sèvres </option>
                          <option value="80">80 - Somme </option>
                          <option value="81">81 - Tarn </option>
                          <option value="82">82 - Tarn et Garonne </option>
                          <option value="83">83 - Var </option>
                          <option value="84">84 - Vaucluse </option>
                          <option value="85">85 - Vendée </option>
                          <option value="86">86 - Vienne </option>
                          <option value="87">87 - Haute Vienne </option>
                          <option value="88">88 - Vosges </option>
                          <option value="89">89 - Yonne </option>
                          <option value="90">90 - Territoire de Belfort </option>
                          <option value="91">91 - Essonne </option>
                          <option value="92">92 - Hauts de Seine </option>
                          <option value="93">93 - Seine Saint Denis </option>
                          <option value="94">94 - Val de Marne </option>
                          <option value="95">95 - Val d'Oise </option>
                          <option value="971">971 - Guadeloupe </option>
                          <option value="972">972 - Martinique </option>
                          <option value="973">973 - Guyane </option>
                          <option value="974">974 - Réunion </option>
                          <option value="975">975 - Saint Pierre et Miquelon </option>
                          <option value="976">976 - Mayotte </option>
                        </select>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                        <select
                          className="form-control-index custom-select"
                          name="catégories"
                        >
                          <option selected disabled>
                            Catégories
                  </option>
                          <option>Bricolage</option>
                          <option>Cours</option>
                          <option>Aide à la personne</option>
                          <option>Maison</option>
                          <option>Mécanique</option>
                          <option>Beaute</option>
                          <option>Loisirs</option>
                          <option>Vacances</option>
                        </select>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                        <button type="button" className="btn btn-danger wrn-btn">
                          Rechercher
                </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
          <br />
          <br />
          <br />
          <br />
          <br />
          {/*Fin barre de recherche */}
          {/* Début Section annonces */}
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="media border p-3 flex-column flex-md-row">
                  <img
                    src="https://via.placeholder.com/100x100"
                    alt="#"
                    className="align-self-center mr-3"
                    style={{ width: 100 }}
                    className="align-self-center mr-3 img-thumbnail shadow-sm"
                  />
                  <div className="media-body align-self-center">
                    <div className="d-flex">
                      <div className="p-1 "><Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>Titre annonce</h4></Link></div>
                      <div className="ml-auto p-2"> <small> <i>Posté par @Pseudo, le 00/00/0000</i></small></div>
                    </div>
                    <hr />
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
                      ipsum aliquam metus facilisis scelerisque. Quisque vitae
                      condimentum nulla. Vestibulum lobortis ullamcorper augue id
                      consequat. Orci varius natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Phasellus at aliquet dui. Mauris
                      dapibus lectus id laoreet iaculis. Duis auctor augue augue, eget
                      lobortis quam auctor at.
            </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-12">
                <div className="media border p-3 flex-column flex-md-row ">
                  <img
                    src="https://via.placeholder.com/100x100"
                    alt="#"
                    className="align-self-center mr-3 img-thumbnail shadow-sm"
                    style={{ width: 100 }}
                  />

                  <div className="media-body align-self-center">
                    <div className="d-flex">
                      <div className="p-1 "><Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>Titre annonce</h4></Link></div>
                      <div className="ml-auto p-2"> <small> <i>Posté par @Pseudo, le 00/00/0000</i></small></div>
                    </div>
                    <hr />
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
                      ipsum aliquam metus facilisis scelerisque. Quisque vitae
                      condimentum nulla. Vestibulum lobortis ullamcorper augue id
                      consequat. Orci varius natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Phasellus at aliquet dui. Mauris
                      dapibus lectus id laoreet iaculis. Duis auctor augue augue, eget
                      lobortis quam auctor at.
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
                    className="align-self-center mr-3 img-thumbnail shadow-sm"
                    style={{ width: 100 }}
                  />

                  <div className="media-body align-self-center">
                    <div className="d-flex">
                      <div className="p-1 "><Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>Titre annonce</h4></Link></div>
                      <div className="ml-auto p-2"> <small> <i>Posté par @Pseudo, le 00/00/0000</i></small></div>
                    </div>
                    <hr />
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
                      ipsum aliquam metus facilisis scelerisque. Quisque vitae
                      condimentum nulla. Vestibulum lobortis ullamcorper augue id
                      consequat. Orci varius natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Phasellus at aliquet dui. Mauris
                      dapibus lectus id laoreet iaculis. Duis auctor augue augue, eget
                      lobortis quam auctor at.
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
                    className="align-self-center mr-3 img-thumbnail shadow-sm"
                    style={{ width: 100 }}
                  />

                  <div className="media-body align-self-center">
                    <div className="d-flex">
                      <div className="p-1 "><Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>Titre annonce</h4></Link></div>
                      <div className="ml-auto p-2"> <small> <i>Posté par @Pseudo, le 00/00/0000</i></small></div>
                    </div>
                    <hr />
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
                      ipsum aliquam metus facilisis scelerisque. Quisque vitae
                      condimentum nulla. Vestibulum lobortis ullamcorper augue id
                      consequat. Orci varius natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Phasellus at aliquet dui. Mauris
                      dapibus lectus id laoreet iaculis. Duis auctor augue augue, eget
                      lobortis quam auctor at.
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
                    className="align-self-center mr-3 img-thumbnail shadow-sm"
                    style={{ width: 100 }}
                  />

                  <div className="media-body align-self-center">
                    <div className="d-flex">
                      <div className="p-1 "><Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>Titre annonce</h4></Link></div>
                      <div className="ml-auto p-2"> <small> <i>Posté par @Pseudo, le 00/00/0000</i></small></div>
                    </div>
                    <hr />
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
                      ipsum aliquam metus facilisis scelerisque. Quisque vitae
                      condimentum nulla. Vestibulum lobortis ullamcorper augue id
                      consequat. Orci varius natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Phasellus at aliquet dui. Mauris
                      dapibus lectus id laoreet iaculis. Duis auctor augue augue, eget
                      lobortis quam auctor at.
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
                    className="align-self-center mr-3 img-thumbnail shadow-sm"
                    style={{ width: 100 }}
                  />

                  <div className="media-body align-self-center">
                    <div className="d-flex">
                      <div className="p-1 "><Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>Titre annonce</h4></Link></div>
                      <div className="ml-auto p-2"> <small> <i>Posté par @Pseudo, le 00/00/0000</i></small></div>
                    </div>
                    <hr />
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
                      ipsum aliquam metus facilisis scelerisque. Quisque vitae
                      condimentum nulla. Vestibulum lobortis ullamcorper augue id
                      consequat. Orci varius natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Phasellus at aliquet dui. Mauris
                      dapibus lectus id laoreet iaculis. Duis auctor augue augue, eget
                      lobortis quam auctor at.
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
                    className="align-self-center mr-3 img-thumbnail shadow-sm"
                    style={{ width: 100 }}
                  />

                  <div className="media-body align-self-center">
                    <div className="d-flex">
                      <div className="p-1 "><Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>Titre annonce</h4></Link></div>
                      <div className="ml-auto p-2"> <small> <i>Posté par @Pseudo, le 00/00/0000</i></small></div>
                    </div>
                    <hr />
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
                      ipsum aliquam metus facilisis scelerisque. Quisque vitae
                      condimentum nulla. Vestibulum lobortis ullamcorper augue id
                      consequat. Orci varius natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Phasellus at aliquet dui. Mauris
                      dapibus lectus id laoreet iaculis. Duis auctor augue augue, eget
                      lobortis quam auctor at.
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
                    className="align-self-center mr-3 img-thumbnail shadow-sm"
                    style={{ width: 100 }}
                  />

                  <div className="media-body align-self-center">
                    <div className="d-flex">
                      <div className="p-1 "><Link to={process.env.PUBLIC_URL + "/SingleAnnonce"}><h4>Titre annonce</h4></Link></div>
                      <div className="ml-auto p-2"> <small> <i>Posté par @Pseudo, le 00/00/0000</i></small></div>
                    </div>
                    <hr />
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
                      ipsum aliquam metus facilisis scelerisque. Quisque vitae
                      condimentum nulla. Vestibulum lobortis ullamcorper augue id
                      consequat. Orci varius natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Phasellus at aliquet dui. Mauris
                      dapibus lectus id laoreet iaculis. Duis auctor augue augue, eget
                      lobortis quam auctor at.
                  </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
          <br />
          <br />
        </div>;



        {/* FOOTER */}
        < Footer ></Footer >
      </div >
    );
  }
}
