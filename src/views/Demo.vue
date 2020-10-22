<template>
  <div class="hello">
    <Swiper ref="swiperRef" @change="onSwipeChange">
      <swiper-item ref="testRef" :no-swiping="true">
        <span class="dsgfdg">sdgdfhfgh</span>
      </swiper-item>
      <swiper-item :no-swiping="true">
        <span style="color: red">Vertical Slide 1 as Vue components</span>
        <button @click="doAdd(15)">加15条数据并跳转</button>
      </swiper-item>
      <swiper-item ref="scrollSwiperRef" :auto-scroll="true" v-if="counter">
        <p v-for="i in counter" :key="i">{{ i }}: 动态长度页面</p>
      </swiper-item>
      <swiper-item>
        <span style="color: red">Vertical Slide 3 as Vue components</span>
      </swiper-item>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref } from 'vue'
import { INTRODUCTION_CONFIG } from '@/config'
import { Swiper, SwiperItem } from '@/components/Swiper'

const useCounter = () => {
  const counter = ref(0)
  const addLen = ref(0)
  const increment = (n: number) => {
    addLen.value += n
    counter.value = addLen.value
  }
  const reset = () => {
    counter.value = 0
  }
  return {
    counter,
    increment,
    reset
  }
}

export default defineComponent({
  name: 'Demo',
  components: {
    Swiper,
    SwiperItem
  },
  setup () {
    const { counter, increment, reset } = useCounter()
    const swiperRef = ref({} as typeof Swiper)
    const scrollSwiperRef = ref({} as typeof SwiperItem)
    const testRef = ref({} as typeof SwiperItem)
    onMounted(() => {
      console.log(swiperRef.value)
      console.log(testRef.value)
    })
    // 更新组件并跳转
    const updateSwiperItem = () => {
      console.log(swiperRef.value)
      console.log(scrollSwiperRef.value)
      swiperRef.value.updateSlides()
      scrollSwiperRef.value.update()
      swiperRef.value.next()
    }
    // 更新数据
    const doAdd = (n: number) => {
      increment(n)
      nextTick(() => { updateSwiperItem() })
    }
    // 记录索引值
    const swipeIndex = ref(0)
    const onSwipeChange = (i: number) => {
      swipeIndex.value = i
      if (i === 0) reset() // 当返回到动态高度页的上一页时，需要销毁此动态页以确保下次滚动不出错(此demo用v-if)
    }
    // 跳转下一页
    const next = () => {
      swiperRef.value.next()
    }
    return {
      counter,
      swipeIndex,
      swiperRef,
      scrollSwiperRef,
      next,
      doAdd,
      onSwipeChange,
      INTRODUCTION_CONFIG,
      testRef
    }
  }
})
</script>

<style scoped lang="scss">
.hello {
  height: 100%;
}
</style>
