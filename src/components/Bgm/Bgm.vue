<template>
  <div>
    <audio ref="audioRef" :src="bgmSrc" :autoplay="!disabled" loop hidden></audio>
    <img :src="disabled ? muteImg : musicImg" :style="styles" @click="toggle">
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import musicImg from '@/assets/imgs/music.svg'
import muteImg from '@/assets/imgs/mute.svg'
import bgmSrc from '@/assets/bgm.mp3'

export default defineComponent({
  name: 'Bgm',
  props: {
    size: {
      type: Number
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  setup (props, context) {
    const { emit } = context
    const audioRef = ref({} as HTMLAudioElement)
    const disabled = computed(() => props.modelValue)
    const togglePlay = (play: boolean) => {
      if (play) {
        audioRef.value.paused && audioRef.value.play()
      } else {
        !audioRef.value.paused && audioRef.value.pause()
      }
    }
    const toggle = () => {
      emit('update:modelValue', !props.modelValue)
      togglePlay(disabled.value)
    }
    const styles = {
      width: props.size + 'px',
      height: props.size + 'px'
    }
    onMounted(() => { togglePlay(!disabled.value) })
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
