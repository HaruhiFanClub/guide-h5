<template>
  <div>
    <audio id="audioEl" ref="audioRef" :src="bgmSrc" autoplay loop hidden></audio>
    <img :src="disabled ? muteImg : musicImg" :style="styles" @click="toggle">
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import musicImg from '@/assets/imgs/music.svg'
import muteImg from '@/assets/imgs/mute.svg'
import bgmSrc from '@/assets/bgm.mp3'

export default defineComponent({
  name: 'Bgm',
  props: {
    size: {
      type: Number
    }
  },
  setup (props) {
    const disabled = ref(false)
    const audioRef = ref({} as HTMLAudioElement)
    const toggle = () => {
      disabled.value = !disabled.value
      if (audioRef.value.paused) {
        audioRef.value.play()
      } else {
        audioRef.value.pause()
      }
    }
    const styles = {
      width: props.size + 'px',
      height: props.size + 'px'
    }
    return {
      audioRef,
      toggle,
      styles,
      bgmSrc,
      musicImg,
      muteImg,
      disabled
    }
  }
})
</script>
