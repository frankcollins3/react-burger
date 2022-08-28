
import logo from './logo.svg';
import ListComponent from './data/List'
import './App.css'
import IngredientList from './components2/IngredientList'
import Burgers from './components2/Burger'

import React, { useState } from 'react';

// console.log('ListComponent')
// console.log(ListComponent)

function App () {
  console.log("APP.js beginning!")
  // *** main STATE
  const [ingredientsToDisplay, setIngredientsToDisplay] = useState(ListComponent)
  const [burgerToDisplay, setBurgerToDisplay] = useState([])
  // *** main STATE
  
  const [isclicked, setIsClicked] = useState('')
  const [btnclick, setBtnClick] = useState('')

  // *** inputs!!
  const [searchChar, setSearchChar] = useState('')
  const [fakeSubmit, setFakeSubmit] = useState('')
  

  let buttonClick = async (event) => {        
    let clickid = event.target.id   // setting the id and crafting conditionals around the 
    // console.log('clickid')
    // console.log(clickid)
    if (isclicked == clickid) {
      // console.log("if isclicked == clickid")
      setIsClicked('')
    } else {
      // ***      await this.setState({ fadecount: this.state.fadecount + 1})    fadecount for later.
      await setIsClicked(clickid)
      await setBtnClick(true)
      await console.log('btnclick')
      await console.log(btnclick)
    }
    }



    let InputHandler = async (event) => {
      // let autoUpdateVal = event.target.value
      await setSearchChar(event.target.value)    // storing this makes you have to access autoUpdateval
    }
    
    let InputSubmit = async () => {
      await console.log('searchChar in the SUBMIT SUBMIT SUBMIT')      
      let userValue = {searchChar}
      console.log('userValue')
      console.log(userValue)      
      await setFakeSubmit(searchChar)            
    }

    const addBurgerIngredients = async () => {
      console.log("addBurgerIngredients function")
      console.log('fakeSubmit')
      console.log(fakeSubmit)
      ListComponent.forEach( async (componentList) => {
        if (fakeSubmit == componentList.name) {
          console.log('componentList.color')
          console.log(componentList.color)
          let ingredient = {
            name: fakeSubmit,
            color: componentList.color
          }
          const updatedBurger = [ingredient, ...burgerToDisplay]
          await setBurgerToDisplay(updatedBurger)
          console.log('updatedBurger')
          console.log(updatedBurger)
          
          await console.log('burgerToDisplay')
          await console.log(burgerToDisplay)
        }
      })

      
      // console.log("burger")
      ListComponent.filter( (filtlist) => {
          // console.log('filtlist')
          // console.log(filtlist)
      })
    }

  
  console.log("APP.js END!!!!!!")
  return (
    <div className="Main-App-Wrapp Row-Center">

      <div className="Component-Wrapper Column-Center-Center">
        <Burgers 
            InputHandler = {InputHandler}
            InputSubmit = {InputSubmit}
            fakeSubmit = {fakeSubmit} 
            Burger = {burgerToDisplay}
            addBurgerIngredients = {addBurgerIngredients}
        />

      </div>

      <div className="Component-Wrapper Column-Center-Center">
      <IngredientList 
            buttonClick={buttonClick}
            isclicked={isclicked}       // isclicked={[isclicked, setIsClicked]}
            btnclick = {btnclick}
            List = {ListComponent}
            InputHandler = {InputHandler}
            InputSubmit = {InputSubmit}
            fakeSubmit = {fakeSubmit} 

      />
      </div>
      
    </div>
  )
}

export default App





// import './App.css';
// import React, { Component } from 'react'

// import MainParentContainer from './components/BurgerContainer'

// let joints = ['burger king', 'wendys', 'mconalds', 'checkers', 'sonic']
// let randomJoint = joints[Math.floor(Math.random() * joints.length)]

// //**** */ */ this.increment = this.increment.bind(this)
// class App extends Component { 
  
//   constructor() {
//     super()
//     this.state = {
//       burger: 'burger king'
//     }
//     console.log('this.state.burger BEFORE ******')
//     console.log(this.state.burger)
//   }
  
//   // ????????????????????????? LIFE CYCLE !!!!
//   componentDidMount() {
//     console.log("we see the component did mount!")
//   }
  
//   componentDidUpdate() {
//    
//   }
//   // ?????????????????????????????? LIFE CYCLE !!!!
  
  
//   // ******* FUNCTIONALITY
//   changeSpot = () => {
//     console.log('changeSpot function!')
//     randomJoint = ''
//     randomJoint = joints[Math.floor(Math.random() * joints.length)]    
//     this.setState({ burger: randomJoint })
//     console.log('this.state.burger AFTER')
//     console.log(this.state.burger)
//   }
    
//   // ******* FUNCTIONALITY
  
//   render() {
    

//     console.log('randomJoint')
//     console.log(randomJoint)
    
//     return (
//       <>
//         <div className="Burger-Header Row-Center">
//           <MainParentContainer />
//           {/* <p> burger check </p>
//           <p> burger check </p> */}

//         </div>
//         {/* <div className="Burger-Header Column-Center-Center">
//           <p> test </p>
//           <p> {this.state.burger} </p>
//           <button onClick={this.changeSpot} className="Burger-Button">YUM</button> */}
//         {/* </div> */}




//         {/* <button onClick={this.seeThemThangs}> Reset </button> */}
//        </>
//     )
//   }
// }

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <>
// //         <p> ayooo </p>
// //         </>
// //       </header>
// //     </div>
// //   );
// // }

