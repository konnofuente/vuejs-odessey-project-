<template>
    <div>
        <header id="header" class="bg-gray-700">
        <nav class="container mx-auto flex justify-start items-center py-5 px-4">
          <!-- App Name -->
          <router-link 
          
          class="text-white font-bold uppercase text-2xl mr-4" 
          :to="{name:'home'}"
          exact-active-class="no-active"
          >Music</router-link>

          <div class="flex flex-grow items-center">
            <!-- Primary Navigation -->
            <ul class="flex flex-row mt-1">
              <!-- <li>
                <router-link class="px-2 text-white" :to="{name:'about'}" >About</router-link>
              </li> -->
              <!-- Navigation Links -->
              <li
              v-if="!this.userLoggedIn"
              >
                <a 
                class="px-2 text-white" 
                href="#"
                @click.prevent="toggleAuthModel"
                >Login / Register</a>
              </li>
              <template
              v-else
              >
                
                <li
                
                >
                  <a 
                  class="px-2 text-white" 
                  href="#"
                  @click.prevent="signout"
                  >Logout</a>
                </li>
                <li>
                  <router-link class="px-2 text-white" :to="{name:'manage'}">Manage</router-link>
                </li>
              </template>
            </ul>

            <ul class="ml-auto">
              <li>
                <a href="" class="px-2 text-white" @click.prevent="changeLocale">
                {{ currentLocale }}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

    </div>
</template>

<script >
import {mapStores , mapWritableState} from 'pinia'
import useModelStore from '../../../stores/model'
import useUserStore from '../../../stores/user'
import { mapActions } from 'pinia'

  export default{
    name:'AppHeader',
    computed:{
      ...mapStores(useModelStore , useUserStore),
      ...mapWritableState(useModelStore,["isOpen"]),
      ...mapWritableState(useUserStore,['userLoggedIn']),
      currentLocale(){
        return this.$i18n.locale === "fr"? "French" : "English"
      }
    },
    methods:{

      changeLocale(){
        this.$i18n.locale = this.$i18n.locale === "fr" ? "en" : "fr";
      },
      toggleAuthModel(){
        this.modelStore.isOpen = !this.modelStore.isOpen
        console.log(this.modelStore.isOpen)
      },
      
      ...mapActions(useUserStore,['signOut']),
      signout(){
        this.signOut()
        this.$route.meta.requiresAuth 
        ? this.$router.push({name:"home"})
        :null
      },


    }
  }
</script>
