import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { getSuggestedQuery } from '@testing-library/react';
import RecipeWindow from './components/RecipeWindow';

function App() {
  const YOUR_APP_ID= 'a9ceeac3';
  const YOUR_APP_KEY = '700d726d8c1b2e0fb394c47e092e4b44' ;

  const [query, setQuery] = useState('');

  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
 
  

  const getRecipes = async() => {
    const response = await fetch(url);
    const data = await response.json();

    setRecipes(data.hits);
    console.log(data.hits);
   };

   const submitHandler = function(e){
     e.preventDefault();
     getRecipes();
   }

  return (
    <div className="App">
      <h1>Search Your Recipe</h1>
    {/* SEARCH FORM */}
      <form className = "form-control" onSubmit = {submitHandler}>
        <input type = "text" placeholder = 'Search your food' className = "input-search" value={query} onChange={(e) =>setQuery(e.target.value)}/>   
            
        <input type = "submit" value = 'Search' className  ="btn-submit" />
      </form>

      <RecipeWindow recipes = {recipes} />
      
    </div>
  );
}

export default App;
