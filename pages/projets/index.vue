<template>
  <div>
    <h1 class="heading--main">
      Projets
    </h1>
    <div v-for="work in works"
      :key="work.id">
      {{ work.title }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    works () {
      return this.$store.state.works.list
    }
  }
}
</script>
