import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import DisplayList from './Components/DisplayList';

function App() {
  const [ query, setQuery ] = useState('')
  const [ data, setData ] = useState({})

  const api = {
    key: '1',
    base: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?'
  }

  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}s=${query.trim().replace(/\s\s+/g, ' ')}&api_key=${api.key}`)
      .then(resp => resp.json())
      .then(itemData => {
        itemData.drinks === null ? alert('Sorry, cocktail not found. Please check spelling') : setData(itemData)
        setQuery('')
      })
    }
  }

  const handleChange = e => {
    let val = e.target.value
    setQuery(val)
  }

  return (
    <div className="App">
      <Header title='The Cocktail App'/>
      <SearchBar 
        description='Type drink name and press enter'
        loadItem={search} 
        value={query}
        handleChange={handleChange}
      />
    {( data &&
      <DisplayList 
        drinks={data.drinks}
      />
    )}
    </div>
  );
}

export default App;
