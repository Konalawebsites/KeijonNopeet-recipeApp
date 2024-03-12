import axios from 'axios'
const recipeImagesUrl = 'http://localhost:3001/api/aws/recipeImages'
const avatarImagesUrl = 'http://localhost:3001/api/aws/avatarImages'

const getAll = async () => {
  const request = axios.get(recipeImagesUrl)
  return request.then(response => response.data)

}

const create = async (file) => {
  const response = await axios.post(recipeImagesUrl, file, { headers: {'Content-Type': 'multipart/form-data'}})
  console.log('fileAWSSERCVICE', file)
  return response.data
}

const getAllAvatars = async () => {
  const request = axios.get(avatarImagesUrl)
  return request.then(response => response.data)
}

const createAvatar = async (file) => {
  const response = await axios.post(avatarImagesUrl, file, { headers: {'Content-Type': 'multipart/form-data'}})
  return response.data
}


export default { getAll, create, getAllAvatars, createAvatar }