import axios from 'axios'
// @ts-ignore
import { Grommet, Footer, Text} from 'grommet';
import { Routes, Route } from '../node_modules/react-router-dom/dist/index';
import NavBar from './Menu/NavBar';
import BottomBar from 'Menu/Footer';
import MainPage from 'pages/MainPage/MainPage';
import LoginForm from 'pages/LoginPage/LoginForm';
import CreateUser from 'pages/CreateuserPage/CreateUser';
import RecipesPage from 'pages/RecipesPage/RecipesPage';
import AddRecipePage from 'pages/AddRecipePage/AddRecipePage';
import SingleRecipe from 'pages/SingleRecipe/SingleRecipe';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import IntroductionPage from 'pages/IntroductionPage';
import recipeService from './services/recipes'
import userService from './services/users'
import awsService from './services/aws'
import { useEffect, useState } from 'react';
import { theme } from 'styles/theme';

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [users, setUsers] = useState([])
  const [loggedUser, setLoggedUser] = useState(null)
  const [loggedUserData, setLoggedUserData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all users
        const allUsers = await awsService.getAllAvatars();
        console.log('allUSERS', allUsers)
        setUsers(allUsers);

        // Fetch all recipes
        const allRecipes = await awsService.getAll();
        console.log('allrecipes', allRecipes)
        setRecipes(allRecipes);

        // Check if there's a logged-in user
        const loggedUserJSON = window.localStorage.getItem('loggedRecipeappUser');
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON);
          setLoggedUser(user);

          // Find the logged-in user data
          const userData = allUsers.find(u => u.username === user.username);
          setLoggedUserData(userData);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  const awsRecipeImageAdd = async (file) => {
    try {
      await awsService.create(file)
    }
    catch (exception) {
      console.log('error'
      )
    }
  }

  const handleRecipeAdd = async (recipeObject) => {
    const recipe_name = recipeObject.recipe_name
    const ingredients = recipeObject.ingredients
    const instructions = recipeObject.instructions
    const speed = recipeObject.speed
    const category = recipeObject.category
    const main_ingredient = recipeObject.main_ingredient
    const diet = recipeObject.diet
    const comments = recipeObject.comments
    const created = recipeObject.created
    const imageName = recipeObject.imageName

    try {
      const recipe = await recipeService.create({
        recipe_name, ingredients, instructions, speed, category,
        main_ingredient, diet, comments, created, imageName
      })
      setRecipes(recipes.concat(recipe))
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
      <NavBar user={loggedUser} loggedUserData={loggedUserData} setUser={setLoggedUser} />
      <Routes>
        <Route path="/" element={<MainPage recipes={recipes} />} />
        <Route path="/signin" element={<LoginForm setUser={setLoggedUser} />} />
        <Route path="/createuser" element={<CreateUser handleUserAdd={handleUserAdd}
          handleImageAdd={awsAvatarImageAdd} />} />
        <Route path="/profile" element={<ProfilePage loggedUserData={loggedUserData} />} />
        <Route path="/us" element={<IntroductionPage />} />
        <Route path="/recipes" element={<RecipesPage recipes={recipes} />} />
        <Route path="/addrecipe" element={<AddRecipePage handleRecipeAdd={handleRecipeAdd}
          handleImageAdd={awsRecipeImageAdd} />} />

        {recipes?.map(recipe => (
          <Route
            key={recipe.id}
            path={`/recipes/${recipe.id}`}
            element={<SingleRecipe recipe={recipe} recipes={recipes} />}
          />
        ))}
      </Routes>
      <BottomBar />
    </Grommet>
  );
}

export default App;
