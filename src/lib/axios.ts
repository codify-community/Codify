import Axios from 'axios'

export const codeFreelasApi = Axios.create({
  baseURL: 'http://localhost:7777/codify',
})

// export const resumeApi = Axios.create({
//   baseURL: 'http://localhost:7777/codify',
// })