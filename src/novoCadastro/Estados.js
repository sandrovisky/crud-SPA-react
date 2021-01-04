import axios from 'axios'
import {Component} from 'react'

const ufs = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
});

class Estados extends Component{
    
    constructor() {
        super()
        this.state = {
            optionEstado: []
        };
    
        this.handleChange = this.handleChange.bind(this);
      }

    async componentDidMount(){
        const response =  await ufs.get('');
        this.setState({optionEstado: response.data.map(data => <option key = {data.id} value = {data.sigla}>{data.nome}</option>)})
        
    }

    handleChange(event){
        this.props.pegarEstado(event.target.value)
      }
    
    render(){
        
        return(
            <div >
                
                <label >Estado</label>
                <div >
                    <select className="form-control" value = {this.state.estado} onChange={this.handleChange} id ='estados' >
                        {this.state.optionEstado.unshift(<option key = {0} value = {''} ></option>)}
                        {this.state.optionEstado}
                    </select>
                </div>      

            </div>
        )

    
        
                
            
        
    }

}

export default Estados;