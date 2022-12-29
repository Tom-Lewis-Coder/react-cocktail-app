import React from 'react'

function DisplayItem({ drink }) {
  let index = 1
  let ingredients = []
  while (drink['strIngredient' + index]) { 
    ingredients.push(`${drink['strIngredient' + index]}: ${drink['strMeasure' + index] ? drink['strMeasure' + index].trim() + '\n' : 'Dash'}`)
  index++
}

  return (
    <div className='displayItem'>
      <div className='drink-text'>
        <div className='displayTitle'>{drink.strDrink}</div>
        <div id='drinkType'>{drink.strAlcoholic + ' ' + drink.strCategory}</div>
        <div id='drinkGlass'>Serve in a {drink.strGlass}</div><br />
        <div className='displayTitle'>Ingredients</div><br />
        <div id='drinkIngredients'>{ingredients}</div><br />
        <div className='displayTitle'>Method</div><br />
        <div id='drinkMethod'>{drink.strInstructions}</div>
      </div> 
      <div className='drink-img'>
        <img src={drink.strDrinkThumb} alt='finished drink'/>
       </div> 
    </div>
  )
}

export default DisplayItem