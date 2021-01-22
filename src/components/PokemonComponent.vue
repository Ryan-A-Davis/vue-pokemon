<template>
  <div class="PokemonComponent col-2">
    <router-link :to="{ name: 'PokeDetailsPage', params: {name: pokemonProp.name}}">
      <p>{{ pokemonProp.name }}</p>
    </router-link>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'PokemonComponent',
  props: {
    pokemonProp: { type: Object, required: true }

  },
  setup(props) {
    const state = reactive({
      account: computed(() => AppState.account)
    })
    return { state }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
