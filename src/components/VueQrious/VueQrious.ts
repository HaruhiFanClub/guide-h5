import QRious, { QRiousOptions } from 'qrious'
import { defineComponent, h, reactive, watch, ref } from 'vue'

export const LEVELS = ['L', 'M', 'Q', 'H'] as const

export type Level = typeof LEVELS[number]

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true
    },
    background: String,
    backgroundAlpha: Number,
    foreground: String,
    foregroundAlpha: Number,
    level: {
      type: String,
      validator: (level: Level) => LEVELS.includes(level)
    },
    mime: String,
    padding: Number,
    size: Number
  },
  setup (props, context) {
    const qrious = reactive(new QRious(props as QRiousOptions))
    const dataUrl = ref(qrious.toDataURL(props.mime))
    watch(props, val => {
      qrious.set(val as QRiousOptions)
      dataUrl.value = qrious.toDataURL(props.mime)
    })
    return () => h('img', {
      ...context.attrs,
      src: dataUrl.value
    })
  }
})
