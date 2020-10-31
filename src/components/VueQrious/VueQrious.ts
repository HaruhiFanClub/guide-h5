import QRious, { QRiousOptions } from 'qrious'
import { DefineComponent, defineComponent, h, reactive, watch, ref } from 'vue'

export const LEVELS = ['L', 'M', 'Q', 'H'] as const

export type Level = typeof LEVELS[number]

interface VueQrious extends DefineComponent {
  dataUrl: string;
}

export default defineComponent({
  name: 'VueQrious',
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
  setup (props) {
    const qrious = reactive(new QRious(props as QRiousOptions))
    const dataUrl = ref(qrious.toDataURL(props.mime))
    watch(props, val => {
      qrious.set(val as QRiousOptions)
      dataUrl.value = qrious.toDataURL(props.mime)
    })
    return { dataUrl }
  },
  render () {
    return h('img', {
      ...this.$attrs,
      src: this.dataUrl
    })
  }
}) as unknown as VueQrious
