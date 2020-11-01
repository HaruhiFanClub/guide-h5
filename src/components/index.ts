import { App } from 'vue'
import { ActionBtn } from './ActionBtn'
import { Bgm } from './Bgm'
import { GroupDetail } from './GroupDetail'
import { GroupList, GroupItem } from './GroupList'
import { Introduction } from './Introduction'
import { Question, QuestionHeader } from './Question'
import { Result } from './Result'
import { Swiper, SwiperItem } from './Swiper'
import { VueQrious } from './VueQrious'

const gloableComponents = [
  ActionBtn,
  Bgm,
  GroupDetail,
  GroupList,
  GroupItem,
  Introduction,
  Question,
  QuestionHeader,
  Result,
  Swiper,
  SwiperItem,
  VueQrious
]

export const installComponents = (app: App) => {
  for (const component of gloableComponents) {
    app.component(component.name, component)
  }
}
