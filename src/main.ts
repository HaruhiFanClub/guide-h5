import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { installVant } from './plugins/vant'
// import Vconsole from 'vconsole'

// eslint-disable-next-line no-new
// new Vconsole()

const app = createApp(App)
installVant(app)
app.mount('#app')
