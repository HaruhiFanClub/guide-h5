<template>
  <div class="full-page">
    <div class="device">
      <img :src="deviceHeader" alt="" class="device-header">
      <div class="device-container">
        <div class="head-bar">
          <van-icon name="arrow-left" size="25" />
          <span class="head-tt">{{ config.title }}</span>
        </div>
        <div class="chat-container">
          <div
            v-for="(item, index) in config.list"
            :key="index"
            :class="['chat-item', item.align === 'right' ? 'right' : 'left']">
            <div class="user-info">
              <img :src="item.avatar" alt="aratar" class="avatar">
            </div>
            <div class="chat-content">
              <div class="user-name">{{ item.name }}</div>
              <div class="comment">
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
        <div class="action-bar">
          <img :src="wxVoice" alt="wx-icon" class="wx-icon">
          <div class="btn" @click="start">点击开始测试</div>
          <img :src="wxFace" alt="wx-icon" class="wx-icon">
          <img :src="wxAdd" alt="wx-icon" class="wx-icon">
        </div>
      </div>
      <img :src="deviceFooter" alt="" class="device-footer">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import deviceHeader from '@/assets/imgs/header.webp'
import deviceFooter from '@/assets/imgs/footer.webp'
import wxAdd from '@/assets/imgs/wx-add.webp'
import wxFace from '@/assets/imgs/wx-face.webp'
import wxVoice from '@/assets/imgs/wx-voice.webp'
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
      deviceFooter,
      wxAdd,
      wxFace,
      wxVoice
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
.full-page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  padding: 0 10vw;
  box-sizing: border-box;
}
.device {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 240px;
  max-width: 440px;
  .device-header,.device-footer {
    width: 100%;
  }
  .device-container {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 70vh;
    padding-bottom: 54px;
    overflow-y: scroll;
    pointer-events: all;
    border-left: 0.45rem solid $device-color;
    border-right: 0.45rem solid $device-color;
    .head-bar {
      display: flex;
      align-items: center;
      height: 40px;
      background-color: #eeeeee;
      .head-tt {
        margin-left: 5px;
        transform: translateY(2px);
      }
    }
    .chat-container {
      flex: 1;
      height: 100%;
      overflow-y: scroll;
      padding: 15px 7px;
      background-color: #f4f4f4;
      .chat-item {
        display: flex;
        align-items: flex-start;
        padding: 10px 0;
        &.left {
          padding-right: 20px;
          .chat-content {
            padding-left: 20px;
          }
        }
        &.right {
          flex-direction: row-reverse;
          padding-left: 20px;
          .chat-content {
            padding-right: 20px;
            .user-name {
              text-align: right;
            }
            .comment {
              background-color: #9de2a6;
            }
          }
        }
        .avatar {
          width: 2rem;
          height: 2rem;
        }
        .chat-content {
          // padding-left: 20px;
          .user-name {
            font-size: 80%;
            color: #c9c9c9;
          }
          .comment {
            padding: 5px 10px;
            font-size: 80%;
            color: #464646;
            background-color: #fff;
            border-radius: .5rem;
          }
        }
      }
    }
    .action-bar {
      position: absolute;
      bottom: 0;
      display: flex;
      align-items: center;
      width: 100%;
      height: 54px;
      background-color: #eee;
      .wx-icon {
        height: 25px;
        width: 25px;
        margin: 0 5px;
      }
      .btn {
        flex: 1;
        height: 33px;
        margin: 0 8px;
        line-height: 33px;
        font-size: 0.9em;
        font-weight: bolder;
        text-align: center;
        color: #337ab7;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: rgb(170, 170, 170) 0px 0px 5px;;
      }
    }
  }
}
</style>
