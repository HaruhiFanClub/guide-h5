import { DefineComponent, defineComponent, ref, onMounted, h, nextTick, computed } from 'vue'
import { Swiper } from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
import './index.scss'

interface SwiperComponent extends DefineComponent {
  next(): void;
  prev(): void;
  update(): void;
  updateSlides(): void;
  jump(arg0: number): void;
  prevIndex: number;
}

export default defineComponent({
  name: 'Swiper',
  props: {
    allowTouchMove: {
      type: Boolean,
      default: true
    }
  },
  setup (_, { emit }) {
    const swiperV = ref({} as Swiper)
    onMounted(() => {
      swiperV.value = new Swiper('.swiper-container-v', {
        direction: 'vertical',
        on: {
          slideChangeTransitionEnd: e => {
            emit('change', e.activeIndex)
            nextTick(() => {
              swiperV.value.allowTouchMove = _.allowTouchMove
            })
          }
        }
      })
    })
    const next = () => {
      swiperV.value.slideNext()
    }
    const prev = () => {
      swiperV.value.slidePrev()
    }
    const update = () => {
      swiperV.value.update()
    }
    const updateSlides = () => {
      swiperV.value.updateSlides()
    }
    const jump = (i: number) => {
      swiperV.value.slideTo(i)
    }
    return {
      next,
      prev,
      update,
      updateSlides,
      jump,
      prevIndex: computed(() => swiperV.value.previousIndex)
    }
  },
  render () {
    const defaultSlots = this.$slots.default ? this.$slots.default() : ''
    return h(
      <div class="swiper-container swiper-container-v">
        <div class="swiper-wrapper">
          { defaultSlots }
        </div>
      </div>
    )
  }
}) as unknown as SwiperComponent
