<template>
  <div class="group-item">
    <div class="logo">
      <img :src="info.logo" alt="logo">
    </div>
    <div class="right">
      <h3>{{ info.name }}</h3>
      <div class="text">{{ info.desc }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TGroup } from '@/types'

export default defineComponent({
  name: 'GroupItem',
  props: {
    info: {
      type: Object as PropType<TGroup>
    }
  },
  setup () {
    return {}
  }
})
</script>

<style scoped lang="scss">
.group-item {
  display: flex;
  .logo {
    display: flex;
    width: 4.5rem;
    height: 4.5rem;
    margin-right: 5px;
    img {
      flex: 1;
      height: 100%;
      width: auto;
    }
  }
  .right {
    padding: 10px 20px;
    background-color: #d8ebe4;
    h3 {
      margin: 0;
      border-bottom: 1px solid #b1dfd3;
    }
    .text {
      font-size: 0.95rem;
      color: #3e3e3e;
    }
  }
}
</style>
