import React, { useState, useEffect} from 'react';
import Recipe from './components/Recipe';
import './App.css';

const App = () => {

  // IMPORTANT - WARNING
  // PLACE THESE CONSTANTS IN ENVIRONMENT VARIABLES
  const APP_ID = 'd87fa8bd';
  const APP_KEY = '490e64ea83d78ca2982193d85eb48a44';
  const req = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  // IMPORTANT - WARNING
  

  useEffect(() => {
    console.log('Effect applied');
    getRecipes();
  });

  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const response = await fetch(req);
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits)
  }

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
          <button
            className="search=button" type="submit"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            Search
          </button>
      </form>
      {recipes.map(index => {
        return (
          <Recipe/>
        );
      })}
    </div>
  )
}

export default App;
