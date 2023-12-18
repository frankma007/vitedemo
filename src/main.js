import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
// import plugins from '@/../packages/index.js'
import myPlugin from '../packages/index.js'
const app = createApp(App)
app.use(myPlugin)
app.mount('#app')
