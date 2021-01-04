import React,{Component} from 'react'
import { Col, Row } from 'react-bootstrap';
import Estados from './Estados'
import Nome from './Nome'
import Nascimento from './Nascimento'
import Sexo from './Sexo'
import Cidades from './Cidades'
import axios from 'axios'
import { Redirect } from 'react-router'


class NovaVaga extends Component{

    state = {
        nome: '',
        nascimento: '',
        sexo: '',
        estado: '',
        cidade: '',
        redirect: ''
    }

    pegarNome = (childData) => {
        this.setState({nome: childData})
    }

    pegarNascimento = (childData) => {
        this.setState({nascimento: childData})
    }

    pegarSexo = (childData) => {
        this.setState({sexo: childData})
    }
    pegarEstado = (childData) => {
        this.setState({estado: childData})
    }

    pegarCidade = (childData) => {
        this.setState({cidade: childData})
    }

    cadastrar = (dados) => {
        let aviso = 'Favor verificar os campos:'
        let obj = Object.entries(this.state)
        console.log(obj)
        for(let i = 0; i < 5;i++){
            for(let k = 0; k < 2; k++){
                if(obj[i][k] === ''){
                    aviso += '\n' + obj[i][0]
                }
            }
        }
        if (aviso !== 'Favor verificar os campos:'){
            alert(aviso)
        }else{
            axios.post('http://localhost:3333/cadastro', {
                nome: this.state.nome,
                nascimento: this.state.nascimento,
                sexo: this.state.sexo,
                estado: this.state.estado,
                cidade: this.state.cidade
              })
              .then(async function () {
                alert('CADASTRADO COM SUCESSO');
              })
              .catch(async function (error) {
                alert('ALGO DE ERRADO NAO ESTA CERTO \n' + error);
              });
             this.setState({redirect: '/Home'})
        }
        
        dados.preventDefault();
    }

    render(){

        if(this.state.redirect === ''){
            return(

                <div>
                    
                    <h2>Cadastrar Cliente</h2>  
    
                    <form onSubmit={this.cadastrar}>
    
                        <Nome pegarNome = {this.pegarNome} />   
    
                        <Row>
                            <Col>
                                <Nascimento pegarNascimento = {this.pegarNascimento} />
                            </Col>
                            <Col>
                                <Sexo pegarSexo = {this.pegarSexo}/>
                            </Col>
                        </Row>
                        <div style ={{marginTop: -10}}>
                            <Row>
                                <Col>
                                    <Estados pegarEstado = {this.pegarEstado}/>
                                </Col>
                                <Col>
                                <   Cidades uf = {this.state.estado} pegarCidade = {this.pegarCidade}/> 
                                </Col>
                            </Row> 
                        </div>   
                        
                        
                        
                        <p></p>
                        <div className='form-group'>
                            <button  className='btn btn-success' >Cadastrar</button>
                        </div>
    
                    </form>
    
                </div>
            )
        }else{
            return <Redirect to={this.state.redirect} />
        }
        
    }
}

export default NovaVaga;