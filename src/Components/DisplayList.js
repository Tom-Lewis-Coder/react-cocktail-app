import React from 'react'
import DisplayItem from './DisplayItem'

function DisplayList({ drinks }) {
  return (
    <div className='displayList'>
      <div>{ drinks && drinks.map((drink, index) => <DisplayItem key={index} drink={drink} />) }</div>
    </div>
  )
}

export default DisplayList