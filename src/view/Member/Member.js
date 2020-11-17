import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//Inclu les fichiers communs
import Header from '../../view/Common/Header';
import Footer from '../..//view/Common/Footer';
import MemberGrid from '../../components/MemberGrid/MemberGrid';
import './Member.css';
import axios from 'axios';


export default class Member extends Component {
    constructor(props){
        super(props);
        this.state = {
            allUsers: [],
            pseudo:"",
            photo : ""

        }
      }
    

    componentDidMount(){
        document.title = "Profil - Membres";

         
  axios.get(`http://localhost:8000/api/users`)
  .then(res => {
    this.setState({ allUsers: res.data['hydra:member']});
  })


    }

    render() {
        return (
            <div className="body" id="bodyTransparent">  
                <Header></Header>
                <br />
                <br />
                <div className="container">        
                {
                        this.state.allUsers? 
                        this.state.allUsers.map(e => (                            
                    <div class="d-inline-flex p-12 bd-highlight">
                        <MemberGrid>{e.pseudo} {e.photo} </MemberGrid> 
                    </div>                    
                        ))
                        :
                        <p>Aucun Membres</p>
                }
                </div>
                <Footer></Footer>               
            </div>                        
        );
    }
}
