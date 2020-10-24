<template>
  <div class="hello">
    <Swiper ref="swipe" @change="onSwipeChange">
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
      <swiper-item ref="resultSwipe" :auto-scroll="true" :scroll-key="'result'" v-if="resultList.length">
        <Result :result-list="resultList" />
      </swiper-item>
      <swiper-item ref="groupsSwipe" :auto-scroll="true">
        <group-list :list="groupList"></group-list>
      </swiper-item>
      <swiper-item :auto-scroll="true" v-for="item in groupList" :key="item.name">
        <group-detail :info="item"></group-detail>
      </swiper-item>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick, provide } from 'vue'
import { INTRODUCTION_CONFIG, QUESTION_LIST, FACTOR_CONFIG, GROUP_LIST } from '@/config'
import { Question as TQuestion, TGroup } from '@/types'
import { Introduction } from '@/components/Introduction'
import { Question } from '@/components/Question'
import { Result } from '@/components/Result'
import { GroupList } from '@/components/GroupList'
import { GroupDetail } from '@/components/GroupDetail'
import { Swiper, SwiperItem } from '@/components/Swiper'

const join = (link: string) => {
  window.open(link, '_blank')
}

export default defineComponent({
  name: 'Home',
  components: {
    Swiper,
    SwiperItem,
    Introduction,
    Question,
    Result,
    GroupDetail,
    GroupList
  },
  setup () {
    provide('join', join)
    const questionList = QUESTION_LIST.map(item => {
      return {
        ...item,
        value: item.multiple ? [] : undefined
      }
    })
    const swipeIndex = ref(0)
    const swipe = ref({} as typeof Swiper)
    const resultSwipe = ref({} as typeof SwiperItem)
    const groupsSwipe = ref({} as typeof SwiperItem)
    const groupList = GROUP_LIST.filter(item => !item.top)
    const resultList = ref<TGroup[]>([])
    let factorConfig = JSON.parse(JSON.stringify(FACTOR_CONFIG))

    // 翻页结束事件
    const onSwipeChange = (index: number) => {
      swipeIndex.value = index
      if (index === questionList.length) {
        resultList.value = []
        factorConfig = JSON.parse(JSON.stringify(FACTOR_CONFIG))
      }
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

    // 获取推荐列表
    const initResults = () => {
      resultList.value = []
      const scoreList: string[] = getScoreList(questionList)
      scoreList.forEach(key => {
        factorConfig[key]++
      })
      resultList.value = GROUP_LIST.filter(item => {
        return item.factor.some(n => {
          return factorConfig[n] > 0
        })
      })
      nextTick(() => {
        if (resultList.value.length) {
          resultSwipe.value.update()
          swipe.value.updateSlides()
        }
        swipe.value.next()
      })
    }
    return {
      swipe,
      resultSwipe,
      groupsSwipe,
      INTRODUCTION_CONFIG,
      questionList,
      swipeIndex,
      groupList,
      resultList,
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
