import React from 'react'
import './RecipeWindow.css'
import { v4 as uuidv4 } from 'uuid';


const RecipeWindow = ({recipes}) => {
    return (
        <div className = "recipe-window">
          {recipes.map(recipe =>(
              <div className="recipe" key={`${recipe.recipe.label}--${uuidv4()}`} 
              onClick={window.open(recipe.recipe.uri)}>
                  <h2>{recipe.recipe.label}</h2>
                  <img src={recipe.recipe.image} alt="{recipe.recipe.label}"/>
                  <h3>{recipe.recipe.mealType}</h3>
                  <h4>{recipe.recipe.cuisineType}</h4>
              </div>
          ))} 
        </div>
    )
}

export default RecipeWindow
