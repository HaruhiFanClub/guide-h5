<template>
  <Home />
  <Bgm id="bgm" v-model="disabled" :size="36" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Home from './views/Home.vue'
import Bgm from '@/components/Bgm'

export default defineComponent({
  name: 'App',
  components: {
    Home,
    Bgm
  },
  setup () {
    return {
      disabled: ref(false)
    }
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
#bgm {
  z-index: 99999;
  position: fixed;
  top: 10px;
  right: 10px;
}
</style>
