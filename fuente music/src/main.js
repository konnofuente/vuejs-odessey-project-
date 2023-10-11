import './assets/main.css'
import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VeeValidatePlugin from './utils/validation'
import {auth} from './includes/firebase'

import App from './App.vue'
import router from './router'

let app;

auth.onAuthStateChanged(()=>{

    if(!app){
        
        const app = createApp(App)
        
        
        
        app.use(createPinia())
        app.use(router)
        app.use(VeeValidatePlugin)
        
        app.mount('#app')
    }

})

