import React from "react";
import { useState } from "react"
import SearchPart from "./SearchPart/SearchPart";
import RecipesPart from "./RecipesPart/RecipesPart";
import { CenterBox, CenteredContainer } from "styles/styles";


const RecipesPage = ({ recipes }) => {

  const [searchTerm, setSearchTerm] = useState('')
  const [categoryTerm, setCategoryTerm] = useState('')
  const [mainIngredientTerm, setMainIngredientTerm] = useState('')
  const [dietTerm, setDietTerm] = useState('')
  const [speedTerms, setSpeedTerms] = useState([0, 100])
  const [filteredRecipes, setFilteredRecipes] = useState([])

  const handleSearchTerm = (event) => setSearchTerm(event.target.value)

  function filterBySearchTerm(array, string) {
    return array.filter(obj => {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'string' && obj[key].toLowerCase().includes(string.toLowerCase())) {
                    return true; // If any value matches the string, return true
                }
            }
        }
        return false; // If no value matches the string, return false
    });
}
  const recipesFoundBySearchForm = filterBySearchTerm(recipes, searchTerm) 

  var filterObject = { category: categoryTerm, main_ingredient: mainIngredientTerm, diet: dietTerm, speed: speedTerms }

  const handleSearchButton = () => {
    const list = recipesFoundBySearchForm.filter(recipe => {
      // Check if filterObject properties are empty
      const categoryCheck = !filterObject.category || recipe.category === filterObject.category;
      const mainIngredientCheck = !filterObject.main_ingredient || recipe.main_ingredient === filterObject.main_ingredient;
      const dietCheck = !filterObject.diet || recipe.diet === filterObject.diet;
      const speedCheck = !filterObject.speed || 
                        (recipe.speed >= filterObject.speed[0] && recipe.speed <= filterObject.speed[1]);
  
      return categoryCheck && mainIngredientCheck && dietCheck && speedCheck;
    });
    
    setFilteredRecipes(list)
    console.log('found:', filteredRecipes.length, 'recipes')
  };
  
  const handleResetButton = () => {
    setSearchTerm('')
    setCategoryTerm('')
    setMainIngredientTerm('')
    setDietTerm('')
    setSpeedTerms([0, 100])
  }

  return (
    <CenteredContainer>
      <CenterBox >
        <SearchPart recipes={recipes} 
        {...{ searchTerm, handleSearchTerm, categoryTerm, setCategoryTerm,
          mainIngredientTerm, setMainIngredientTerm, dietTerm, setDietTerm, speedTerms, setSpeedTerms, filterObject, handleSearchButton, handleResetButton}}
        />
        <RecipesPart filteredRecipes={filteredRecipes} setFilteredRecipes={setFilteredRecipes}/>
      </CenterBox>
    </CenteredContainer>
  )
}

export default RecipesPage