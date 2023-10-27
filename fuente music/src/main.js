import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VeeValidatePlugin from './utils/validation'
import {auth} from './includes/firebase'
import Icon from './directives/icons'
import App from './App.vue'
import router from './router'
import i18n from './includes/i18n'

let app;

auth.onAuthStateChanged(()=>{

    if(!app){
        
        const app = createApp(App)
        
        
        app.use(createPinia())
        app.use(router)
        app.use(VeeValidatePlugin)
        app.directive("icon",Icon)
        app.use(i18n)
        app.mount('#app')
    }

})

