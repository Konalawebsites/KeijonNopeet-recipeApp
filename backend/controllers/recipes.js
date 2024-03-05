const recipesRouter = require('express').Router()
const Recipe = require('../models/recipe')

recipesRouter.get('/', async (request, response, next) => {
  Recipe.find({})
  .then(recipes => {
    response.json(recipes)
  })
  .catch(error => next(error))
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
  // Now you can use imageName variable in this component
  
  console.log('body', body)
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
    imageSrc: body.imageSrc
  })

  recipe.save()
    .then(savedRecipe => {
      response.json(savedRecipe)
    })
    .catch(error => next(error))
})

module.exports = recipesRouter
