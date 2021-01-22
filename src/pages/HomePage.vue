<template>
  <div class="row">
    <PokemonComponent v-for="pokemon in state.pokemon" :key="pokemon.name" :pokemon-prop="pokemon" />
  </div>
</template>

<script>
import { computed, reactive, onMounted } from 'vue'
import { AppState } from '../AppState'
import { pokeService } from '../services/PokeService'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      pokemon: computed(() => AppState.pokemon),
      user: computed(() => AppState.user)
    })
    onMounted(async() => {
      try {
        await pokeService.getAllPokemon()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      state
    }
  }

}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
