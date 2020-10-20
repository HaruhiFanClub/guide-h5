<template>
  <div class="hello">
    <Swiper ref="swipe" :touchable="touchable" @change="onSwipeChange">
      <swiper-item :no-swiping="true">
        <Introduction @start="swipe.next()" :config="INTRODUCTION_CONFIG" />
      </swiper-item>
      <swiper-item v-for="(item, index) in questionList" :key="index" :no-swiping="index === questionList.length - 1">
        <Question
          v-model="item.value"
          :config="item"
          :q-index="index"
          :is-last="index === questionList.length - 1"
          @complete="initResults"
          @prev="swipe.prev()" />
      </swiper-item>
      <swiper-item :auto-scroll="true" v-if="resultList.length">
        <Result
          :result-list="resultList"
          @show-prev="val => { showResultPrev = val }"
          @show-next="val => { showResultNext = val }" />
        <div class="actions">
          <action-btn v-show="showResultPrev" class="act-btn" @click="swipe.prev()">返回上一页</action-btn>
          <action-btn v-show="showResultNext" class="act-btn" @click="swipe.next()">查看所有部门</action-btn>
        </div>
      </swiper-item>
      <swiper-item :auto-scroll="true">
        <group-list :list="groupList" @prev="swipe.prev()" @next="swipe.next()"></group-list>
      </swiper-item>
      <!-- <swiper-item :auto-scroll="true">
        <group-detail :info="item" @prev="swipe.prev()" @next="swipe.next()"></group-detail>
      </swiper-item> -->
    </Swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { INTRODUCTION_CONFIG, QUESTION_LIST, FACTOR_CONFIG, GROUP_LIST } from '@/config'
import { Question as TQuestion, TGroup } from '@/types'
import { Introduction } from '@/components/Introduction'
import { Question } from '@/components/Question'
import { Result } from '@/components/Result'
import { ActionBtn } from '@/components/ActionBtn'
import { GroupList } from '@/components/GroupList'
// import { GroupDetail } from '@/components/GroupDetail'
import { Swiper, SwiperItem } from '@/components/Swiper'

interface TSwiper {
  next(): void;
  prev(): void;
}

export default defineComponent({
  name: 'Home2',
  components: {
    Swiper,
    SwiperItem,
    Introduction,
    Question,
    Result,
    ActionBtn,
    // GroupDetail,
    GroupList
  },
  setup () {
    const questionList = QUESTION_LIST.map(item => {
      return {
        ...item,
        value: item.multiple ? [] : undefined
      }
    })
    const swipeIndex = ref(0)
    const swipe = ref({} as TSwiper)
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
.hello {
  height: 100%;
}
</style>
