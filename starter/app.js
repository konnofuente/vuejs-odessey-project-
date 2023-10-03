

// const vm = Vue.createApp({

//     // it is used to store values 
//     data(){
//         return {
//             firstName:"Johm",
//             middleName : " dfd",
//             lastName:"william",
//             url:"https://konnomelifuente.online/",
//             age:20,
//             raw_url:'<a v-bind:href="url" target="_blank" rel="noopener noreferrer">Portfolio</a>'
//         }
//     },


//     // us to store functions request update etc ...
//     methods: {
//         increment(){
//             return this.age ++;
//         },

//         updateLastName(msg,event){
//             // event.preventDefault();

//             console.log(msg);
            
//             this.lastName = event.target.value
//         },

//         updateAge(event){
            
//             this.age = event.target.value;
//         }
        
//     },

//     //use to calculate a property and most always return a value and those not takes in props
//     computed:{
//         fullName(){
//             // return `${this.lastName.toUpperCase()}`
//             console.log("full name computed property was call!!")
//             return this.firstName + " " + this.middleName +" " + this.lastName.toUpperCase()
//         },
        
//     },

//     watch: {
//         age(newVla , oldVal){
//             setTimeout(()=> age += 20)
//         }
//     }
// }).mount('#app')



const app = Vue.createApp({

    data() {
        return {
            isPurple:false,
            textColor:' ',
            size:150,
            showCircle :true,
        }
    },

    methods: {
        checkColor(){
            this.isPurple = true
        }
    },

    computed:{
        circle_class(){
            return {purple : this.isPurple}
        },
        circle_size(){
            return {width:this.size + 'px' , height:this.size + 'px'}
        }


    }
}).mount('#circle')