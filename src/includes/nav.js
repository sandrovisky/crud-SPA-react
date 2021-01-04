import React,{Component} from 'react'
import {Button} from 'react-bootstrap'
import {Link} from "react-router-dom";


class Nav extends Component {
    render(){
        return(
           <nav>
               <Link to="/NovoCadastro">
                <Button variant="primary">Novo Cadastro</Button>{' '}
               </Link>

               <Link to="/Cadastros">
                <Button variant="secondary">Cadastros</Button>{' '}
               </Link>
                
                <Button variant="success">Success</Button>{' '}
            </nav> 
        )
    }    
}


export default Nav;