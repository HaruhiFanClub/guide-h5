import { App } from 'vue'
import {
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  Step,
  Steps,
  Icon,
  Empty,
  ImagePreview
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
  app.config.globalProperties.$preview = ImagePreview
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $preview: ImagePreview;
  }
}
