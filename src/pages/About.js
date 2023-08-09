import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Picture from '../components/Picture';
import Bouton from '../components/Bouton';
import Lien from '../components/Lien';
import Form from '../components/Form';
import Footer from '../components/Footer';

const About = () => {
    return (

        
        <div>
            <Navigation />
            <Picture />
 
            <h2>A propos de App_Bosco</h2>
             <Lien />
            <br />
            <h2>Une personne est un membre de l’AJITDS</h2>
            <p>Si c’est un Etudiant /ou un Lauréat dont leurs collines d’origine<br />  sont
               respectivement MURAMA, TURA, GAKONI suivant les activités<br /> de l’AJITDS et
               contribue une somme de Dix mille franc (10.000fbu) burundais <br />a chaque quinzieme
               jour du mois dont l’utilisation de la somme contribuée est étudiée<br /> dans l’Assemblée
                Générale.</p>
               <br />
               <p>Toute opération de versement doit être matérialisée par le bordereau de versement
                  (si le compte est ouvert) déposé à la trésorerie. <br />Toute fois un retard de
                  remboursement sans motif valable (justification en cas de maladie ou décès !) sera
                  pénalisé <br />par une amande d’intérêt de 10% de la somme accréditée dans deux mois
                  supplémentaire. <br />Encore deux mois supplémentaire, ca sera 20%, et ainsi de suite(en
                  augmentant 10 % pour chaque deux mois supplementaire)</p>
               <br />
                 <Form />
                 <Footer />
        </div>
    );
};

export default About;