<template>
  <ul class="project-typography">
    <li class="project-typography__item"
      v-for="font in fonts"
      :key="font.id">
      <img :src="font" alt="">
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    fonts: Array
  }
}
</script>

<style lang="scss">
.project-typography {
  padding: 0;
  margin: 0;
  list-style-type: none;

  &__item {
    max-width: 20rem;
    padding-bottom: map-get($spacers, 3);
    border-bottom: 2px
      solid
      fade-out(map-get($theme-color-fourth, base), map-get($fading-out, 5));
    position: relative;
    margin-bottom: map-get($spacers, 7);
    line-height: 0;

    &::after {
      content: "";
      display: block;
      width: 100%;
      border-bottom: 2px
        dashed
        fade-out(map-get($theme-color-fourth, lighter), map-get($fading-out, 2));
      position: absolute;
      bottom: map-get($spacers, 2);
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
