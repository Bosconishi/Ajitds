import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <span>
        <div className='nav'>
           <ul>
            <NavLink to ="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
               <li>Accueil</li>
            </NavLink>
            <NavLink to="Services" className={(nav) => (nav.isActive ? "nav-active" : "")}>
             <li>Nos services</li>
             </NavLink>
             <NavLink to="Crediter" ><li>Credits</li>  </NavLink>
             <NavLink to="Rembourser"><li>Payement</li></NavLink>
             <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>Plus d'infos</li>
            </NavLink>            
            </ul> 
        </div>
        </span>
    );
};

export default Navigation;