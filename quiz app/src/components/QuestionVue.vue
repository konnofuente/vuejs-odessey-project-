<template>
        <div class="questions-ctr" >
        <div class="progress">
            <div class="bar"></div>
            <div class="status">{{ questionsAnswered +1 }} out of {{ questions.length }} questions answered</div>
        </div>
        <div class="single-question" 
        v-for="(question ,q_index) in questions" 
        :key="question.q"
        v-show ="questionsAnswered === q_index "
        
        >
            <div class="question">{{ question.q }}</div>

            <div class="answers">
                <div class="answer" 
                v-for="answer in question.answers" 
                :key="answer.text"
                @click.prevent="onClickAnswer(answer.is_correct)"
                >{{ answer.text}}</div>
             
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'QuestionVue',
        data() {
            return {
                // correctAnswers:0
            }
        },
        props:["questions", "questionsAnswered","numQuestion"],
        emits:["clickAnswer"],
        methods:{
            onClickAnswer(is_correct){
                // console.log("click")
                this.$emit('clickAnswer',is_correct)
                // is_correct? this.correctAnswers++ : null
                // console.log(this.correctAnswers)
                // this.checkAnswer(is_correct)
            },
            // checkAnswer(is_correct){
            // }
        }
    }
</script>

<style lang="scss" scoped>

</style>