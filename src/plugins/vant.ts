import { App } from 'vue'
import {
  Swipe,
  SwipeItem,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  Step,
  Steps
} from 'vant'

export const vantComponents = [
  Swipe,
  SwipeItem,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  Step,
  Steps
]

export const installVant = (app: App) => {
  vantComponents.forEach(component => {
    app.use(component)
  })
}
