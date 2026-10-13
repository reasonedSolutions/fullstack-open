import axios from 'axios'
const baseUrl = process.env.VERCEL_BACKEND_URL || 'http://localhost:3001/api/notes'
console.log("import.meta.env.VERCEL_BACKEND_URL  ==> ", import.meta.env.VERCEL_BACKEND_URL );
console.log("baseUrl ==> ", baseUrl);

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