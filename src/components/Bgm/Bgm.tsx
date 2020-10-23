import { defineComponent, h, ref } from 'vue'
import musicImg from '@/assets/imgs/music.svg'
import muteImg from '@/assets/imgs/mute.svg'
import './index.scss'

export default defineComponent({
  name: 'Bgm',
  props: {
    size: {
      type: Number
    }
  },
  setup (props) {
    const disabled = ref(false)
    const toggle = () => { disabled.value = !disabled.value }
    const styles = {
      width: props.size + 'px',
      height: props.size + 'px'
    }
    return () => h(
      <img src={ disabled.value ? muteImg : musicImg } style={ styles } onClick={ toggle }></img>
    )
  }
})
