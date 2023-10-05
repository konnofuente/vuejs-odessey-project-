
<template>
  <div>

    <h3>texting</h3>
    <button @click="age ++"> increase age</button>
    <greeting-vue></greeting-vue>
    <user-vue :age="age"></user-vue>
  </div>
</template>


<script >
import GreetingVue from './components/GreetingVue.vue';
import UserVue from './components/UserVue.vue';
export default {
  name:'App',
  components:{
    GreetingVue,
    UserVue
  },
  data() {
    return {
      age:26
    }
  },
}

</script>
