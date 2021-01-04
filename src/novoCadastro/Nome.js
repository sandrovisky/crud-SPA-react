import React from 'react';

export default class Nome extends React.Component {
    constructor() {
      super()
      this.state = {nome: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({nome: event.target.value});
      this.props.pegarNome(event.target.value)
    }
  
  
    render() {
      return (
          
        <div className = 'form-group'>

            <label>Nome:</label>                
            <input type="text" value={this.state.value} 
            onChange={this.handleChange} className = 'form-control' />
          
        </div>
          
      );
    }
  }