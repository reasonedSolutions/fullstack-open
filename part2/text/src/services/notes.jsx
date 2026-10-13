import axios from 'axios'
const baseUrl = process.env.VITE_VERCEL_BACKEND_URL || 'https://fullstack-open-part3-text.vercel.app/api/notes'
console.log("process.env.VITE_VERCEL_BACKEND_URL ==> ", process.env.VITE_VERCEL_BACKEND_URL);

const getAll = () => {
  const request = axios.get(baseUrl)
  const nonExisting = {
    id: 10000,
    content: 'This note is not saved to server',
    important: true,
  }
  return request.then(response => response.data.concat(nonExisting))
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update }