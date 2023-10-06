
import { createApp } from 'vue'
import App from './App.vue'
// import GreetingVue from './components/GreetingVue.vue';

let vm = createApp(App)

// vm.component(
//     "GreetingVue",GreetingVue
// )
vm.mount('#app')
