const multer = require('multer')
const awsRouter = require('express').Router()
const Recipe = require('../models/recipe')
const User = require('../models/user')
const fetchRecipes = require('../middlewares/recipes')
const fetchUsers = require('../middlewares/users')
const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const crypto = require('crypto')
const sharp = require('sharp')
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");


const dotenv = require('dotenv');

dotenv.config()

const bucketName = process.env.BUCKET_NAME
const bucketRegion = process.env.BUCKET_REGION
const accessKey = process.env.ACCESS_KEY_ID
const secretAccessKey = process.env.SECRET_ACCESS_KEY

function randomImgNameGenerator(){
  const randomImageName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex')
  return randomImageName()
}

const setImageName = (req, res, next) => {
  res.locals.imageName = randomImgNameGenerator();
  next();
};

const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey
  },
  region: bucketRegion
})

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

awsRouter.get('/recipeImages', fetchRecipes, async (req, res) => {

  const recipes = await Recipe
    .find({}).populate('user', { username: 1, imageName: 1})

  for (const recipe of recipes) {
    const recipeImageParams = {
      Bucket: bucketName,
      Key: 'recipeImages/' + recipe.imageName, 
    }

    const command = new GetObjectCommand(recipeImageParams)
    const urlRecipe = await getSignedUrl(s3, command, {expiresIn: 5} )
    recipe.imageUrl = urlRecipe

    const avatarImageParams = {
      Bucket: bucketName,
      Key: 'avatarImages/' + recipe.user.imageName, 
    }

    const command2 = new GetObjectCommand(avatarImageParams)
    const urlAvatar = await getSignedUrl(s3, command2, {expiresIn: 5} )
    recipe.avatarUrl = urlAvatar
    
  }
  await res.send(recipes)
})

awsRouter.post('/recipeImages', upload.single('file'), setImageName, async (req, res) => {

  const buffer = await sharp(req.file.buffer).resize({ height: 1920, width: 1080, fit: 'contain' }).toBuffer()

  const imageName = req.body.awsImageName

  const params = {
    Bucket: bucketName,
    Key: 'recipeImages/' + imageName, 
    Body: buffer,
    ContentType: req.file.mimetype
  }

  const command = new PutObjectCommand(params)

  await s3.send(command)
  
})

awsRouter.get('/avatarImages', fetchUsers, async (req, res) => {

  const users = await User
    .find({}).populate('recipes')

  for (const user of users) {
    const getObjectParams = {
      Bucket: bucketName,
      Key: 'avatarImages/' + user.imageName, 
    }

    const command = new GetObjectCommand(getObjectParams)
    const url = await getSignedUrl(s3, command, {expiresIn: 5} )
    user.avatarUrl = url
  }
  await res.send(users)
})

awsRouter.post('/avatarImages', upload.single('file'), async (req, res) => {
  const buffer = await sharp(req.file.buffer).resize({ height: 1920, width: 1080, fit: 'contain' }).toBuffer()
  
  const params = {
    Bucket: bucketName,
    Key: 'avatarImages/' + randomImgNameGenerator(), 
    Body: buffer,
    ContentType: req.file.mimetype
  }

  const command = new PutObjectCommand(params)
  
  await s3.send(command)

})

// // // /// // // // 
// const fetchImageUrl = async (imageName) => {

//   const recipes = req.recipes
//   console.log('recipes:', recipes)

//   for (const recipe of recipes) {
//     const getObjectParams = {
//       Bucket: bucketName,
//       Key: 'recipeImages/' + imageName, 
//     }

//     const command = new GetObjectCommand(getObjectParams)
//     const url = await getSignedUrl(s3, command, {expiresIn: 5} )
//     recipe.imageUrl = url
//   }
//   await res.send(recipes)
// }

module.exports = { awsRouter }
