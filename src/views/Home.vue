<template>
  <div class="hello">
    <van-swipe
      v-bind="swipeConfig"
      ref="swipe"
      :touchable="touchable"
      @change="onSwipeChange">
      <van-swipe-item>
        <div class="full-page introduction-container">
          <Introduction @start="swipe.swipeTo(1)" :config="INTRODUCTION_CONFIG" />
        </div>
      </van-swipe-item>
      <van-swipe-item v-for="(item, index) in questionList" :key="index">
        <div class="full-page q">
          <Question
            v-model="item.value"
            :config="item"
            :q-index="index"
            @prev="swipe.prev()" />
          <action-btn class="action" v-if="index === questionList.length - 1" @click="initResults">查看推荐</action-btn>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="full-page result">
          <Result
            :result-list="resultList"
            @show-prev="val => { showResultPrev = val }"
            @show-next="val => { showResultNext = val }" />
          <div class="actions">
            <action-btn v-show="showResultPrev" class="act-btn" @click="swipe.prev()">返回上一页</action-btn>
            <action-btn v-show="showResultNext" class="act-btn" @click="swipe.next()">查看所有部门</action-btn>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="full-page">
          <group-list :list="groupList" @prev="swipe.prev()" @next="swipe.next()"></group-list>
        </div>
      </van-swipe-item>
      <van-swipe-item v-for="(item, index) in groupList" :key="index">
        <div class="full-page">
          <group-detail :info="item" @prev="swipe.prev()" @next="swipe.next()"></group-detail>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Swipe } from 'vant'
import { INTRODUCTION_CONFIG, QUESTION_LIST, FACTOR_CONFIG, GROUP_LIST } from '@/config'
import { Question as TQuestion, TGroup } from '@/types'
import { Introduction } from '@/components/Introduction'
import { Question } from '@/components/Question'
import { Result } from '@/components/Result'
import { ActionBtn } from '@/components/ActionBtn'
import { GroupList } from '@/components/GroupList'
import { GroupDetail } from '@/components/GroupDetail'

const SWIPE_CONFIG = {
  vertical: true,
  style: 'height: 100vh;',
  loop: true,
  showIndicators: false,
  initialSwipe: 12
}

export default defineComponent({
  name: 'Home',
  components: {
    Introduction,
    Question,
    Result,
    ActionBtn,
    GroupList,
    GroupDetail
  },
  setup () {
    const questionList = QUESTION_LIST.map(item => {
      return {
        ...item,
        value: item.multiple ? [] : undefined
      }
    })
    const swipeConfig = SWIPE_CONFIG
    const swipeIndex = ref(0)
    const swipe = ref({} as Swipe)
    const groupList = GROUP_LIST.filter(item => !item.top)
    const resultList = ref<TGroup[]>([])
    const showResultPrev = ref(false)
    const showResultNext = ref(false)

    // 是否开启手势翻页
    const touchable = computed((): boolean => {
      if (!swipeIndex.value) return false
      //        问题列表(除最后一题)
      return (swipeIndex.value < questionList.length)
    })
    // 翻页结束事件
    const onSwipeChange = (index: number) => {
      swipeIndex.value = index
    }
    // 计算得分
    const getScoreList = (queList: TQuestion[]): string[] => {
      let res: string[] = []
      queList.forEach(que => {
        const { value } = que
        if (!que.multiple) {
          // 单选取值
          if (value !== undefined && typeof value === 'number') {
            res = res.concat(que.options[value].score)
          }
        } else {
          // 多选取值
          if (value instanceof Array && value.length) {
            value.forEach(n => {
              res = res.concat(que.options[n].score)
            })
          }
        }
      })
      return res
    }
    const factorConfig = FACTOR_CONFIG
    // 获取推荐列表
    const initResults = () => {
      const scoreList: string[] = getScoreList(questionList)
      scoreList.forEach(key => {
        factorConfig[key]++
      })
      resultList.value = GROUP_LIST.filter(item => {
        return item.factor.some(n => {
          return factorConfig[n] > 0
        })
      })
      swipe.value.next()
    }
    return {
      swipe,
      INTRODUCTION_CONFIG,
      questionList,
      swipeConfig,
      swipeIndex,
      touchable,
      groupList,
      resultList,
      showResultPrev,
      showResultNext,
      onSwipeChange,
      initResults
    }
  }
})
</script>

<style scoped lang="scss">
.van-swipe {
  .full-page {
    height: 100vh;
    &.q {
      position: relative;
      padding: 10px 15px;
      .action {
        position: absolute;
        left: 50%;
        bottom: 20%;
        transform: translateX(-50%);
      }
    }
    &.result {
      position: relative;
      .actions {
        position: absolute;
        bottom: 20%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        .act-btn {
          opacity: 0.9;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
