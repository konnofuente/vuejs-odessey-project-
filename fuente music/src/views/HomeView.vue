<template>
  <div>
    <!-- Introduction -->
    <section
      style="background-image: url(../public/assets/img/header.png)"
      class="mb-8 py-20 text-black text-center relative"
    >
      <div class="absolute inset-0 w-full h-full bg-contain introduction-bg"></div>
      <div class="container mx-auto">
        <div class="text-white main-header-content">
          <h1 class="font-bold text-5xl mb-5">Listen to Great Music!</h1>
          <p class="w-full md:w-8/12 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et dolor mollis,
            congue augue non, venenatis elit. Nunc justo eros, suscipit ac aliquet imperdiet,
            venenatis et sapien. Duis sed magna pulvinar, fringilla lorem eget, ullamcorper urna.
          </p>
        </div>
      </div>

      <img
        class="relative block mx-auto mt-5 -mb-20 w-auto max-w-full"
        src="../assets/img/introduction-music.png"
      />
    </section>

    <!-- Main Content -->
    <section class="container mx-auto">
      <div class="bg-white rounded border border-gray-200 relative flex flex-col">
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
          <span class="card-title">Songs</span>
          <!-- Icon -->
          <i class="fa fa-headphones-alt float-right text-green-400 text-xl"></i>
        </div>
        <!-- Playlist -->

        <song-item v-for="song in songs" :key="song.docID" :song="song"></song-item>
        <!-- .. end Playlist -->
      </div>
    </section>
  </div>
</template>

<script>
import SongItem from '../components/module/home/SongItem.vue'

import { songCollection } from '../includes/firebase'

export default {
  components: { SongItem },
  name: 'HomeView',
  data() {
    return {
      songs: [],
      maxPerPage:10,
      pendingRequest:false
    }
  },

  async created() {
    await this.getSongs()

    window.addEventListener('scroll' , this.handleScroll)
  },
  
  beforeUnmount(){
    window.removeEventListener('scroll' , this.handleScroll)

  },
  methods: {

    handleScroll(){
        const {scrollTop , offsetHeight } = document.documentElement;
        const {innerHeight} = window;

        const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight;

        bottomOfWindow ? this.getSongs() : null
    },

    async getSongs() {

      if(this.pendingRequest){
        return;
      }

      this.pendingRequest = true
      let snapshot
      
      if(this.songs.length){

        const lastDoc = await songCollection.doc(this.songs[this.songs.length - 1].docID).get()
        snapshot = await songCollection.orderBy('modified_name').startAfter(lastDoc).limit(this.maxPerPage).get()
      }else {
        snapshot = await songCollection.orderBy('modified_name').limit(this.maxPerPage).get()

      }


      snapshot.forEach((document) => {
        this.songs.push({
          ...document.data(),
          docID: document.id
        })
      })
      
      this.pendingRequest = false
      console.log(this.songs)
    }
  }
}
</script>
