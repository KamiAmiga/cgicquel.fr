<template>
  <div class="project-secondary-images">
    <figure v-for="image in images"
      :key="image.id"
      class="project-secondary-images__item">
      <img :src="image"
        alt=""
        class="project-secondary-images__item__image">
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.project-secondary-images {
  &__item {
    line-height: 0;

    &__image {
      width: 100%;
      line-height: 0;
    }
  }

  @media screen and (min-width: $breakpoint-s) {
    display: flex;
    flex-wrap: wrap;

    &__item {
      width: 50%;
      flex: 50% 0 0;
    }
  }
}
</style>
