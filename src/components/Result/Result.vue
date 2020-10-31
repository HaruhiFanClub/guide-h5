<template>
  <div class="result" >
    <div class="main-recommend" @click="$emit('jump-detail', resultList[0].qq)">
      <div class="border"></div>
      <div class="content">
        <div class="qr">
          <img :src="resultList[0].logo" alt="" class="qr-logo">
          <VueQrious :value="resultList[0].joinLink" class="qr-code" />
        </div>
        <div class="right">
          <div class="group-title">{{ resultList[0].name }}</div>
          <div class="text">{{ resultList[0].comment }}</div>
        </div>
      </div>
    </div>
    <div class="recommend-list">
      <h4>其他推荐</h4>
      <template v-if="otherRecomment.length">
        <section v-for="item in otherRecomment" :key="item.name">
          <div class="left" @click="$emit('jump-detail', item.qq)">
            <span class="part-name">{{ item.name }}</span>
            <span class="part-introduction">{{ item.introduction }}</span>
          </div>
          <img :src="item.logo" alt="头像" class="logo">
        </section>
      </template>
      <template v-else>
        <van-empty description="暂无其它推荐" />
      </template>
    </div>
    <div class="actions">
      <action-btn @click="$emit('next')">查看所有部门</action-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ActionBtn } from '../ActionBtn'
import { VueQrious } from '../VueQrious'
import { TGroup } from '@/types'

export default defineComponent({
  name: 'Result',
  // eslint-disable-next-line
  components: { ActionBtn, VueQrious },
  props: {
    resultList: {
      type: Array as PropType<TGroup[]>,
      default: () => []
    }
  },
  computed: {
    otherRecomment (): TGroup[] {
      const { resultList } = this
      return resultList.length > 1 ? resultList.slice(1) : []
    }
  }
})
</script>

<style lang="scss" scoped>
$border-radius: 0.3rem;
.result {
  position: relative;
  height: 100%;
  padding: 10px;
  .main-recommend {
    position: relative;
    padding: 0 10px;
    .border {
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      right: 10px;
      bottom: 0;
      border: 1px solid #3e3e3e;
      border-radius: $border-radius;
    }
    .content {
      display: flex;
      width: 100%;
      height: 100%;
      padding: 5px;
      background-color: #47c1a8;
      border-radius: $border-radius;
      transform: translateY(8px);
      .qr {
        position: relative;
        height: 7rem;
        width: 7rem;
        padding: 5px;
        background-color: #fff;
        border-radius: $border-radius;
        .qr-code {
          height: 100%;
          width: 100%;
        }
        .qr-logo {
          position: absolute;
          top: 50%;
          left: 50%;
          height: 1.5rem;
          width: 1.5rem;
          transform: translate(-50%, -50%);
        }
      }
      .right {
        flex: 1;
        margin-left: 10px;
        padding: 0 20px 10px 0;
        .group-title {
          margin-bottom: 10px;
          padding: 10px;
          font-size: 1.15rem;
          color: #187f92;
          border-bottom: 1px solid #3e3e3e;
        }
        .text {
          font-size: .9rem;
          color: #3e3e3e;
        }
      }
    }
  }
  .recommend-list {
    padding-bottom: 20px;
    h4 {
      display: inline-block;
      margin-bottom: 0;
      padding-top: 5px;
      color: #ffca00;
      border-top: 2px solid #ffca00;
    }
    section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px dashed #bbb;
      &:last-child {
        border: none;
      }
      .left {
        padding: 10px;
        line-height: 1.5em;
        color: #585858;
        border-left: 3px solid #f0f0f0;
        .part-name {
          display: block;
          margin-bottom: 5px;
          font-size: 1.05em;
          font-weight: bolder;
        }
      }
      .logo {
        height: 5rem;
        width: 5rem;
        border-radius: 50%;
      }
    }
  }
  .actions {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 30px;
  }
}
</style>
