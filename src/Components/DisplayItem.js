import React from 'react'

function DisplayItem({ drink }) {
    const ingredients = [...Array(16).keys()].slice(1).map(el => drink['strIngredient' + el] + ': ' + drink['strMeasure' + el] + ', ').filter(el => el !== 'null: null, ' )
    console.log(ingredients)
  return (
    <div className='displayItem'>
        <div id='drinkName'>{drink.strDrink}</div>
        <div id='drinkGlass'>{drink.strGlass}</div>
        <div id='drinkIngredients'>{ingredients}</div>
        <div id='drinkMethod'>{drink.strInstructions}</div>
        <img src={drink.strDrinkThumb} alt='img'/>
    </div>
  )
}

export default DisplayItem