import React,{Component} from 'react'
import {useLocation} from "react-router-dom";



class EditarCadastro extends Component{

    
    componentDidMount(){
        const {id} = this.props.location.id
        alert(id)
    }
    render(){
        
        return(
            <div>
                
            </div>
        )
    }
}

export default EditarCadastro;