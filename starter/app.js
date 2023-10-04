

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



// const app = Vue.createApp({

//     data() {
//         return {
//             isPurple:false,
//             textColor:' ',
//             size:150,
//             showCircle :true,

            
//         }
//     },

//     methods: {
//         checkColor(){
//             this.isPurple = true
//         }
//     },

//     computed:{
//         circle_class(){
//             return {purple : this.isPurple}
//         },
//         circle_size(){
//             return {width:this.size + 'px' , height:this.size + 'px'}
//         }


//     }
// }).mount('#circle')


// const app = Vue.createApp({
//     data() {
//         return {
//             birds: ['Pigeons', 'Eagles', 'Doves', 'Parrots'],
//             people: [
//                 { name: 'John', age: 20 },
//                 { name: 'Rick', age: 18 },
//                 { name: 'Amy', age: 33 }
//             ]
//         }
//     },
// }).mount('#listing')


let vm = Vue.createApp({
    data() {
      return {
        people: [
          {
            name: 'John',
            message: 'Hello world!'
          },
          {
            name: 'Rick',
            message: 'I like pie.'
          },
          {
            name: 'Amy',
            message: 'Skydiving is fun!'
          }
        ]
      }
    },
    methods: {
        move(){
            // return this.people = this.people.reverse()
            const first = this.people.shift()
            this.people.push(first)
        },
    updateName(index , event){
      this.people[index] = {...this.people[index], name: event.target.value};
    }
    
     
    },

   computed: {
   },
   
  }).mount('#name')
  