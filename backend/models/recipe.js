const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  id: Number,
  recipe_name: String,
  ingredients: Array,
  instructions: String,
  speed: Number,
  category: String,
  main_ingredient: String,
  diet: Array,
  likes: Number,
  image: String,
  comments: Array,
  creator: String,
  created: Date,
  imageName: String,
  imageUrl: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

recipeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Recipe', recipeSchema)