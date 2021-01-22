<template>
  <div v-if="pokemon.sprites" class="poke-details row">
    <div class="col">
      <div class="card">
        <img class="card-img-top" :src="pokemon.sprites.front_default" alt="">
        <div class="card-body">
          <h4 class="card-title">
            {{ pokemon.name }}
          </h4>
          <button class="btn btn-success" @click="catchPokemon">
            Capture
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { pokeService } from '../services/PokeService'
export default {
  setup() {
    const route = useRoute()
    const state = reactive({
    })
    onMounted(async() => {
      try {
        pokeService.getOnePokemon(route.params.name)
      } catch (error) {
        console.error(error)
      }
    })
    return {
      state,
      pokemon: computed(() => AppState.activePokemon),
      async catchPokemon() {
        const passed = { name: this.pokemon.name, img: this.pokemon.sprites.front_default }
        try {
          await pokeService.catchPokemon(passed)
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  name: 'PokeDetailsPage'
}
</script>
