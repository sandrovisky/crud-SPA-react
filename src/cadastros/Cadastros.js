import React,{Component} from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap'

class Cadastros extends Component{

    constructor() {
        super()
        this.state = {
            lista: [],
            redirect: ''
        };
    
        this.excluir = this.excluir.bind(this);
    }
    
    //Excluir item do banco de dados
    excluir(e){
        if(window.confirm('Delete the item?' + e.target.value)){
            if(window.confirm('Tem certeza?')){
                axios.delete('http://localhost:3333/cadastro/:',{
                    data : {id: e.target.value}
                })
                .then(async function () {
                    alert('Deletado com sucesso');
                  })
                  .catch(async function (error) {
                    alert('ALGO DE ERRADO NAO ESTA CERTO \n' + error);
                  });
                this.setState({redirect: '/Home'})
            }
        }
    }
       
    
    //Gera dados
    async componentDidMount(){
        const cadastros = axios.create({
            baseURL: 'http://localhost:3333/cadastro'
        });
        
        const response =  await cadastros.get('');

        this.setState({lista: response.data.map(dados => <tr key = {dados.id}>
            <td>{dados.id}</td>
            <td>{dados.nome}</td>
            <td>{dados.nascimento.substr(8, 2)}{dados.nascimento.substr(4, 4)}{dados.nascimento.substr(0, 4)}</td>
            <td>{dados.sexo}</td>
            <td>{dados.estado}</td>
            <td>{dados.cidade}</td>
            <td>< Button variant="primary" size = 'sm' value = {dados.id} onClick = {this.teste}>Editar</Button>    <Button size = 'sm' variant="danger" value ={dados.id} onClick= {this.excluir}>Excluir</Button></td>
        </tr>)})
    }

    render(){
    
        if(this.state.redirect === ''){
            return(
                <div>
                <table className = 'table bg-light mt-3'>
                    <thead>  
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Data de Nascimento</th>
                            <th>Sexo</th>
                            <th>Estado</th>
                            <th>Cidade</th>
                            <th>#</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.lista}
                    </tbody>              
                    
                </table>
                
            </div>
                
            )
        }else{
            return(
                
                <div>
                    
                </div>
                
            )   
        }
        
    }

}

export default Cadastros;