<template>
  <div>
    <div class="border border-gray-200 p-3 mb-4 rounded">
      <div v-show="!showForm">
        <h4 class="inline-block text-2xl font-bold">{{ song.modified_name }}</h4>
        <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right">
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
        <vee-form
        :validationSchema="editSongSchema"
        :initial-values="song"
        @submit="edit"
        >
          <div class="mb-3">
            <label class="inline-block mb-2">Song Title</label>
            <vee-field
              name="songTitle"
              type="text"
              class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
              placeholder="Enter Song Title"
            />
            <ErrorMessage class="text-red-600" name="songTitle" />
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
          <button
           
            type="submit"
            class="py-1.5 px-3 rounded text-white bg-green-600"
          >
            Submit
          </button>
          <button 
          @click.prevent="showForm = !showForm"
          type="button" class="py-1.5 px-3 rounded text-white bg-gray-600">Go Back</button>
        </vee-form>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../utils/validation'
import { ErrorMessage } from 'vee-validate'

export default {
  name: 'CompositionItem',
  data() {
    return {
      showForm: false,
      editSongSchema: {
        songTitle: 'song_title',
        genre: 'required|min:3'
      }
    }
  },

  methods:{
    edit(){
      console.log("song submitted")
    }
  },

  components: {
    ErrorMessage
  },
  props: {
    song: {
      type: Object,
      required: true
    }
  }
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
