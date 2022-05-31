import React from 'react'
import DisplayItem from './DisplayItem'

function DisplayList({ drinks }) {
  return (
    <div className='displayList'>
      <div>{ drinks && drinks.map((drink) => <DisplayItem key={drink.idDrink} drink={drink} />) }</div>
    </div>
  )
}

export default DisplayList