import React, { Component } from 'react';
//importation de axios
import axios from 'axios';

export default class Avis extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            mesAvis: [],
            mesNotes: [],
            leursAvis: [],
            leursNotes: [],
            nomLeursAvis: "",
            prenomLeursAvis: ""
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/avis')
        .then(res => {
            let tabTemp = [];
            let tabNote = [];

            res.data['hydra:member'].map( k => {
                if(k.idUser == localStorage.getItem('ID')){
                    tabTemp.push(k);
                    for(let i = 0;i < k.note;i++){
                        tabNote.push(i)
                    }
                }
            });
            this.setState({mesAvis: tabTemp, mesNotes: tabNote});
        });

        let leursAvisTemp = [];
        let leursNotesTemp = [];

        axios.get('http://localhost:8000/api/salons')
        .then(res => {
            res.data['hydra:member'].map(e => {
                if(e.idUser1 == localStorage.getItem('ID') || (e.idUser2 == localStorage.getItem('ID'))){
        
                    axios.get('http://localhost:8000/api/swaps')
                    .then(res2 => {
                        
                        res2.data['hydra:member'].map(k =>{
                            if(k.idSalon == e.id && k.isClotured == true && k.idUser != localStorage.getItem('ID')){
                                
                                axios.get('http://localhost:8000/api/avis')
                                .then(res3 => {
                                    
                                    res3.data['hydra:member'].map(j => {
                                        
                                        if(j.idUser == k.idUser){
                                            leursAvisTemp.push(j);
                                            
                                            for(let i = 0;i < j.note;i++){
                                                leursNotesTemp.push(i);
                                            }

                                            axios.get('http://localhost:8000/api/users')
                                            .then(res4 => {
                                                res4.data['hydra:member'].map(l => {
                                                    if(l.id == j.idUser){
                                                        this.setState({nomLeursAvis: l.nom, prenomLeursAvis: l.prenom});
                                                    }
                                                })
                                            })

                                            this.setState({leursAvis: leursAvisTemp, leursNotes: leursNotesTemp});
                                        }
                                    })
                                })

                            }
                        })
                    })

                }
            });
            
        })
    }
        
    render() {
        return (
            <div > 
                 <div class="py-5">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-12">
                            <ul class="nav nav-pills" >
                                <li class="nav-item"> 
                                    <a href="" class="active btn btn-outline-dark nav-link" data-toggle="pill" data-target="#tabone">Vos avis</a> 
                                </li>&ensp;
                                <li class="nav-item"> 
                                    <a class="btn btn-outline-dark nav-link" href="" data-toggle="pill" data-target="#tabtwo">Leurs avis</a> 
                                </li>
                            </ul>
                        <br />
                        <div class="tab-content mt-2">
                            <div class="tab-pane fade show active" id="tabone" role="tabpanel">
                                {this.state.mesAvis.map(e => (
                                    <div className="row justify-content-start">
                                        <div className="col-12">
                                            <div className="media border p-3 flex-column flex-md-row">
                                                <div className="media-body align-self-center">
                                                    <h5>Avis posté le {e.dateAvis.split(' ')[0].split('/')[2] + "/" + e.dateAvis.split(' ')[0].split('/')[1] + "/" + e.dateAvis.split(' ')[0].split('/')[0]}</h5>
                                                    <div className="container">
                                                        <div className="row">
                                                            <ul className="employers-icons list-inline mb-1">
                                                                {this.state.mesNotes.map(k => (
                                                                    <li className="list-inline-item"><a href="#" className="text-warning"><i className="mdi mdi-star f-19"></i></a></li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <p className="text-justify">
                                                        {e.avis}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                    </div>
                                ))}
                            </div>
                            <div class="tab-pane fade" id="tabtwo" role="tabpanel">
                                {this.state.leursAvis.map(e => (
                                    <div className="row justify-content-start">
                                        <div className="col-12">
                                            <div className="media border p-3 flex-column flex-md-row">
                                                <div className="media-body align-self-center">
                                                    <h5>Avis posté le {e.dateAvis.split(' ')[0].split('/')[2] + "/" + e.dateAvis.split(' ')[0].split('/')[1] + "/" + e.dateAvis.split(' ')[0].split('/')[0]} de {this.state.nomLeursAvis} {this.state.prenomLeursAvis}</h5>
                                                    <div className="container">
                                                        <div className="row">
                                                            <ul className="employers-icons list-inline mb-1">
                                                                {this.state.leursNotes.map(k => (
                                                                    <li className="list-inline-item"><a href="#" className="text-warning"><i className="mdi mdi-star f-19"></i></a></li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <p className="text-justify">
                                                        {e.avis}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
    </div>
    )}
};