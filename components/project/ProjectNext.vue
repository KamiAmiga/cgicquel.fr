<template>
  <nuxt-link :to="link" class="project-next">
    <div class="project-next__background">
      <img :src="image"
        alt=""
        class="project-next__background__image">
      <div class="project-next__background__filter"></div>
    </div>

    <div class="project-next__info-wrapper content">
      <div class="project-next__info">
        <div class="project-next__info__text">
          <span class="font-mono font-mono--small">Projet suivant</span>
          <span class="project-next__info__text__name">{{ name }}</span>
        </div>
        <div class="project-next__info__next-icon"></div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    name: String,
    link: String,
    image: Function
  }
}
</script>

<style lang="scss">
.project-next {
  display: block;
  margin-bottom: map-get($spacers, 10);

  &__background {
    height: 37.5vw;
    max-height: 15rem;
    border-bottom: 1px solid map-get($theme-color-primary, lighter-2);
    position: relative;
    overflow: hidden;

    &__image,
    &__filter {
      width: 100%;
      position: absolute;
      left: 50%;
    }

    &__image {
      top: 50%;
      transform: translate(-50%, -50%) scale(1);
      transition: transform .33s cubic-bezier(.6, 0, .4, 1.1);
    }

    &__filter {
      width: 200%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 1;
      background: linear-gradient(
        150deg,
        map-get($theme-color-primary, base) 12.5%,
        37.5%,
        map-get($theme-color-secondary, base) 50%,
      );
      mix-blend-mode: multiply;
      transition: all .125s .08s ease-out;
    }
  }

  &__info {
    display: flex;
    padding: map-get($spacers, 2)
      map-get($spacers, 4)
      map-get($spacers, 2)
      map-get($spacers, 8);
    position: absolute;
    bottom: 0;
    right: 0;
    align-items: center;
    justify-content: flex-end;
    background-color: map-get($theme-color-primary, base);
    box-shadow: map-get($spacers, 1) * -1
      map-get($spacers, 1) * -1
      map-get($spacers, 2)
      fade-out(map-get($theme-color-accent, base), map-get($fading-out, 4));

    &-wrapper {
      height: map-get($spacers, 4);
      position: relative;
    }

    &__text {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      &__name {
        // turn into mixin
        font-size: $font-size-base;
        color: map-get($theme-color-accent, lighter);
        font-weight: $font-weight-light;
        line-height: $line-height-base;
        letter-spacing: $letter-spacing-large-3;
        text-transform: uppercase;
        // turn into mixin
      }
    }

    &__next-icon {
      width: map-get($spacers, 6);
      height: map-get($spacers, 6);
      flex-grow: 0;
      flex-shrink: 0;
      box-sizing: border-box;
      border: 1px solid map-get($theme-color-accent, base);
      margin-left: map-get($spacers, 3);
      position: relative;
      border-radius: 50%;

      &::before {
        content: "";
        display: block;
        width: map-get($spacers, 3);
        height: map-get($spacers, 3);
        box-sizing: border-box;
        border-right: 2px solid map-get($theme-color-primary, reverse);
        border-bottom: 2px solid map-get($theme-color-primary, reverse);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-60% , -50%) rotate(-45deg);
      }
    }
  }

  &:hover,
  &:focus,
  &:active {
    .project-next__background {
      &__image {
        transform: translate(-50%, -50%) scale(1.04);
      }

      &__filter {
        left: -100%;
        opacity: map-get($opacities, 9);
      }
    }
  }

  @media screen and (min-width: $breakpoint-m) {
    &__background {
      max-height: 20rem;
      border-bottom: none;
    }

    &__info {
      padding-top: map-get($spacers, 3);
      padding-bottom: map-get($spacers, 3);

      &__text__name {
        // turn into mixin
        font-size: $font-size-base * $font-size-scale-ratio;
        line-height: $line-height-small;
        letter-spacing: $letter-spacing-large-2;
        // turn into mixin
      }

      &__next-icon {
        margin-left: map-get($spacers, 4);
      }
    }
  }
}
</style>
