import Select from "./Select"
import React, { Component } from 'react';
import { render } from "@testing-library/react";

class Stack extends Component {
    constructor(props){
        super(props)
        this.state = {
            ingredients: this.props.stackFood
        };
    }


    // const burger = props.stackFood.map((eachItem, index)=>{
    //     return <div>
    //            <li key={index}>{eachItem}</li>
    //            </div>
    // })
  

    render(){
        const selectPass = this.props.stackFood
        const arr = this.props.delete
        return (
            <div id="stack">
                <h1>Food Here!</h1>
               
                <ul>
                <Select selectPass={selectPass} arr={arr}/>
                </ul>
                
            </div>
        )

    }
    
}

export default Stack;   