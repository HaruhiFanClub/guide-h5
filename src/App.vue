<template>
  <Home />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from './views/Home.vue'

export default defineComponent({
  name: 'App',
  components: {
    Home
  }
})
</script>

<style lang="scss">
#app {
  margin: 0 auto;
  // width: 100vw;
  width: clamp(430px, 100vw, 580px);
  line-height: 1.5em;
}
</style>
