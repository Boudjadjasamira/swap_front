import React, { Component } from 'react';

export default class BulleMessage extends Component {

    render() {
        return (
            <div> 
                <div className="message info">
                    <img alt={this.props.photo} className="img-circle medium-image" src={"http://localhost:8000/uploads/avatars/" + this.props.photoProfil}/>
                        <div className="message-body">
                            <div className="message-info">
                                <h4> {this.props.nom} {this.props.prenom} </h4>
                                <h5><i className="fa fa-clock-o" />{this.props.dateTime}</h5>
                            </div>
                            <hr />
                            <div className="message-text">
                                {this.props.message}
                            </div>
                        </div>
                    <br />
                </div>
            </div>
        )
    }
};