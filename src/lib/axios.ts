import Axios from 'axios'

export const codeFreelasApi = Axios.create({
  baseURL: process.env.codefreelas,
})

export const summaryApi = Axios.create({
  baseURL: process.env.summary,
})
