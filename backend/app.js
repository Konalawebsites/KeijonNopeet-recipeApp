const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const recipesRouter = require('./controllers/recipes')
<<<<<<< HEAD
const { awsRouter } = require('./controllers/multer')
=======
>>>>>>> e0f7442b6eadb312a158acca03127aa21e347e42
const middleware = require('./utils/middleware.js')
const logger = require('./utils/logger.js')
const mongoose = require('mongoose')

<<<<<<< HEAD
=======

>>>>>>> e0f7442b6eadb312a158acca03127aa21e347e42
mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use(middleware.requestLogger)

app.use('/api/recipes', recipesRouter)
<<<<<<< HEAD
app.use('/api/recipeImages', awsRouter)
=======
>>>>>>> e0f7442b6eadb312a158acca03127aa21e347e42

// if (process.env.NODE_ENV === 'test') {
//   const testingRouter = require('./controllers/testing')
//   app.use('/api/testing', testingRouter)
// }

app.use(middleware.unknownEndpoint)

module.exports = app