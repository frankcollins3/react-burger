import React, { Component } from 'react';
import Ingredients from './IngredientsList'

// function MainParentContainer () {
class mainParentContainer extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            parentcondiment: '',
            parentbun: '',
            parentbeef: '',
            parentbtnclick: false,
            parentisclicked: ''
        }
    }

    parentPropPassoff = () => {
        console.log("parentPropPassoff!!!!")
        const parentState = {
            propcondiment: this.state.parentcondiment,
            propbun: this.state.parentbun,
            propbeef: this.state.parentbeef,
            propbtnclick: this.state.parentbtnclick,
            propisclicked: this.state.parentisclicked 
        }
        console.log('parentState in the parent!!!')
        console.log(parentState)
        return parentState
    }
    
    render() {
        
        
        let isParent = true

        //    * this function checks for the existence of children!
        let birdsAndBees = (e) => {
            // console.log(e)
            // console.log(e.target)
        //   if (e.target.hasChildNodes()) {
        //   } else { console.log('there are no kids')}
       }

    //    * this function checks for the existence of children!
       let checkBody = (event) => {
            // console.log('event')
            // console.log(event)
            // if (event.target.hasChildNodes()) {
            // } else { console.log("nope no kids")}
       }
        
           return (
        <div className={isParent == true ? "Main-Parent-Container Row-Center" : "Hidden"} onMouseEnter={checkBody}>
            <div className="Component-Wrapper Column-Center-Center" onMouseEnter={birdsAndBees}>                
            <button onClick={this.parentPropPassoff} type="text" name="parent" className="Burger-Button"></button>
        </div>


        <div className="Component-Wrapper Column-Between" onMouseEnter={birdsAndBees}>
            <Ingredients parentState={this.parentPropPassoff}/>
            </div>
        </div>
    )
    }
}
export default mainParentContainer 

        
//     return (
//         <div className={isParent == true ? "Main-Parent-Container Row-Center" : "Hidden"} onMouseEnter={checkBody}>
//             <div className="Component-Wrapper Column-Center-Center" onMouseEnter={birdsAndBees}>                
//             </div>
//             <div className="Component-Wrapper Column-Between" onMouseEnter={birdsAndBees}>
//             <Ingredients />
//             </div>
//         </div>
//     )


// export default MainParentContainer