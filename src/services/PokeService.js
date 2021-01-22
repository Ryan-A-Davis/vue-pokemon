import { api, sandApi } from './AxiosService'
import { AppState } from '../AppState'

class PokeService {
  async getAllPokemon() {
    const res = await api.get('pokemon?limit=151')
    console.log(res.data.results)
    AppState.pokemon = res.data.results
  }

  async getOnePokemon(name) {
    const res = await api.get('pokemon/' + name)
    console.log(res.data)
    AppState.activePokemon = res.data
  }

  async catchPokemon(pokemon) {
    console.log(pokemon)
    const res = await sandApi.post('', pokemon)
    console.log(res)
    AppState.myPokemon = [...AppState.myPokemon, pokemon]
  }
}

export const pokeService = new PokeService()
