import { App } from 'vue'
import {
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  Step,
  Steps,
  Icon,
  Empty
} from 'vant'

export const vantComponents = [
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  Step,
  Steps,
  Icon,
  Empty
]

export const installVant = (app: App) => {
  vantComponents.forEach(component => {
    app.use(component)
  })
}
