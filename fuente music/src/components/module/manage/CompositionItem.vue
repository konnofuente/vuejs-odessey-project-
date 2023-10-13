<template>
  <div>
    <div class="border border-gray-200 p-3 mb-4 rounded">
      <div v-show="!showForm">
        <h4 class="inline-block text-2xl font-bold">{{ song.modified_name }}</h4>
        <button 
        @click.prevent="deleteSong"
        class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right">
          <i class="fa fa-times"></i>
        </button>
        <button
          @click="showForm = !showForm"
          class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
        >
          <i class="fa fa-pencil-alt"></i>
        </button>
      </div>

      <div v-show="showForm">


        <div
          class="text-white text-center font-bold p-4 rounded mb-4"
          v-if="show_alert"
          :class="alert_varient"
        >
          {{ alert_message }}
        </div>

        <vee-form :validationSchema="editSongSchema" :initial-values="song" @submit="edit">
          <div class="mb-3">
            <label class="inline-block mb-2">Song Title</label>
            <vee-field
              name="modified_name"
              type="text"
              class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
              placeholder="Enter Song Title"
            />
            <ErrorMessage class="text-red-600" name="modified_name" />
          </div>

          <div class="mb-3">
            <label class="inline-block mb-2">Genre</label>
            <vee-field
              type="genre"
              name="genre"
              class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
              placeholder="Enter Genre"
            />
            <ErrorMessage class="text-red-600" name="genre" />
          </div>
          <button type="submit" class="py-1.5 px-3 rounded text-white bg-green-600">Submit</button>
          <button
            @click.prevent="showForm = !showForm"
            type="button"
            class="py-1.5 px-3 rounded text-white bg-gray-600"
          >
            Go Back
          </button>
        </vee-form>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../utils/validation'
import { ErrorMessage } from 'vee-validate'
import { songCollection, storage } from '../../../includes/firebase'

export default {
  name: 'CompositionItem',
  data() {
    return {
      showForm: false,
      editSongSchema: {
        modified_name: 'song_title',
        genre: 'required|min:3',
      },
      in_submission: false,
      show_alert: false,
      alert_varient: 'bg-blue-500',
      alert_message: 'please wait we are login you in '
    }
  },

  props: {
    song: {
      type: Object,
      required: true,
    },
    updateSong:{
      type: Function,
      required:true
    },
    index:{
      type:Number,
      required:true
    },

    removeSong:{
      type:Function,
      required: true
    }
  },
  methods: {
    async edit(values) {

      this.in_submission = true,
      this.show_alert = true,
      this.alert_varient = "bg-blue-500",
      this.alert_message = "please wait we are Updating the song "

      try {
      
        await songCollection.doc(this.song.docID).update(values)
      } catch (error) {
        console.log(error);
          this.login_alert_varient = "bg-red-500",
          this.login_alert_message = "an error occured"
          console.log(error);
          return
      };
      this.alert_varient = "bg-green-500",
      this.alert_message = "Sucess you are login"
      this.updateSong(this.index,values)
      // window.location.reload()   

      console.log('song submitted')
    },
    
    async deleteSong(){
      const storageRef = storage.ref()
      const songRef = storageRef.child(`songs/${this.song.original_name}`);

      await songRef.delete();
      await songCollection.doc(this.song.docID).delete()
      this.removeSong(this.index)
    }
  
  },

  components: {
    ErrorMessage
  },
}
</script>

<style lang="scss" scoped></style>

<style scoped>
.bg-green-600 {
  background-color: rgb(83, 160, 83);
}

.bg-gray-600 {
  background-color: gray;
}
</style>
