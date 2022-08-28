function IngredientList(props) {
    console.log('IngredientList BEGINNING!')

    // console.log('props.list')
    // console.log(props.List)
    
    const checkIsClicked = async () => {        
        console.log('WERE WITHIN THE checkISCLICKED!!!! props.isclicked')
        await console.log(props.isclicked)
    }
    
    const burgerIngredients = props.List.map( (ListMap, index) => {
        // console.log('ListMap')
        // console.log(ListMap)
        if (props.isclicked == 'Bread') {
            if (ListMap.name.includes('Bun')) {
                return <li className="Ingredient-Li" onMouseEnter={(event)=> console.log(event.target.innerText) } key = {`${ListMap.color} ${index}`}> {ListMap.name}</li>                
            }
        } 
        else if (props.isclicked == 'Beef') {
            if (ListMap.name.includes('Patty')) {
                return <li className="Ingredient-Li" key = {`${ListMap.color} ${index}`}> {ListMap.name}</li>
            }
        } 
        else if (props.isclicked == 'Condiment') {
            if (!ListMap.name.includes('Bun') && !ListMap.name.includes('Patty'))
            return <li className="Ingredient-Li" key = {`${ListMap.color} ${index}`}> {ListMap.name}</li>
            
        }

    })

    

    console.log('IngredientList END!!!*********************************************************')
    return (
        <>
    <div className="Button-Wrapper Row-Center">
        <button 
        className={props.btnclick == '' ? "Burger-Button" : "Burger-Button Button-Animation"} 
        id="Bread"
        onClick={props.buttonClick} 
        style={{ display: props.isclicked == 'Beef' || props.isclicked == 'Condiment' ? 'none' : 'block'}}                

        >
        </button>
{/* BREAD END!!! ******************************************************************** */}

        <button 
        className={props.btnclick == '' ? "Burger-Button" : "Burger-Button Button-Animation"}
        id="Condiment"
        onClick={props.buttonClick} 
        style={{ display: props.isclicked == 'Bread' || props.isclicked == 'Beef' ? 'none' : 'block'}}
        >
        </button>
{/* Condiment END!!! ******************************************************************** */}
            
        <button 
        className={props.btnclick == '' ? "Burger-Button" : "Burger-Button Button-Animation"} 
        id="Beef"
        style={{ display: props.isclicked == 'Bread' || props.isclicked == 'Condiment' ? 'none' : 'block'}}
        onClick={props.buttonClick}
        >
        </button>
{/* BEEF END!!! ******************************************************************** */}
    </div>
    <div className="Ingredients-Wrapp Column-Center-Center">

    <ul> {burgerIngredients}</ul>
        {/* <p> {props.fakeSubmit} </p> */}
      <input style={{ display: props.btnclick == ''? 'none' : "block" }} onChange={props.InputHandler} type="text" name="IngredientInput" id="IngredientInput" />
      <button style={{ display: props.btnclick == ''? 'none' : "block" }} onClick={props.InputSubmit} type="button" id="Salt-Submit"></button>
    </div>      
    {/* // *** Ingredients-Wrapp Column-Center */}

    </>     // **** main parent fragment end

        
                
    )
}

export default IngredientList