import React, { Component } from 'react';

class Ingredients extends Component {
    constructor(props) {
        let newfunction = props.parentState()
        
       

        super()
        this.state = {
            condiment: '',
            bun: '',
            beef: '',
            btnclick: false,
            isclicked: '',
            
            propcondiment: '',
            propbun: '',
            propbeef: '',
            propbtnclick:   '', 
            propisclicked:  '',

            inputcharacters: '',
            submittedinput: '',
            fadecount: 0
        }            
    }
    
    async componentDidMount() {
        console.log("componentDidMount!")

        const handOff = async () => {
            console.log('INGREDIENTS LIST this.props')
            const newObject = this.props.parentState()    
            const childClick = newObject.propbtnclick                    
            await this.setState({ propcondiment: newObject.propCondiment})
            await this.setState({ propbun: newObject.propbun})
            await this.setState({ propbeef: newObject.propbeef})
            await this.setState({ propbtnclick: `${newObject.propbtnclick} btnclickupdate` })
            await this.setState({ propisclicked: newObject.propisclicked})
            setTimeout( () => {
                console.log(
                    `
                    condiment ${this.state.propcondiment},
                    bun ${this.state.propbun},
                    beef ${this.state.propbeef},
                    propbtnclick ${this.state.propbtnclick},
                    isclicked ${this.state.propisclicked}
                    `
                )
            }, 3000)
        }
    }

    async componentDidUpdate() {
        console.log("componentDidUpdate")   // 1 console.log() ---> shows (2) componentDidUpdate in the devTools. It shows the number of times that state is being changed.
    }


    buttonClick = async (event) => {        
        let clickid = event.target.id   // setting the id and crafting conditionals around the 
        if (this.state.isclicked == clickid) {      
            this.setState({ isclicked: ''})
        } else {
            // * this is for the input to give it some life and to allow the message
            await this.setState({ fadecount: this.state.fadecount + 1})
            await console.log('this.state.fadecount')
            await console.log(this.state.fadecount)

            console.log('we are clicking the button')
            await this.setState({ btnclick: true})
            await this.setState({ isclicked: clickid })
            console.log('buttonclick state')
            await console.log(this.state.btnclick)
            console.log('is clicked state')
            await console.log(this.state.isclicked)
        }
    }

    ingredientInputHandler = async (event) => {
        let val = event.target.value
        console.log('we are in the input registering changes!')
        await this.setState({ inputcharacters: val})
        await console.log('this.state.inputcharacters')
        await console.log(this.state.inputcharacters)
        console.log(event)
        console.log(event.target)
    }

    ingredientInputSubmit = async (event) => {
        
        console.log("we are clicking the button that acts as a state-based-submit")
        const fakeSubmitData = this.state.inputcharacters // we are doing this so we have a way of confirming the input is fully filled out and that inputcharacters wont keep changing.
        await this.setState({ submittedinput: fakeSubmitData})                
    }

    // * handOff receives the FUNCTION that STORES the BurgerContainer state as a RETURNED-OBJECT sent over from BurgerContainer as PROPS


    render() {
        return (
            <>
            <div className="Button-Wrapper Row-Center">
            <button 
                onClick={this.buttonClick}
                className={this.state.btnclick == false ? "Burger-Button" : "Burger-Button Button-Animation"} 
                id="Bread"
                style={{ display: this.state.isclicked == 'Beef' || this.state.isclicked == 'Condiment' ? 'none' : 'block'}}                
                // style={{ display: this.state.isclicked == '' || this.state.isclicked == 'Beef' || this.state.isclicked == 'Condiment' ? 'block' : 'none'}}                
            >
            </button>
            {/* ******************* BREAD END ************** */}

            <button 
            onClick={this.buttonClick}
            className={this.state.btnclick == false ? "Burger-Button" : "Burger-Button Button-Animation" } 
            id="Condiment"
             style={{ display: this.state.isclicked == 'Bread' || this.state.isclicked == 'Beef' ? 'none' :  'block'}} 
            // id={this.state.isclicked == '' || this.state.isclicked == 'Condiment' ? "Condiment" : "Hidden"} 
            // style={{ display: this.state.isclicked == '' || this.state.isclicked !== 'Condiment' ? 'block' : 'none'}}
            // style={{ display: this.state.isclicked == 0 ? 'block' : 'none'}}
            >   
            </button>
                {/* ******************* CONDIMENT END ************** */}

            <button
                onClick={this.buttonClick}
                className={this.state.btnclick == false ? "Burger-Button" : "Burger-Button Button-Animation"}
                id="Beef"   
                style={{ display: this.state.isclicked == 'Bread' || this.state.isclicked == 'Condiment' ? 'none' : 'block'}}
             >                
             </button>
                {/* ******************* BEEF END ************** */}

             
            </div>

            <div className="Ingredients-Wrapp Column-Center-Center">
            { this.state.isclicked == 'Bread' ? <p onClick={()=> console.log("clicking the bread")}> Kaiser Bun <br></br> Sesame Bun <br></br> Gluten Free Bun <br></br> Lettuce Wrap</p>  : <p> </p>}
            { this.state.isclicked == 'Beef' ? <p onClick={() => console.log('clicking the beef')}> Beef Patty <br></br> Soy Patty <br></br> Black Bean Patty <br></br> Chicken Patty</p> : <p> </p>}
            { this.state.isclicked =='Condiment' ? <p onClick={() => console.log("condiment clicker! pass the salt!")}>Lettuce <br></br> Tomato <br></br> Bacon <br></br> Onion</p> : <p> </p>}


            <input onChange={this.ingredientInputHandler}type="text" name="IngredientInput" id="IngredientInput" style={{ display: this.state.isclicked == '' ? 'none' : 'block' }}/> 

            <label 
            className={this.state.isclicked == '' && this.state.fadecount < 1 ? '' : "List-Label Label-Animate"} 
            style={{ display: this.state.isclicked == '' ? 'none' : 'block' }}
            htmlFor="ingredientinput"> {this.state.isclicked == '' ? '' : 'pass the submit please'} 
            </label>    

            
            <button onClick={this.ingredientInputSubmit}type="button" id="SaltSubmit" style={{ display: this.state.isclicked == '' ? 'none' : 'block'}}/>
            </div>

            
            </>
        )
    }
}
export default Ingredients

// [
//     {name: 'Kaiser Bun', color: 'saddlebrown'},
//     {name: 'Sesame Bun', color: 'sandybrown'},
//     {name: 'Gluten Free Bun', color: 'peru'},
//     {name: 'Lettuce Wrap', color: 'olivedrab'},

//     {name: 'Beef Patty', color: '#3F250B'},
//     {name: 'Soy Patty', color: '#3F250B'},
//     {name: 'Black Bean Patty', color: '#3F250B'},
//     {name: 'Chicken Patty', color: 'burlywood'},

//     {name: 'Lettuce', color: 'lawngreen'},
//     {name: 'Tomato', color: 'tomato'},
//     {name: 'Bacon', color: 'maroon'},
//     {name: 'Onion', color: 'lightyellow'}
//   ]