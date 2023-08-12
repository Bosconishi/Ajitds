import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Picture from '../components/Picture';
import Bouton from '../components/Bouton';
import Footer from '../components/Footer';
import Nombre from '../components/Nombre';

const Home = () => {
    return (
        <div>
          <Navigation/>
          <h1>AJITDS</h1> 
          <p> Association Des Jeunes Intellectuels de Tura pour le Developpement et la Solidarite</p> 
          <Picture />
     
          <h1>Welcome for using App_Bosco</h1>
          <fieldset>
          <form action="">
            <label htmlFor="name">Votre Nom : </label>
            <input type="text" placeholder='nishimwe'/> <br />
            <label htmlFor="surname">Votre Prenom : </label>
            <input type="text" placeholder='Jean Bosco'/>   <br />
            <label htmlFor="s">Sexe : </label><br />
            <input type="radio" />  <br />
            <input type="radio"  /> 
            <br />
          </form>
          <Bouton />
          <Nombre />
          </fieldset>
          <Footer />
        </div>
    );
};

export default Home;