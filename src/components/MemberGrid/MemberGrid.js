import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class MemberGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {  
        pseudo: "",       
        photo: ""
      
        
    }
}

componentDidMount(){   

  //Recuperation des infos users
  axios.get(`http://localhost:8000/api/users/`)
  .then(res =>
      this.setState({
        pseudo: res.data.pseudo,
        photo: res.data.photo
      })
  )
  
}

    render() {
        return (
            <div className="content ">
              <div className="container">                
                <div className="text-center card-box border ">
                  <div className="member-card pt-2 pb-2  p-5 text-center">
                    <div className="thumb-lg member-thumb mx-auto">
                      <img src={"http://localhost:8000/uploads/avatars/" + this.props.photo} alt="Avatar" className="rounded-circle img-thumbnail"/>
                    </div>
                    <div>
                      <p className="text-muted">@{this.props.pseudo}</p>
                    </div>
                    <div className="team-social-icon p-2">
                      <ul className="blog-details-icons list-inline mb-0">
                        <li className="list-inline-item"><a href="#" className><i className="mdi mdi-facebook" /></a></li>
                        <li className="list-inline-item"><a href="#" className><i className="mdi mdi-twitter" /></a></li>
                        <li className="list-inline-item"><a href="#" className><i className="mdi mdi-whatsapp" /></a></li>
                        <li className="list-inline-item"><a href="#" className><i className="mdi mdi-instagram" /></a></li>
                      </ul>              
                      <ul className="employers-icons list-inline mb-1">
                          <li className="list-inline-item"><a href="#" className="text-warning"><i className="mdi mdi-star f-19"></i></a></li>
                          <li className="list-inline-item"><a href="#" className="text-warning"><i className="mdi mdi-star f-19"></i></a></li>
                          <li className="list-inline-item"><a href="#" className="text-warning"><i className="mdi mdi-star f-19"></i></a></li>
                          <li className="list-inline-item"><a href="#" className="text-warning"><i className="mdi mdi-star f-19"></i></a></li>
                          <li className="list-inline-item"><a href="#" className="text-warning"><i className="mdi mdi-star f-19"></i></a></li>
                      </ul>
                        <span className="badge badge-warning text-white">4.9</span>
                    </div>
                    <br />
                    <hr />
                    <div className="text-center mt-2 mb-0">
                        <Link className="btn btn-custom btn-sm" to={process.env.PUBLIC_URL + "/Myprofil"}> Profil</Link>
                    </div>     
                  </div>
                </div>
              </div>        
            </div>
        )
    }
};