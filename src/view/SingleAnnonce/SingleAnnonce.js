import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import SingleAn from '../../components/SingleAn/SingleAn';
import axios from 'axios';
import MapSingleAn from '../../components/MapSingleAn/MapSingleAn';
import Avis from '../../components/Avis/Avis';
import AvisSingleAnn from '../../components/AvisSingleAnn/AvisSingleAnn';

export default class SingleAnnonce extends Component {

  constructor(props){
    super(props);
    this.state = {
      //position: [0, 0],
      position: null,
      nomVille: "",
      laMap: "",
      allAvis : [],
      IdUserEnvoi: "",
      avis: "",
      dateAvis: "",
      note: true
    }
  }

  componentDidMount(){
    const search = window.location.pathname.toString().split('-')[1];

    axios.get('http://149.91.89.142:8000/api/annonces/' + search)
    .then(( res => {
      if(res.data.latitude > 0){
        this.setState({laMap: <MapSingleAn positionEnvoi={[res.data.latitude * 1, res.data.longitude * 1]} villeEnvoi={res.data.ville}></MapSingleAn>})
      }
    }));


      axios.get('http://149.91.89.142:8000/api/avis')
      .then( res => {
          this.setState({allAvis: res.data['hydra:member'], showLoading: false});
      });
  
  }
  
  render() {
    return (
      <div className="body" id="bodyHome">
        {/* HEADER */}
        <Header></Header>

        <SingleAn></SingleAn>

        {this.state.laMap}

        <button class="btn btn-outline-dark" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" style={{marginLeft:'480px'}}>
        Voir les avis    
        </button>
        
        {this.state.allAvis.map(e => (
          <AvisSingleAnn idAvis={e.id} idUserEnvoi={e.idUser} avis={e.avis} dateAvis={e.dateAvis} note={e.note}></AvisSingleAnn>
        ))}


        {/* FOOTER */}
        <Footer></Footer>
      </div>
    );
  }
}
