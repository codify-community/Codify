import Axios from 'axios'

export const codeFreelas = Axios.create({
  baseURL: 'http://localhost:7777',
})