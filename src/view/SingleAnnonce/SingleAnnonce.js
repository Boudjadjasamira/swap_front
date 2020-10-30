import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import SingleAn from '../../components/SingleAn/SingleAn';

export default class SingleAnnonce extends Component {
  render() {
    return (
      <div className="body" id="bodyHome">
        {/* HEADER */}
        <Header></Header>

        <SingleAn></SingleAn>

        {/* FOOTER */}
        <Footer></Footer>
      </div>
    );
  }
}
