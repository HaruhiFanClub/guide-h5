<template>
  <div class="full-page">
    <div class="question-container">
      <question-header></question-header>
      <div class="question">
        <p>{{ qIndex + 1 }}. {{ config.title }}（{{ config.multiple ? '多选' : '单选' }}）</p>
        <van-checkbox-group v-if="config.multiple" v-model="value" :max="config.max">
          <van-checkbox v-for="(opt, index) in config.options" :key="opt.title" :name="index">{{ opt.title }}</van-checkbox>
        </van-checkbox-group>
        <van-radio-group v-else v-model="value">
          <van-radio v-for="(opt, index) in config.options" :key="opt.title" :name="index">{{ opt.title }}</van-radio>
        </van-radio-group>
        <div class="actions">
          <action-btn v-if="qIndex" @click="emit('prev')">上一题</action-btn>
          <action-btn v-if="!isLast" @click="emit('next')">下一题</action-btn>
        </div>
      </div>
    </div>
    <action-btn class="r-btn" v-if="isLast" @click="$emit('complete')">查看推荐</action-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { Question, QuestionValue } from '@/types'
import { ActionBtn } from '../ActionBtn'
import QuestionHeader from './QuestionHeader.vue'

export default defineComponent({
  name: 'Question',
  components: { ActionBtn, QuestionHeader },
  props: {
    config: {
      type: Object as PropType<Question>,
      required: true
    },
    modelValue: {
      type: [Array, Number] as PropType<QuestionValue>
    },
    qIndex: {
      type: Number,
      required: true
    },
    isLast: {
      type: Boolean,
      default: false
    }
  },
  setup (props, context) {
    const value = ref(props.modelValue)
    const { emit } = context
    watch(value, (val) => {
      emit('update:modelValue', val)
    })
    return {
      value,
      emit
    }
  }
})
</script>

<style lang="scss" scoped>
.full-page {
  position: relative;
  height: 100%;
  .r-btn {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
}
.question-container {
  padding: 10px;
  background-color: #fefefe;
  background-image:
      linear-gradient(rgba(243,243,243,1) 1px, transparent 0),
      linear-gradient(90deg, rgba(243,243,243,1) 1px, transparent 0),
      linear-gradient(white 1px, transparent 0),
      linear-gradient(90deg, white 1px, transparent 0);
  background-size: 15px 15px, 15px 15px, 75px 75px, 75px 75px;
  .question {
    position: relative;
    height: 350px;
    overflow: hidden;
    .van-radio,.van-checkbox {
      padding: 5px 0;
    }
    .actions {
      position: absolute;
      width: 100%;
      bottom: 30px;
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
