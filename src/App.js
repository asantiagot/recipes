import React, { useState, useEffect} from 'react';
import Recipe from './components/Recipe';
import './App.css';

const App = () => {

  // IMPORTANT - WARNING
  // PLACE THESE CONSTANTS IN ENVIRONMENT VARIABLES
  const APP_ID = 'd87fa8bd';
  const APP_KEY = '490e64ea83d78ca2982193d85eb48a44';
  // IMPORTANT - WARNING
  
  const [query, setQuery] = useState('chicken');
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log('Effect applied');
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const req = (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const response = await fetch(req);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const handleSearch = event => {
    setSearch(event.target.value);
  }

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
  }

  return(
    <div className="App">
      <form 
        className="search-form"
        onSubmit={getSearch}>
        <input 
          className="search-bar" 
          type="text" 
          value={search} required 
          onChange={handleSearch}/>
          <button
            className="search=button"
            type="submit">
            Search
          </button>
      </form>
      {recipes.map((recipe, index) => {
        return (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}/>
        );
      })}
    </div>
  )
}

export default App;
