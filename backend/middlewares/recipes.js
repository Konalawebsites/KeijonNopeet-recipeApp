const Recipe = require('../models/recipe')

const fetchRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find({});
    req.recipes = recipes; // Attach recipes to request object
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = fetchRecipes