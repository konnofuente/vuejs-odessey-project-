<template>
  <div>
    <select v-model="componentName">
      <option value="HomeVue">Home</option>
      <option value="AboutVue">About</option>
    </select>

    <component :is='componentName'></component>

    <hr>
    
    <button type="button" @click="flag = !flag">Toggle</button>
<!--     
    <transition name="fade" duration="1000" mode="in-out ">
      <h2 v-if="flag" key="main"> hello world </h2>
      <h2 v-else key="secondary"> Very good </h2>
    </transition> -->
    
    <hr>

    <transition name="zoom">
    <h2 v-if="flag">hello</h2>
    </transition>
  </div>

</template>

<script>
import HomeVue from "./components/Home.vue";
import AboutVue from "./components/About.vue";

export default {
  name: "App",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HomeVue,
    // eslint-disable-next-line vue/no-unused-components
    AboutVue,
  },
  data() {
    return {
      componentName: "HomeVue",
      flag:false
    };
  },
};
</script>

<style>
.fade-entre-from{
  opacity: 0;
}

.fade-enter-from{
  transition: all 3s linear;
}

.fade-leave-to{
  transition: all 3s linear;
  opacity: 0;
}

.zoom-enter-active{
  animation: zoom-in 1s linear forwards;
}

.zoom-leave-active {
  animation: zoom-in 1s linear forwards;

}

@keyframes zoom-in{
  from{
    transform:scale(0,0)
  }
  to{
    transform:scale(1,1)

  }
}

@keyframes zoom-out{
  from{
    transform:scale(1,1)
  }
  to{
    transform:scale(0,0)

  }
}
</style>
