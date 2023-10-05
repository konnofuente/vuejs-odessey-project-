
<template>
<div>
  <form-vue>
    <template   v-slot:help>
        <p>This is a form</p>
    </template>

    <template  v-slot:fields>
        <input type="text" placeholder="name" name="" id="">
        <input type="text" placeholder="email" name="" id="">
        <input type="text" placeholder="tel" name="" id="">
    </template>

    <template  v-slot:buttons> 
        <button type="submit">Submit</button>
    </template>
  </form-vue>

  <form-vue>
    <form action="">
    <div class="help">
        <p>This is a form</p>
    </div>

    <div class="fields">
        <input type="text" placeholder="name" name="" id="">
        <input type="text" placeholder="email" name="" id="">
    </div>

    <div class="buttons"> 
        <button type="submit">Submit</button>
    </div>
   </form>
  </form-vue>
</div>
</template>


<script >
// import GreetingVue from './components/GreetingVue.vue';
// import UserVue from './components/UserVue.vue';
import FormVue from './components/FormVue.vue';
export default {
  name:'App',
  components:{
    // GreetingVue,
    // UserVue,
    FormVue
  },
  data() {
    return {
      age:26
    }
  },
  methods: {
    onclickAge(){
      return this.age ++;
    }
  },
}

</script>
