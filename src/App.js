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
      fetch(`${api.base}s=${query}&api_key=${api.key}`)
      .then(resp => resp.json())
      .then(itemData => {
        setData(itemData)
        setQuery('')
        console.log('called')
      })
    }
  }

  const handleChange = e => {
    setQuery(e.target.value)
  }

  return (
    <div className="App">
      <Header title='Cocktail Recipes'/>
      <SearchBar 
        description='Search name and press enter'
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
