import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//Inclu les fichiers communs
import Header from '../../view/Common/Header';
import Footer from '../..//view/Common/Footer';
import MemberGrid from '../../components/MemberGrid/MemberGrid';
import './Member.css';
import axios from 'axios';
import '../../css/loading.css';
import SearchMember from '../../components/SearchMember/SearchMember';



export default class Member extends Component {
    constructor(props){
        super(props);
        this.state = {
            allUsers: [],
            showUsers: false
        }
    }
    

    componentDidMount(){
        document.title = "Profil - Membres";
        
        axios.get(`http://localhost:8000/api/users`)
        .then(res => {
            this.setState({ allUsers: res.data['hydra:member']});
            if(res.data['hydra:member'].length > 0){
                this.setState({ showUsers: true });
            }
        })


    }

    render() {
        return (
            <div className="body" id="bodyHome">  
                <Header></Header>
                <br />
                <br />
               
                <div className="container">   
                <center>
                    <h1>MEMBRES</h1>
                </center>
                <br />
                <hr />
                <br /> 
                <SearchMember></SearchMember>
                {
                    this.state.showUsers ? 
                        this.state.allUsers.map(e => (                            
                            <div class="d-inline-flex p-12 bd-highlight ">
                                <MemberGrid idMembre={e.id} pseudoMembre={e.pseudo} photoMembre={e.photo}></MemberGrid> 
                            </div>                    
                        ))
                        :
                        <div className="text-center">
                            <div class="loadingio-spinner-spin-gkmwr87oy9"><div class="ldio-qorx55o730n"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div></div>
                        </div>
                }
                </div>
                <Footer></Footer>               
            </div>                        
        );
    }
}
