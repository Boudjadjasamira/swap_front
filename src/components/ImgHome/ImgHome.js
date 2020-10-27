import React, { Component } from 'react';

export default class ImgHome extends Component {

    render() {
        return (
            <div> 
                <center>
                    <img class="img-fluid flex-wrap" src={process.env.PUBLIC_URL + 'assets/img/img3.png'} alt="logo" width="60%" />
                </center>
                <br />
          </div>

          )
    }
};