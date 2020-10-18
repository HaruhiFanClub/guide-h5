<template>
  <div class="result" >
    <div class="main-recommend" v-if="resultList.length">
      <div class="border"></div>
      <div class="content">
        <img :src="resultList[0].logo" alt="" class="qr">
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
          <div class="left">
            <span class="part-name">{{ item.name }}</span>
            <span class="part-introduction">{{ item.introduction }}</span>
          </div>
          <img :src="item.logo" alt="头像" class="logo">
        </section>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TGroup } from '@/types'

export default defineComponent({
  name: 'Result',
  props: {
    resultList: {
      type: Array as PropType<TGroup[]>,
      default: () => []
    }
  },
  data () {
    return {
      showTopBtn: false,
      showBottomBtn: false
    }
  },
  computed: {
    otherRecomment (): TGroup[] {
      const { resultList } = this
      return resultList.length > 1 ? resultList.slice(1) : []
    }
  },
  watch: {
    otherRecomment (val: TGroup[]) {
      const isScroll = val.length >= 5 // TODO: 粗略判断，需要优化
      this.$emit('show-prev', !isScroll)
      this.$emit('show-next', !isScroll)
    }
  },
  mounted () {
    this.initEvent()
  },
  methods: {
    initEvent () {
      const { $el: el } = this
      el.addEventListener('scroll', () => {
        const isTop = el.scrollTop === 0
        this.$emit('show-prev', isTop)
        const isBottom = el.scrollHeight - el.scrollTop === el.clientHeight
        this.$emit('show-next', isBottom)
      })
    }
  }
})
</script>

<style lang="scss" scoped>
$border-radius: 0.3rem;
.result {
  position: relative;
  height: 100%;
  overflow-y: scroll;
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
        height: 7rem;
        width: 7rem;
        border-radius: $border-radius;
      }
      .right {
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
          font-size: .95rem;
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
}
</style>
