import React from 'react'

function SearchBar({ description, value, handleChange, loadItem }) {
  return (
    <div className='search-bar'>
        <div>{description}</div>
        <input
            name='searchBar'
            type='text'
            placeholder='Search...'
            value={value}
            onChange={handleChange}
            onKeyPress={loadItem}
        >
        </input>
    </div>
  )
}

export default SearchBar