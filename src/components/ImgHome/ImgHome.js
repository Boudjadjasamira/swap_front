import React, { Component } from 'react';
import Typewriter from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';

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
                        Mettez à profits vos compétences pour les autres ! 
                        Grace à la messagerie, trouver un service dont vous avez besoin discuter en toute simplicité, convenez d'un rendez-vous et hop ont swap ! 
                        </p>            
                    </div>
                    <div class="col">
                       <Tilt><img class="img-fluid flex-wrap" src={process.env.PUBLIC_URL + 'assets/img/img5.png'} alt="logo" width="90%"/></Tilt>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
          )
    }
};