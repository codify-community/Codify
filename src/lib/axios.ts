import Axios from 'axios'

export const freelancingApi = Axios.create({
  baseURL: 'http://localhost:2501/codify',
})

export const summaryApi = Axios.create({
  baseURL: 'http://localhost:2502/',
})
