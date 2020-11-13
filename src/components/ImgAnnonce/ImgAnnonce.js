import React, { Component } from 'react';
import Typewriter from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';

export default class ImgAnnonce extends Component {

    render() {
        return (
            <div>                              
               <Tilt> <img className="img-fluid " src={process.env.PUBLIC_URL + 'assets/img/img4.png'} alt="logo" width="80%"/>   </Tilt>              
                <h1 style={{ paddingTop: '20px', marginBottom: 'auto 0', fontWeight: 'bold', paddingLeft:"40px" }}>                            
                    <span style={{ color: 'Black', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter 
                            //loop
                            cursor
                            cursorStyle='_'
                            typeSpeed={90}
                            deleteSpeed={50}
                            delaySpeed={550}
                            words={[ 'Echangez', 'Partagez','Troquez','Swap !']}
                        />
                    </span>
                </h1>  
                <p style={{ color: '#B1AAAA', fontSize: '18px' , paddingLeft:"40px", paddingTop: '10px'}} >
                Mettez à profits vos compétences pour les autres ! 
                Grace à la messagerie, trouver un service dont vous avez besoin discuter en toute simplicité, convenez d'un rendez-vous et hop ont swap ! 
                </p>   
            </div>
          )
    }
};