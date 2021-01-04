import axios from 'axios'
import {Component} from 'react'


const url = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'
});
let options = []

class Cidades extends Component{
    

    constructor(props) {
        super(props)
        this.state = {
            cidade: '',
            opt: [],
            optVisibility: '',
            att: this.props.uf
        };
    
        this.handleChange = this.handleChange.bind(this);
      }    

    async componentDidUpdate() {
        const response = await url.get(`${this.props.uf}/distritos?orderBy=nome`);
        const opt = response.data.map(data => <option key = {data.id} value = {data.sigla}>{data.nome}</option>)
        options =  opt
        if(this.state.att !== this.props.uf){
            this.setState({att: this.props.uf})
            this.props.pegarCidade ('')
        }
    }

    handleChange(event) {
        this.props.pegarCidade(event.target.value)
    }
    
    render(){
        if(this.props.uf === ''){
            
            return(
                <div>
                    <label >Cidade</label>
                    <select className="form-control" value = {this.state.cidade} disabled>
                        <option value="" >Selecione um Estado</option>
                        
                    </select>
                </div>
                
            )
        }else{
            return(
                <div>

                    <label >Cidade</label>
                    <select className="form-control"onChange={this.handleChange}>
                        {options.unshift(<option key = {0} value = {''} >Selecione uma Cidade</option>)}
                        {options}
                    </select>  

                </div>
                
            )
        }
    }

}

export default Cidades;