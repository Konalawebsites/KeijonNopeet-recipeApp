const multer  = require('multer')
const awsRouter = require('express').Router()
const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const crypto = require('crypto')
const sharp = require('sharp')

const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");


const dotenv = require('dotenv');

dotenv.config()

const randomImageName = (bytes = 32 ) => crypto.randomBytes(bytes).toString('hex')
const imageName = randomImageName()

const bucketName = process.env.BUCKET_NAME
const bucketRegion = process.env.BUCKET_REGION
const accessKey = process.env.ACCESS_KEY_ID
const secretAccessKey = process.env.SECRET_ACCESS_KEY

const s3 = new S3Client({
  credentials: { 
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey },
  region: bucketRegion
})

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

awsRouter.get('/', async (req, res) => {
 
  const buffer = await sharp(req.file.buffer).resize({height: 1920, width: 1080, fit: 'contain'}).toBuffer()
  
  const params = {
    Bucket: bucketName,
    Key: imageName,
    Body: buffer,
    ContentType: req.file.mimetype
  }

  const command = new PutObjectCommand(params)

  await s3.send(command)

  res.send({})
})

awsRouter.post('/', upload.single('file'), async (req, res) => {
 
  const buffer = await sharp(req.file.buffer).resize({height: 1920, width: 1080, fit: 'contain'}).toBuffer()
  
  const params = {
    Bucket: bucketName,
    Key: imageName,
    Body: buffer,
    ContentType: req.file.mimetype
  }

  const command = new PutObjectCommand(params)

  await s3.send(command)

  res.send({})
})

module.exports = { awsRouter, imageName }

