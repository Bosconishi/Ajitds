import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Lien extends Component {
    render() {
        return (
            <div className='link'>
                <span>
                    
                <ul>
                
                <li><a href="Services.js">Nos Services</a></li>
                <li><a href="Crediter.js">Acreditation</a></li>
                <li><a href="Rembourser.js">Rembousement</a></li>
                </ul>

                </span>
                
               
            </div>
        );
    }
}

export default Lien;