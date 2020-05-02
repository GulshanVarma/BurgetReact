// combine ingredients and send to Burger

import React from 'react'
import { Component } from 'react'
import Aux from '../hoc/Aux'
import Burger from '../Components/Burger/Burger'

class BurgerBuilder extends Component{
    state = {
        ingredients:{
            cheese:3,
            meat:2,
            bacon:2
        }
    }
    render(){
        return(
            <Aux>
                <Burger ingredients = {this.state.ingredients}/>
                <p>Burger controls here</p>
                
            </Aux>
        )
    }
    
}
export default BurgerBuilder;