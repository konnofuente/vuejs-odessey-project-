<template>

  <div>

    <head>
      
    </head>
 
    <body class="bg-gray-100 font-sans pb-24">
      <!-- Header -->
      <app-header></app-header>
      <router-view></router-view>
      <!-- Player -->
      <player-view></player-view>
      <!-- Auth Modal -->
      <app-auth></app-auth>
    </body>
  </div>
</template>

<script>
import AppAuth from './components/module/auth/AppAuth.vue';
import AppHeader from './components/module/global/AppHeader.vue';
import { mapWritableState } from 'pinia';
import useUserStore from './stores/user';
import {auth} from './includes/firebase'
import PlayerView from './components/module/players/PlayerView.vue';
export default {
  name:'App',
 
    components:{
    AppHeader,
    AppAuth,
    PlayerView 

  },
  computed:{
    ...mapWritableState(useUserStore,['userLoggedIn'])
  },
  created(){
    if(auth.currentUser){
      this.userLoggedIn = true
    }  
  }
}
</script>

<style scoped>
  #cs-header {
    height: 500px; /* Or whatever height you want */
    background-image: url(../public/assets/img/header.png);
    background-size: cover;
}
</style>