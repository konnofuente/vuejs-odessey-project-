import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VeeValidatePlugin from './utils/validation'
import {auth} from './includes/firebase'
import Icon from './directives/icons'
import App from './App.vue'
import router from './router'
import i18n from './includes/i18n'
import {registerSW} from "virtual:pwa-register";
// import { GlobalComponents } from './includes/_global'

let app;
registerSW({immediate:true})

auth.onAuthStateChanged(()=>{

    if(!app){
        
        const app = createApp(App)
        
        
        app.use(createPinia())
        app.use(router)
        app.use(VeeValidatePlugin)
        // app.use(GlobalComponents)
        app.directive("icon",Icon)
        app.use(i18n)
        app.mount('#app')
    }

})

