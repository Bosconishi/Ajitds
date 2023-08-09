import React, { Component } from 'react';

class Form extends Component {

          constructor(props){
            super(props)

            this.state = {

                username : '',
                surname : '',
                topic : ''
            }

          }

          handleUsernameChange = (event) =>{
               this.setState({
                username : event.target.value
                
               })

          }

          handleSurnameChange = (event) =>{
            this.setState({
             surname : event.target.value
            })

       }

       handleTopicChange = (event) =>{
        this.setState({
         topic : event.target.value
        })

   }
          handleSubmit = event => {

            alert('MERCI DE S\'ABONNER')
            
          }

    render() {
        const {username, surname, topic} = this.state
        return (
            <fieldset>

            <form action="" onSubmit={this.handleSubmit}>
                 <div>
                    Verification :  <br />
                    <label htmlFor="">Username : </label>
                    <input type="text" value={username} onChange={this.handleUsernameChange}/> <br />

                    <label htmlFor="">Surname : </label>
                    <input type="text" value={surname} onChange={this.handleSurnameChange}/>  <br />
                    <label htmlFor="">Topic </label>
                    <select name="" id="" value={topic} onChange={this.handleTopicChange}>
                             <option value="">React</option>
                             <option value="">Vue</option>
                             <option value="">JSX</option>
                             <option value="">Next</option>
                             <option value="">Angular</option>
                    </select><br />
                    <button type='submit'>Ok</button>
                </div>
            </form>

            </fieldset>
            
            
        );
    }
}

export default Form;