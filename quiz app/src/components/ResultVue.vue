<template>
  <div class="result">
    <div class="title">{{ results[resultIndex].title }}</div>
    <div class="desc">Enter a short description here about the result.</div>
  </div>
</template>

<script>
export default {
  name: 'ResultVue',
  props: ['results', 'correctAnswers'],
  computed: {
    resultIndex() {
      let index = 0
      this.results.array.forEach((e, i) => {
        if (e.min <= this.correctAnswers && e.max >= this.correctAnswers) {
          index = i
        }
      })

      return index
    }
  }
}
</script>

<style lang="scss" scoped></style>
