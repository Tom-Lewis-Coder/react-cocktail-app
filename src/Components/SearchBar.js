import React from 'react'

function SearchBar({ description, value, handleChange, loadItem }) {
  return (
    <div className='search-bar'>
        <div className='sb-description'>{description}</div>
        <input
            name='searchBar'
            className='sb-input'
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