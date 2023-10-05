<template>
    <div>
        <p>{{ msg }}</p>

    </div>
</template>

<script>
export default {
  name:'GreetingVue',
  data() {
    return {
      msg:'hello'
    }
  },
}

</script>
<style scoped lang="scss">
  p{
    color: red;
  }
  
</style>

