const recipesRouter = require('express').Router()
const Recipe = require('../models/recipe')
const User = require('../models/user')
const fetchRecipes = require('../middlewares/recipes');

const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  console.log('authorization', authorization)
  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.replace('Bearer ', '')
  }
  return null
}

recipesRouter.get('/', fetchRecipes, async (request, response, next) => {
  const recipes = await Recipe
    .find({}).populate('user', { username: 1, imageName: 1})

  response.json(recipes)
})

recipesRouter.get('/:id', async (request, response, next) => {
  Recipe.findById(request.params.id)
    .then(recipe => {
      if (recipe) {
        response.json(recipe)
      }
      else { response.status(404).end() }
    })
    .catch(error => next(error))
})

recipesRouter.post('/', async (request, response, next) => {

  const body = request.body

  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET)

  if (!decodedToken.id) {
    return response.status(401).json({ error: 'token invalid' })
  }
  const user = await User.findById(decodedToken.id)

  const recipe = new Recipe({
    id: body.id,
    recipe_name: body.recipe_name,
    ingredients: body.ingredients,
    instructions: body.instructions,
    speed: body.speed,
    category: body.category,
    main_ingredient: body.main_ingredient,
    diet: body.diet,
    likes: body.likes || 0,
    comments: body.comments || [],
    created: new Date(),
    imageName: body.imageName,
    user: user._id
  })

  const savedRecipe = await recipe.save()
  user.recipes = user.recipes.concat(savedRecipe._id)
  await user.save()

})


module.exports = recipesRouter
