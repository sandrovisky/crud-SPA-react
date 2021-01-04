import React,{Component} from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './home/home'
import New from './novoCadastro/NovoCadastro'
import Cadastros from './cadastros/Cadastros'

class Page extends Component{
    render(){
        return(
            <div>
                <Switch>

                    <Route path = '/Home'>
                        <Home />
                    </Route>

                    <Route path = '/NovoCadastro'>
                        <New />
                    </Route>

                    <Route path = '/Cadastros'>
                        <Cadastros />
                    </Route>

                </Switch>
            </div>
        )
    }
}

export default Page;