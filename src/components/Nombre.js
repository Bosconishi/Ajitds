import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Nombre extends Component {
    
        constructor(props) {
            super(props);

            this.state = {
                n:0
            }
    
        }
    
     confimation (){
        this.setState({
             n : this.state.n+1
        })
     }
     
     alert (){
        this.alert('Webmaster:Bosco')
     }
  
    render() {
        return (
            <div>
                <h3>Subscribed : {this.state.n} </h3>
                <button onClick={() => this.confimation()}>Confirmer</button>
            </div>
        );
    }
}

export default Nombre;