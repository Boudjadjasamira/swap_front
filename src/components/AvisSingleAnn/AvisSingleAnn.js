import React, { Component } from 'react';
//importation de axios
import axios from 'axios';

export default class AvisSingleAnn extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            allAvis : [],
            idUser: "",
            avis: "",
            dateAvis: "",
            note: true,
            idAvis: this.props.idAvis, 
            note: []
        }

    }
      
    componentDidMount(){
        let tabNote = [];
        
        for(let i = 0;i < this.props.note;i++){
            tabNote.push(i)
        }

        this.setState({note: tabNote});

        axios.get(`http://149.91.89.142:8000/api/avis/`+ this.props.idAvis)
        .then(res => {
                this.setState({
                    idUserEnvoi: res.data.pseudo,
                    avis: res.data.avis,
                    dateAvis: res.data.dateAvis,
                    idAvis:res.data.id
                });
            }
        )

        axios.get('http://149.91.89.142:8000/api/users')
        .then(res => {
            res.data['hydra:member'].map(e => {
                if(e.id == this.props.idUserEnvoi){
                    this.setState({pseudo: e.pseudo})
                }
                return true
            })
        })
       
    }



    
    render() {

        return (

 
  <div className="collapse p-1" id="collapseExample">
        <div className="container w-50 p-1">
            <div className="media border p-3 flex-column flex-md-row">
                <div className="media-body align-self-center">
                    <p>Avis posté le {this.props.dateAvis} par {this.state.pseudo}</p>
                    <div className="container">
                        <div className="row">
                            <ul className="employers-icons list-inline mb-1">
                                {this.state.note.map(e => (
                                    <li className="list-inline-item"><a href="#" className="text-warning"><i className="mdi mdi-star f-19"></i></a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="text-justify">{this.state.avis}</p>
                </div>
            </div>
        </div>  
    </div>    
     
        )
    }    
};