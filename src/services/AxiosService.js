import Axios from 'axios'

const baseURL = 'https://pokeapi.co/api/v2/'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const setBearer = function(bearer) {
  api.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  api.defaults.headers.authorization = ''
}

export const sandApi = Axios.create({
  baseUrl: 'https://bcw-sandbox.herokuapp.com/api/teamrocket/pokemon',
  timeout: 8000
})
