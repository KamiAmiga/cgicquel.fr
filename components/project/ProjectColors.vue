<template>
  <ul class="project-color">
    <li class="project-color__item"
      v-for="color in colors"
      :key="color.id">
      <span class="project-color__item__swatch"
        :style="{ '--swatch-color': color.code }"></span>
      <span class="project-color__item__name">{{ color.name }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    colors: Array
  }
}
</script>

<style lang="scss">
.project-color {
  padding: 0;
  margin: 0;

  &__item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-bottom: map-get($spacers, 7);

    &__swatch {
      display: block;
      width: map-get($spacers, 9);
      height: map-get($spacers, 9);
      flex-grow: 0;
      flex-shrink: 0;
      position: relative;
      margin-right: map-get($spacers, 6);
      background-color: var(--swatch-color);

      &::after {
        content: "";
        display: block;
        width: map-get($spacers, 7);
        height: map-get($spacers, 7);
        border-right: 1px solid map-get($theme-color-primary, lighter-2);
        border-bottom: 1px solid map-get($theme-color-primary, lighter-2);
        position: absolute;
        right: map-get($spacers, 3) * -1;
        bottom: map-get($spacers, 3) * -1;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: $breakpoint-m) {
    display: flex;
    flex-wrap: wrap;

    &__item {
      flex: 50% 0 0;

      &__name {
        padding-right: map-get($spacers, 4);
      }
    }
  }
}
</style>
