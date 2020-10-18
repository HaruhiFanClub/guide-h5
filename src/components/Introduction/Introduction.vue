<template>
  <div class="device">
    <img :src="deviceHeader" alt="" class="device-header">
    <div class="device-container">
      <div class="head-bar">{{ config.title }}</div>
      <div
        v-for="(item, index) in config.list"
        :key="index"
        :class="['chat-item', item.align === 'right' ? 'right' : 'left']">
        <div class="user-info">
          <img :src="item.avatar" alt="aratar" class="avatar">
        </div>
        <div class="comment">{{ item.text }}</div>
      </div>
      <div class="action-bar">
        <div class="btn" @click="start">点击开始测试</div>
      </div>
    </div>
    <img :src="deviceFooter" alt="" class="device-footer">
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import deviceHeader from '@/assets/imgs/header.webp'
import deviceFooter from '@/assets/imgs/footer.webp'
import { Introduction } from '@/types'

export default defineComponent({
  name: 'Introduction',
  props: {
    config: {
      type: Object as PropType<Introduction>,
      required: true
    }
  },
  data () {
    return {
      deviceHeader,
      deviceFooter
    }
  },
  methods: {
    start () {
      this.$emit('start')
    }
  }
})
</script>

<style scoped lang="scss">
$device-color:  #a8dbe7;
.device {
  display: flex;
  flex-direction: column;
  padding-top: 5vh;
  .device-header,.device-footer {
    width: 100%;
  }
  .device-container {
    height: 70vh;
    overflow-y: scroll;
    pointer-events: all;
    border-left: 0.45rem solid $device-color;
    border-right: 0.45rem solid $device-color;
    .head-bar {}
    .chat-item {
      display: flex;
      align-items: flex-start;
      padding: 10px 0;
      &.left {
        padding-right: 20px;
      }
      &.right {
        flex-direction: row-reverse;
        padding-left: 20px;
      }
      .avatar {
        width: 2rem;
        height: 2rem;
      }
    }
    .action-bar {
      position: sticky;
      bottom: 0;
      width: 100%;
      background-color: #eee;
      .btn {
        width: 80%;
        text-align: center;
        border: 1px solid #fafafa;
        border-radius: 5px;
      }
    }
  }
}
</style>
