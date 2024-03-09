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
  const [users, setUsers] = useState([])
  const [loggedUser, setLoggedUser] = useState(null)

  useEffect(() => {
    awsService.getAll()
      .then(recipes => {
        setRecipes(recipes)
      })
      .catch(error => {
        console.error('Error fetching recipes:', error)
      });
  }, [])

  useEffect(() => {
    awsService.getAllAvatars()
      .then(users => {
        setUsers(users)
      })
      .catch(error => {
        console.error('Error fetching users:', error)
      });
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedRecipeappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setLoggedUser(user)
      recipeService.setToken(user.token)
    }
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
  const awsRecipeImageAdd = async (file) => {
    try {
      await awsService.create(file)
    }
    catch (exception) {
      console.log('error'
      )
    }
  }
  const awsAvatarImageAdd = async (file) => {
    try {
      await awsService.createAvatar(file)
    }
    catch (exception) {
      console.log('error'
      )
    }
  }

  const handleUserAdd = async (loggedUser) => {
    console.log('handleuserAdd, user:', loggedUser)
    try {
      await userService.create(loggedUser)
      setUsers(users.concat(loggedUser))
    }
    catch (exception) {
      console.log('error')
    }
  }

  return (
    <Grommet theme={theme} full>
      <NavBar user={loggedUser} setUser={setLoggedUser}/>
      <Routes>
        <Route path="/" element={<MainPage recipes={recipes} />} />
        <Route path="/signin" element={<LoginForm setUser={setLoggedUser}/>} />
        <Route path="/createuser" element={<CreateUser handleUserAdd={handleUserAdd} 
        handleImageAdd={awsAvatarImageAdd} />} />
        <Route path="/recipes" element={<RecipesPage recipes={recipes} />} />
        <Route path="/addrecipe" element={<AddRecipePage handleRecipeAdd={handleRecipeAdd}
         handleImageAdd={awsRecipeImageAdd} />} />

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
