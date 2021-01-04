import React, { Component } from "react";

class Sexo extends Component {
  constructor() {
    super();
    this.state = {
      sexo: "",
      verificador: ''
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  } 

  onChangeValue(event) {
    this.setState({ sexo: event.target.value})
    this.props.pegarSexo(event.target.value)
  }
  

  render() {
    
    return (
        <div className = 'form-group' > 

            <label >Sexo</label>

            <div style = {{marginLeft: -13, marginTop: -7}} onChange={this.onChangeValue}>

                <div className = 'btn form-check form-check-inline'>
                    <label  className = 'form-control'>
                        <input type="radio" value="masculino" name="gender" /> Masculino
                    </label>
                </div>

                <div className = 'btn form-check form-check-inline'>
                    <label  className = 'form-control'>
                        <input type="radio" value="feminino" name="gender" /> Feminino
                    </label>
                </div>

                <div className = 'btn form-check form-check-inline'>
                    <label  className = 'form-control'>
                        <input type="radio" value="alien" name="gender" /> Alienigena
                    </label>
                </div>
            
            </div>

        </div>
    );
  }
}

export default Sexo;