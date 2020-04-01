<template>
  <header
    class="header"
    :class="[
      { 'header--small' : small },
      'header--color-' + color
    ]">
    <div class="header__illustration"></div>
    <div class="header__title">
      <h1 class="heading--main">{{ title }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
    small: Boolean,
    color: {
      type: String,
      default: 'accent'
    }
  }
}
</script>

<style lang="scss">
.header {
  height: 26.25rem;
  display: flex;
  margin-bottom: map-get($spacers, 4);
  flex-direction: column;
  justify-content: flex-end;

  &__title {
    box-sizing: border-box;
    width: 100%;
    max-width: $container-max-width;
    margin: 0 auto;
    padding-right: map-get($spacers, 4);
  }

  &--small {
    height: 15rem;
  }

  &--color {
    &-accent {
      background: linear-gradient(
        to bottom,
        fade-out(map-get($theme-color-accent, base),
          map-get($fading-out, 0)),
        66%,
        fade-out(map-get($theme-color-accent, darker),
          map-get($fading-out, 5)),
      );
    }
  }

  @media screen and (min-width: $breakpoint-m) {
    &__title {
      padding-left: map-get($spacers, 4);
    }
  }
}
</style>
