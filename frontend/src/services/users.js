import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/users'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {

  const response = await axios.post(baseUrl, newObject )
  return response.data
}

// const update = async (updatedBlog, blogId) => {


//   const response = await axios.put(`${baseUrl}/${blogId}`, updatedBlog )
//   return response.data
// }

// const remove = async (blogId) => {

//   const response = await axios.delete(`${baseUrl}/${blogId}`)

//   return response.data
// }


export default { getAll, create }