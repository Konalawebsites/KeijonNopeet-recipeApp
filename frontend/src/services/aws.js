import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/recipeImages'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async (file) => {
  const response = await axios.post(baseUrl, file, { headers: {'Content-Type': 'multipart/form-data'}})
  return response.data
}


export default { getAll, create }