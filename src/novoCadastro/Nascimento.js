import React from 'react';

export default class Nascimento extends React.Component {
    constructor(props) {
      super(props);
      this.state = {nascimento: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.props.pegarNascimento(event.target.value)
    }
  
    render() {
      return (
        <div className = 'form-group'>

            <label>Nascimento:</label>                
            <input type="date" onChange={this.handleChange} className = 'form-control' />
          
        </div>
      );
    }
  }