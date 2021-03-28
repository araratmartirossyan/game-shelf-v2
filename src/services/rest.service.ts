import axios from 'axios'

const DEFAULT_API_URL = 'https://api.rawg.io/api'

export const request = async (url: string) => {
  const { data } = await axios.get(`${DEFAULT_API_URL}/${url}`)
  return data
}
