import axios from 'axios'

export interface Test {
  s: string
}

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export default api
