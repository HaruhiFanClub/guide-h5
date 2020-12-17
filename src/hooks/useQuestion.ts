import { ref, readonly } from 'vue'
import { QUESTION_LIST, FACTOR_CONFIG, GROUP_LIST } from '@/config'
import { Question as TQuestion, TGroup } from '@/types'

export default () => {
  const questionList = QUESTION_LIST.map(item => {
    return {
      ...item,
      value: item.multiple ? [] : undefined
    }
  })
  let factorConfig = JSON.parse(JSON.stringify(FACTOR_CONFIG))
  const resultList = ref<TGroup[]>([])
  const reset = () => {
    resultList.value = []
    factorConfig = JSON.parse(JSON.stringify(FACTOR_CONFIG))
  }
  const getScoreList = (queList: TQuestion[]): string[] => {
    let res: string[] = []
    queList.forEach(que => {
      const { value } = que
      if (!que.multiple) {
        // 单选取值
        if (value !== undefined && typeof value === 'number') {
          res = res.concat(que.options[value].score)
        }
      } else {
        // 多选取值
        if (value instanceof Array && value.length) {
          value.forEach(n => {
            res = res.concat(que.options[n].score)
          })
        }
      }
    })
    return res
  }
  const initResults = () => {
    resultList.value = []
    const scoreList: string[] = getScoreList(questionList)
    scoreList.forEach(key => {
      factorConfig[key]++
    })
    resultList.value = GROUP_LIST.filter(item => {
      return item.factor.some(n => {
        return factorConfig[n] > 0
      })
    })
  }
  return {
    resultList: readonly(resultList),
    groupList: readonly(GROUP_LIST.filter(item => !item.top)),
    questionList,
    reset,
    initResults
  }
}
