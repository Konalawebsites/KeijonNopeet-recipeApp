const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
  const users = await User
  .find({}).populate('recipes')

  response.json(users.map( user => user.toJSON()))
})

usersRouter.post('/', async (request, response) => {
  const { username, password, imageName} = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    passwordHash,
    created: new Date(),
    imageName
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)
})
module.exports = usersRouter