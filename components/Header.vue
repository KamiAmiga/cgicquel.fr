<template>
  <header
    class="header"
    :class="{ 'header--small' : small }">
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
    small: Boolean
  }
}
</script>

<style lang="scss">
.header {
  height: 26.25rem;
  display: flex;
  margin-bottom: map-get($spacers, 4);
  flex-direction: column;
  justify-content: end;

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

  @media screen and (min-width: $breakpoint-m) {
    &__title {
      padding-left: map-get($spacers, 4);
    }
  }
}
</style>
