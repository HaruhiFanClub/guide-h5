import { App } from 'vue'
import {
  Swipe,
  SwipeItem,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio
} from 'vant'

export const vantComponents = [
  Swipe,
  SwipeItem,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio
]

export const installVant = (app: App) => {
  vantComponents.forEach(component => {
    app.use(component)
  })
}
