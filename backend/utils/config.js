require('dotenv').config()

console.log('here we are')
const PORT = process.env.PORT || 3001
console.log('here we are again', PORT)

const MONGODB_URI = process.env.NODE_ENV === 'test' 
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI

module.exports = {
  MONGODB_URI,
  PORT
}