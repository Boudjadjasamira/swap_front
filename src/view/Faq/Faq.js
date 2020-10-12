import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
//Inclu les fichiers communs
import Header from '../../view/Common/Header';
import Footer from '../..//view/Common/Footer';



export default class Faq extends Component {
    
    render() {
      return (
        

        <div className="body" id="bodyHome" >
{/* HEADER */}
<Header></Header>
        <section
  className="accordion-section clearfix mt-3"
  aria-label="Question Accordions"
>
  <div className="container">
    <center>
      <h1>Frequently Asked Questions </h1>
    </center>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
              ipsum aliquam metus facilisis scelerisque. Quisque vitae
              condimentum nulla. Vestibulum lobortis ullamcorper augue id
              consequat. Orci varius natoque penatibus et magnis dis parturient
              montes
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
              ipsum aliquam metus facilisis scelerisque. Quisque vitae
              condimentum nulla. Vestibulum lobortis ullamcorper augue id
              consequat. Orci varius natoque penatibus et magnis dis parturient
              montes
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
              ipsum aliquam metus facilisis scelerisque. Quisque vitae
              condimentum nulla. Vestibulum lobortis ullamcorper augue id
              consequat. Orci varius natoque penatibus et magnis dis parturient
              montes
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
              ipsum aliquam metus facilisis scelerisque. Quisque vitae
              condimentum nulla. Vestibulum lobortis ullamcorper augue id
              consequat. Orci varius natoque penatibus et magnis dis parturient
              montes
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
            ipsum aliquam metus facilisis scelerisque. Quisque vitae condimentum
            nulla. Vestibulum lobortis ullamcorper augue id consequat. Orci
            varius natoque penatibus et magnis dis parturient montes
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
{
  /*End FAQ */
}

{/* FOOTER */}
<Footer></Footer>
</div>


        
        );
    }
  }
  