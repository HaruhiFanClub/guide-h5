<template>
  <div class="question-header">
    <span class="left">SOS</span>
    <span>绝密★启用前</span>
  </div>
  <h2>入团小测试</h2>
  <h3>（全国卷）</h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'QuestionHeader'
})
</script>

<style lang="scss" scoped>
.question-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  .left {
    font-style: italic;
    border-bottom: 2px solid red;
  }
}
h2,h3 {
  text-align: center;
}
</style>
