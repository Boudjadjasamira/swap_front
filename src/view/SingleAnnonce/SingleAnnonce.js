import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import SingleAn from '../../components/SingleAn/SingleAn';
import axios from 'axios';

import MapSingleAn from '../../components/MapSingleAn/MapSingleAn';

export default class SingleAnnonce extends Component {

  constructor(props){
    super(props);
    this.state = {
      //position: [0, 0],
      position: null,
      nomVille: "",
      laMap: ""
    }
  }

  componentDidMount(){
    const search = window.location.pathname.toString().split('-')[1];

    axios.get('http://localhost:8000/api/annonces/' + search)
    .then(( res => {
      if(res.data.latitude > 0){
        this.setState({laMap: <MapSingleAn positionEnvoi={[res.data.latitude * 1, res.data.longitude * 1]} villeEnvoi={res.data.ville}></MapSingleAn>})
      }
    }));
  
  }
  
  render() {
    return (
      <div className="body" id="bodyHome">
        {/* HEADER */}
        <Header></Header>

        <SingleAn></SingleAn>

        {this.state.laMap}

        {/* FOOTER */}
        <Footer></Footer>
      </div>
    );
  }
}
