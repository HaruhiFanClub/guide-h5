<template>
  <div class="group-detail">
    <div class="title">
      <span>{{ info.name }}</span>
    </div>
    <div class="parts">
      <van-steps direction="vertical" :active="0" :active-color="'#47c1a8'" :inactive-color="'#47c1a8'">
        <van-step v-for="(part, index) in info.parts" :key="part">
          <template #active-icon>
            <span class="line-node">0{{ index + 1 }}</span>
          </template>
          <template #inactive-icon>
            <span class="line-node">0{{ index + 1 }}</span>
          </template>
          <div class="part-content">
            <div class="part-title">Part {{ index + 1 }}</div>
            <p>{{ part }}</p>
          </div>
        </van-step>
      </van-steps>
    </div>
    <div class="actions">
      <!-- TODO: 粗略判断，需要优化 -->
      <action-btn v-show="showTopBtn || info.parts.length < 6" class="action" @click="$emit('prev')">上一页</action-btn>
      <action-btn v-show="showBottomBtn || info.parts.length < 6" class="action" @click="$emit('next')">下一页</action-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TGroup } from '@/types'
import { ActionBtn } from '../ActionBtn'

export default defineComponent({
  name: 'GroupDetail',
  components: {
    ActionBtn
  },
  props: {
    info: {
      type: Object as PropType<TGroup>
    }
  },
  data () {
    return {
      showTopBtn: false,
      showBottomBtn: false
    }
  },
  mounted () {
    this.initEvent()
  },
  methods: {
    initEvent () {
      const { $el: el } = this
      el.addEventListener('scroll', () => {
        this.showTopBtn = el.scrollTop === 0
        this.showBottomBtn = el.scrollHeight - el.scrollTop === el.clientHeight
      })
    }
  }
})
</script>

<style scoped lang="scss">
.group-detail {
  height: 100%;
  overflow-y: scroll;
  padding: 5px;
  .title {
    text-align: center;
    >span {
      display: inline-block;
      padding: 10px;
      color: #47c1a8;
      border: 1px solid #47c1a8;
      text-shadow:#e3f3ef 1px 1px 0px, #85aaa3 1px 2px 0;
    }
  }
  .line-node {
    display: inline-block;
    padding: 5px;
    font-size: 1.1rem;
    font-weight: bolder;
    color: #fff;
    background-color: #47c1a8;
  }
  .part-content {
    .part-title {
      padding: 5px;
      font-size: 1.1rem;
      font-weight: bolder;
      background-color: #f6f6f6;
      transform: translateY(-5px);
    }
    p {
      font-size: 0.95rem;
      line-height: 150%;
      color: #585858;
    }
  }
  .actions {
    position: absolute;
    bottom: 20%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    .action {
      background-color: #fff;
      opacity: 0.7;
    }
  }
}
</style>
