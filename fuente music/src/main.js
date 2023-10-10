import './assets/main.css'
import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VeeValidatePlugin from './components/module/auth/utils/validation'
import './includes/firebase'

import App from './App.vue'
import router from './router'

const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(VeeValidatePlugin)

app.mount('#app')
