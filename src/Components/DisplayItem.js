import React from 'react'

function DisplayItem({ drink }) {
  return (
    <div className='displayItem'>
        <div>{drink.strDrink}</div>
    </div>
  )
}

export default DisplayItem