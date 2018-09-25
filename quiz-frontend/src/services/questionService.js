import axios from 'axios'

const baseUrl = '/api/v1/questions'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { getAll }