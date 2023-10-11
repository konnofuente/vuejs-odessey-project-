<template>
    <div>
        <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      
      <div class="col-span-1">
        <upload-file></upload-file>
      </div>

      <div class="col-span-2">
        <div>
          <div class="bg-white rounded border border-gray-200 relative flex flex-col">
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
          <span class="card-title">My Songs</span>
          <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
        </div>
        <div class="p-6">
          <!-- Composition Items -->
          <composition-item v-for="song  in songs " :key="song.docID" :song="song" ></composition-item>
  
          </div>
        </div>
        </div>
      </div>

    </div>
  </section>

    </div>
</template>

<script>

import useUserStore from "../stores/user";
import UploadFile from "../components/module/manage/UploadFile.vue";
import CompositionItem from '../components/module/manage/CompositionItem.vue';
import { songCollection, auth } from '../includes/firebase'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"ManageView",

    data() {
    return {
        songs:[]
    }
  },

    components:{
      UploadFile,
        CompositionItem
    },
    
    async created() {
    const snapshot = await songCollection.where('uid', '==', auth.currentUser.uid).get();

    snapshot.forEach((document)=>{
        const song = {
            ...document.data(),
            docID : document.id
        }

        this.songs.push(song)
    })
  },

    beforeRouteEnter(to ,from , next ){
        const store = useUserStore();

        if (store.userLoggedIn) {
            next()
        } else {
            next({name:'home'})
        }

    }
}
</script>