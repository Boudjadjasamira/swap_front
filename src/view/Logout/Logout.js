import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/login.css';
import { Redirect } from 'react-router-dom';


export default class login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            connected: localStorage.getItem('connected'),
            redirection: false
        }
    }

    componentDidMount() {
        if (this.state.connected == 1) {
            this.setState({ redirection: true });
            localStorage.setItem('connected', '0');
            localStorage.setItem('ID', '0');
        }
    }

    render() {
        return (
            <div>
                {this.state.redirection ?
                    <Redirect to="/"></Redirect>
                    :
                    <p>Erreur de déconnexion</p>
                }
            </div>
        );
    }
}