import React, { Component } from 'react';

class Select extends Component{
       constructor(props){
           super(props)
          
       }  
    
               
    
    render(){
        const ingredients = this.props.selectPass.map((eachItem, index) => {
            console.log(eachItem)
            return <div>
                  <li key={index}>{eachItem}</li>
                  
                  </div>
                })
        return(
            <div>
                <h1>Hello!</h1>
                <ul>
                  {ingredients}
                </ul>
                <button onClick={this.props.arr}>Clear</button>
            </div>
        )
    }
    
}

export default Select;