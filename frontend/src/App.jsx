import axios from 'axios'
// @ts-ignore
import { Grommet, Text, Button } from 'grommet';
import { Routes, Route } from '../node_modules/react-router-dom/dist/index';
import NavBar from './Menu/NavBar';
import MainPage from 'pages/MainPage/MainPage';
import LoginForm from 'pages/LoginPage/LoginForm';
import CreateUser from 'pages/CreateuserPage/CreateUser';
import RecipesPage from 'pages/RecipesPage/RecipesPage';
import AddRecipePage from 'pages/AddRecipePage/AddRecipePage';
import SingleRecipe from 'pages/SingleRecipe/SingleRecipe';
import recipeService from './services/recipes'
import loginService from './services/login'
import userService from './services/users'
import  awsService from './services/aws'
import { useEffect, useState } from 'react';


const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "20px",
      height: "20px",
    },
  },
};

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [user, setUser] = useState(null)

  console.log(recipes)

  useEffect(() => {
    awsService.getAll()
      .then(recipes => {
        setRecipes(recipes)
      })
      .catch(error => {
        console.error('Error fetching recipes:', error)
      });
  }, [])


  const handleRecipeAdd = async (recipeObject) => {
    const recipe_name = recipeObject.recipe_name
    const ingredients = recipeObject.ingredients
    const instructions = recipeObject.instructions
    const speed = recipeObject.speed
    const category = recipeObject.category
    const main_ingredient = recipeObject.main_ingredient
    const diet = recipeObject.diet 
    const comments = recipeObject.comments 
    const creator = recipeObject.creator 
    const created = recipeObject.created

    console.log(recipeObject)
  
    try {
      const recipe = await recipeService.create({
        recipe_name, ingredients, instructions, speed, category, 
        main_ingredient, diet, comments, creator, created
      })
      setRecipes(recipes.concat(recipe))
    } 
    catch (exception) {
      console.log('error'
      )
    }
  }
  const handleImageAdd = async (file) => {
    try {
      await awsService.create(file)
    }
    catch (exception) {
      console.log('error'
      )
    }
  }

  const handleUserAdd = async (user) => {
    try {
      await userService.create(user)
    }
    catch (exception) {
      console.log('error'
      )
    }
  }

  return (
    <Grommet theme={theme} full>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage recipes={recipes} />} />
        <Route path="/signin" element={<LoginForm/>} />
        <Route path="/createuser" element={<CreateUser handleUserAdd={handleUserAdd} />} />
        <Route path="/recipes" element={<RecipesPage recipes={recipes} />} />
        <Route path="/addrecipe" element={<AddRecipePage handleRecipeAdd={handleRecipeAdd}
         handleImageAdd={handleImageAdd} />} />

        {recipes?.map(recipe => (
          <Route
            key={recipe.id}
            path={`/recipes/${recipe.id}`}
            element={<SingleRecipe recipe={recipe} recipes={recipes}/>}
          />
        ))}
      </Routes>
    </Grommet>
  );
}

export default App;
