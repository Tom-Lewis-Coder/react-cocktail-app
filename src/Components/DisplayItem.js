import React from 'react'

function DisplayItem({ drink }) {
  let index = 1
  let ingredients = []
  while (drink['strIngredient' + index]) { 
    ingredients.push(drink['strIngredient' + index] + ': ', drink['strMeasure' + index] ? drink['strMeasure' + index] + '. ' : 'Dash' ) 
  index++
}

  return (
    <div className='displayItem'>
      <div className='drink-text'>
        <div id='drinkName'>{drink.strDrink}</div>
        <div id='drinkType'>{drink.strAlcoholic + ' ' + drink.strCategory}</div>
        <div id='drinkGlass'>Serve in a {drink.strGlass}</div><br />
        <div id='drinkIngredients'>Ingredients - {ingredients}</div><br />
        <div id='drinkMethod'>Method - {drink.strInstructions}</div>
      </div> 
      <div className='drink-img'>
        <img src={drink.strDrinkThumb} alt='img'/>
       </div> 
    </div>
  )
}

export default DisplayItem