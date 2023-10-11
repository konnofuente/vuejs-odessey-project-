<template>
    <div>
        <header id="header" class="bg-gray-700">
        <nav class="container mx-auto flex justify-start items-center py-5 px-4">
          <!-- App Name -->
          <a class="text-white font-bold uppercase text-2xl mr-4" href="#">Music</a>

          <div class="flex flex-grow items-center">
            <!-- Primary Navigation -->
            <ul class="flex flex-row mt-1">
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
                  @click.prevent="signOut"
                  >Logout</a>
                </li>
                <li>
                  <a class="px-2 text-white" href="#">Manage</a>
                </li>
              </template>
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
      ...mapWritableState(useUserStore,['userLoggedIn'])
    },
    methods:{
      toggleAuthModel(){
        this.modelStore.isOpen = !this.modelStore.isOpen
        console.log(this.modelStore.isOpen)
      },

      ...mapActions(useUserStore,['signOut']),

    }
  }
</script>
