import { defineComponent, onMounted, h } from 'vue'
import { Swiper } from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
import './index.scss'

export default defineComponent({
  name: 'SwiperItem',
  props: {
    noSwiping: {
      type: Boolean,
      default: false
    },
    autoScroll: {
      type: Boolean,
      default: false
    },
    scrollKey: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    let swiperScrollbar = {} as Swiper | Swiper[]
    onMounted(() => {
      swiperScrollbar = new Swiper('.swiper-container-scrollbar', {
        scrollbar: {
          el: '.swiper-container-scrollbar .swiper-scrollbar'
        },
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheel: true,
        freeMode: true,
        nested: true
      })
    })
    const update = () => {
      if (swiperScrollbar instanceof Array) {
        swiperScrollbar.forEach(item => {
          console.log('update多个', props.scrollKey, item)
          item.update()
        })
      } else {
        console.log('update单个', props.scrollKey, swiperScrollbar)
        swiperScrollbar.update()
      }
    }
    return {
      update
    }
  },
  render () {
    const classes = 'swiper-container swiper-container-scrollbar'
    const defaultSlots = this.$slots.default ? this.$slots.default() : ''
    const getContent = () => {
      return !this.$props.autoScroll
        ? defaultSlots
        : h(
          <div class={ classes }>
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                { defaultSlots }
              </div>
            </div>
            <div class="swiper-scrollbar"></div>
          </div>
        )
    }
    return h(
      <div class={['swiper-slide', { 'swiper-no-swiping': this.$props.noSwiping }]}>
        { getContent() }
      </div>
    )
  }
})
