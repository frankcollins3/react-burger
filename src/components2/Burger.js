function Burgers (props) {
    // *** BURGER component BEGINNING
    console.log('props')
    console.log(props)

    
        let secretIngredients = props.Burger.map( (fooditems, index) => {
            console.log('fooditems')
            console.log(fooditems)
            // return <li key={index}> {fooditems.name} </li>
            return <p id="Burger-Material" key={index} style={{ color: fooditems.color, backgroundColor: fooditems.color, border: `5px solid ${fooditems.color}`, lineHeight: '-3em' }}> {fooditems.name} </p>
            // return <div id="Burger-Material" key={index} style={{ backgroundColor: fooditems.color }}></div>
        })


    // *** BURGER component END! ********************************************************************************
    return (
        <>
            {/* <ul className="Burger-Ul Column-Center-Center"> */}
            {/* <p> {props.Burger.length >= 1 ? props.Burger : 'hey'}</p> */}
            {/* <li id="Burger-Li"> {props.Burger.length >= 1 ? props.Burger : 'hey'}</li> <br></br> */}
            <ul className="Burger-Ul">
            {/* <li id="Burger-Li"> {props.Burger} <br></br> </li> */}
            {secretIngredients}

            </ul>

            {/* </ul> */}
            {/* <p> {props.Burger || 'lets seee'}</p> */}
            <button onClick={props.addBurgerIngredients} type="button" className="Burger-Button" id="Bag"></button>
            {/* <button onClick={()=> console.log("burger bag")} type="button" className="Burger-Button">checkIngreeds</button> */}
        </>
    )
}
export default Burgers