<template>
    <div>
        <button @click="IncAge"> increase age</button>
        <p>The user have age {{ age }} years</p>
        <p>{{ ageDouble }}</p>
    </div>
</template>

<script >
export default {
    name:"UserVue",
    props:{
        age:{
            type:[Number],
            required:true,
            default:50,
            validator(value){
                return value <130
            }

        }
    },
    emits:['age-change'],
    computed: {
        ageDouble(){
            return this.age *2;
        }
    },
    methods: {
        IncAge(){
            //dollar means it is a vue object 
            this.$emit('age-change',3)
        }
    },
}
</script>

<style lang="scss" scoped>

</style>