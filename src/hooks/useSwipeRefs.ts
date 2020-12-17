import { ref, readonly } from 'vue'
import { Swiper, SwiperItem } from '@/components/Swiper'

export default () => {
  const swipeIndex = ref(0)
  const swipe = ref({} as typeof Swiper)
  const resultSwipe = ref({} as typeof SwiperItem)
  const update = () => {
    resultSwipe.value.update()
    swipe.value.updateSlides()
  }
  return {
    swipe,
    resultSwipe,
    swipeIndex: readonly(swipeIndex),
    update,
    setIndex: (index: number) => { swipeIndex.value = index },
    next: () => { swipe.value.next() },
    jump: (index: number) => { swipe.value.jump(index) }
  }
}
