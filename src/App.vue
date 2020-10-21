<template>
  <Home2 />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home2 from './views/Home2.vue'

export default defineComponent({
  name: 'App',
  components: {
    Home2
  }
})
</script>

<style lang="scss">
html,body,#app {
  margin: 0;
  padding: 0;
  height: 100%;
  line-height: 1.5em;
}
#app {
  margin: 0 auto;
  width: 100vw;
}
</style>
