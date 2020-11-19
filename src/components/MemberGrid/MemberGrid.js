import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MemberGrid extends Component {

  render() {
        return (
            <div className="content">
              <div className="container resulted">                
                <div className="text-center card-box2 border">
                  <div className="member-card pt-2 pb-2  p-5 text-center">
                    <div className="thumb-lg member-thumb mx-auto">
                      <img src={"http://localhost:8000/uploads/avatars/" + this.props.photoMembre} alt={this.props.photoMembre} className="rounded-circle img-thumbnail"/>
                    </div>
                    <div>
                      <p className="text-muted">@{this.props.pseudoMembre}</p>
                    </div>
                    <div className="team-social-icon p-2">
                      <ul className="blog-details-icons list-inline mb-0">
                        <li className="list-inline-item"><a href="http://www.facebook.com/sharer.php?u=http://www.swap.fr/monProfil"><i className="mdi mdi-facebook" /></a></li>
                        <li className="list-inline-item"><a href="https://twitter.com/intent/tweet"><i className="mdi mdi-twitter" /></a></li>
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
                        <Link className="btn btn-custom btn-sm" to={process.env.PUBLIC_URL + "/Profil-" + this.props.idMembre}> Profil</Link>
                    </div>     
                  </div>
                </div>
              </div>        
            </div>
        )
    }
};