const recipesRouter = require('express').Router()
const Recipe = require('../models/recipe')
const fetchRecipes = require('../middlewares/recipes');
const { rndImageName } = require('./multer')

recipesRouter.get('/', fetchRecipes, async (request, response, next) => {
  const recipes = request.recipes; 
  response.json(recipes);
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
    creator: body.creator || "admin",
    created: new Date(),
    imageName: rndImageName,
  })

  recipe.save()
    .then(savedRecipe => {
      response.json(savedRecipe)
    })
    .catch(error => next(error))
})


module.exports = recipesRouter
