<template>
  <div class="group-list">
    <group-item
      class="item"
      v-for="(item, index) in list"
      :key="index"
      :info="item"
      @click="$emit('jump-detail', item.qq)">
    </group-item>
    <action-btn v-show="showTopBtn" class="action" @click="$emit('prev')">返回结果页面</action-btn>
    <action-btn v-show="showBottomBtn" class="action" @click="$emit('next')">部门详情</action-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TGroup } from '@/types'
import GroupItem from './GroupItem.vue'
import { ActionBtn } from '../ActionBtn'

export default defineComponent({
  name: 'GroupList',
  components: {
    GroupItem,
    ActionBtn
  },
  props: {
    list: {
      type: Array as PropType<TGroup[]>
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
.group-list {
  position: relative;
  height: 100%;
  overflow-y: scroll;
  padding: 10px;
  .item {
    margin-bottom: 15px;
  }
  .action {
    position: sticky;
    left: 50%;
    bottom: 20%;
    background-color: #fff;
    opacity: 0.7;
    transform: translateX(-50%);
  }
}
</style>
