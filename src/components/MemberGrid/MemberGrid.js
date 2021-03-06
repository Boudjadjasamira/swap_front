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
                      <img src={"http://149.91.89.142:8000/uploads/avatars/" + this.props.photoMembre} alt={this.props.photoMembre} className="rounded-circle img-thumbnail"/>
                    </div>
                    <div>
                      <p className="text-muted">@{this.props.pseudoMembre}</p>
                      <p className="text-muted"><i className="mdi mdi-map-marker" />{this.props.CPMembre}</p>
                    </div>
                    <div className="team-social-icon p-2 ml-2">            
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