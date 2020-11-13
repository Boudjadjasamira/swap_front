import React, { Component } from 'react';
import Typewriter from 'react-simple-typewriter'

export default class ImgHome extends Component {

    render() {
        return (
            <div class="container">     
                <div class="row">
                    <div class="col">           
                        <h1 style={{ paddingTop: '100px', marginBottom: 'auto 0', fontWeight: 'bold', paddingLeft:"200px" }}>
                            We{' '}
                            <span style={{ color: 'Black', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter 
                                    //loop
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={90}
                                    deleteSpeed={50}
                                    delaySpeed={550}
                                    words={['Swap ', 'Share', 'Meet','work', 'love','talk', 'live', 'Swap again !']}
                                />
                            </span>
                        </h1>  
                        <p style={{ color: '#B1AAAA', fontSize: '18px' , paddingLeft:"200px", paddingTop: '10px'}} >
                            Swap est une plate-forme de mise en relation entre particulier qui vise à favoriser l'échange de service.
                        </p>            
                    </div>
                    <div class="col">
                        <img class="img-fluid flex-wrap" src={process.env.PUBLIC_URL + 'assets/img/img5.png'} alt="logo" width="80%"/>       
                    </div>
                </div>
                <br />
            </div>
          )
    }
};