<template>
  <div class="hello">
    <Swiper ref="swipe" :allow-touch-move="allowTouchMove" @change="onSwipeChange">
      <swiper-item :no-swiping="true">
        <Introduction @start="swipe.next()" :config="INTRODUCTION_CONFIG" />
      </swiper-item>
      <swiper-item v-for="(item, index) in questionList" :key="index" :no-swiping="index === questionList.length - 1">
        <Question
          v-model="item.value"
          :config="item"
          :q-index="index"
          :is-last="index === questionList.length - 1"
          @complete="onQuestionComplete"
          @prev="swipe.prev()" />
      </swiper-item>
      <swiper-item
        v-if="resultList.length"
        ref="resultSwipe"
        :auto-scroll="true"
        :scroll-key="'result'"
      >
        <Result :result-list="resultList" @jump-detail="jumpDetail" @next="swipe.next()" />
      </swiper-item>
      <swiper-item ref="groupsSwipe" :auto-scroll="true">
        <group-list :list="groupList"></group-list>
      </swiper-item>
      <swiper-item :auto-scroll="true" v-for="item in groupList" :key="item.name">
        <div class="full-page group-detail">
          <group-detail :info="item"></group-detail>
          <div class="actions">
            <action-btn class="btn" @click="join(item.joinLink)">加入我们</action-btn>
            <action-btn v-if="showBackResultBtn" class="btn" @click="jumpResults">返回推荐列表</action-btn>
            <action-btn v-else class="btn" @click="jumpGroups">返回部门列表</action-btn>
          </div>
        </div>
      </swiper-item>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick, provide, computed } from 'vue'
import { INTRODUCTION_CONFIG } from '@/config'
import { Introduction } from '@/components/Introduction'
import { Question } from '@/components/Question'
import { Result } from '@/components/Result'
import { GroupList } from '@/components/GroupList'
import { GroupDetail } from '@/components/GroupDetail'
import { Swiper, SwiperItem } from '@/components/Swiper'
import { ActionBtn } from '@/components/ActionBtn'
import { useQuestion } from '@/hooks'

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
    GroupList,
    ActionBtn
  },
  setup () {
    provide('join', join)
    const { groupList, resultList, questionList, initResults, reset } = useQuestion()
    const swipeIndex = ref(0)
    const swipe = ref({} as typeof Swiper)
    const resultSwipe = ref({} as typeof SwiperItem)
    const groupsSwipe = ref({} as typeof SwiperItem)

    // 部门详情是否显示"返回推荐列表"
    const showBackResultBtn = computed(
      () => resultList.value.length && (swipe.value.prevIndex === questionList.length + 1)
    )

    // 翻页结束事件
    const onSwipeChange = (index: number) => {
      swipeIndex.value = index
      if (index === questionList.length) reset()
    }
    // 是否允许手势翻页
    const allowTouchMove = computed(() => !(swipeIndex.value === 11 && resultList.value.length))

    // 获取推荐列表
    const onQuestionComplete = () => {
      initResults()
      nextTick(() => {
        if (resultList.value.length) {
          resultSwipe.value.update()
          swipe.value.updateSlides()
        }
        swipe.value.next()
      })
    }
    // 跳转到详情
    const jumpDetail = (qq: number) => {
      // console.log('qq:', qq)
      let index = groupList.findIndex(item => item.qq === qq) + 1
      index += 1 // 首屏
      index += questionList.length // 问卷页数
      index += 1 // 结果页
      // console.log(index) // 实际跳转的index
      swipe.value.jump(index)
    }
    // 跳转到推荐结果
    const jumpResults = () => {
      if (!resultList.value.length) return false
      swipe.value.jump(questionList.length + 1)
    }
    // 跳转到部门列表
    const jumpGroups = () => {
      let index = questionList.length + 1
      if (resultList.value.length) index++
      swipe.value.jump(index)
    }
    return {
      swipe,
      resultSwipe,
      groupsSwipe,
      INTRODUCTION_CONFIG,
      questionList,
      groupList,
      resultList,
      onSwipeChange,
      onQuestionComplete,
      jumpDetail,
      jumpResults,
      jumpGroups,
      allowTouchMove,
      join,
      showBackResultBtn
    }
  }
})

</script>

<style scoped lang="scss">
.hello {
  height: 100%;
}
.full-page {
  .actions {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 30px;
  }
}
</style>
