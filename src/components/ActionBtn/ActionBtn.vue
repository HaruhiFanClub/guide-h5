<template>
  <div class="action-btn" :class="{ block: block }" v-bind="$attrs">
    <img :src="border" alt="" class="bg left-top">
    <img :src="border" alt="" class="bg right-top">
    <img :src="border" alt="" class="bg left-bottom">
    <img :src="border" alt="" class="bg right-bottom">
    <div class="btn">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import border from '@/assets/imgs/border.gif'

export default defineComponent({
  name: 'ActionBtn',
  props: {
    block: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      border
    }
  }
})
</script>

<style lang="scss" scoped>
.action-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 5px;
  &.block {
    display: flex;
  }
  .bg {
    position: absolute;
    height: 10px;
    width: 10px;
    background-color: rgb(65, 186, 126);
    &.left-top {
      top: 0;
      left: 0;
      transform: translate3d(-7px, 0px, 0px);
    }
    &.right-top {
      top: 0;
      right: 0;
      transform: translate3d(7px, 0px, 0px) rotateY(180deg);
    }
    &.left-bottom {
      bottom: 0;
      left: 0;
      transform: translate3d(-7px, 0px, 0px) rotateX(180deg);
    }
    &.right-bottom {
      bottom: 0;
      right: 0;
      transform: translate3d(7px, 0px, 0px) rotate(180deg)
    }
  }
}
</style>
