import React,{Component} from "react";

class Bouton extends Component{
    constructor(){
        super()
        this.state ={
            msg : 'Abonnez-Vous SVP!!'
            
        }
    }
  render(){
    return(
        <div>
            <h3>{this.state.msg}</h3>
            <button onClick={() =>this.changemessage()}>Subscriber</button>
        </div>
    )
  }
      changemessage(){
        this.setState({
          msg:'Merci pour votre Abonnement'})
      }
}

export default Bouton