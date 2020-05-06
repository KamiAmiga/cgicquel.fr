<template>
  <main class="projects" role="main">
    <h1 class="sr-only">
      Projets
    </h1>

    <hooper>
      <slide v-for="work in works"
        :key="work.id">
        <div class="projects__item"
          :class="'projects__item--' + work.type">
          <nuxt-link :to="'/projets/' + work.id"
            class="projects__item__link">
            <div class="projects__item__link__marker"></div>
            <h2 class="heading--main projects__item__link__title">
              {{ work.title }}
            </h2>
            <div class="projects__item__link__visual">
              <div class="projects__item__link__visual__line
                projects__item__link__visual__line--1"></div>
              <div class="projects__item__link__visual__line
                projects__item__link__visual__line--2"></div>
              <div class="projects__item__link__visual__line
                projects__item__link__visual__line--3"></div>
              <div class="projects__item__link__visual__image-wrapper">
                <img :src="work.mainIlluDesktop" alt=""
                  class="projects__item__link__visual__image">
              </div>
            </div>
          </nuxt-link>
        </div>
      </slide>

      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
  </main>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
} from 'hooper'

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  computed: {
    works () {
      return this.$store.state.works.list
    }
  }
}
</script>

<style lang="scss">
.projects {
  .hooper {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    top: map-get($spacers, 8);
    bottom: 6rem;
    overflow: hidden;

    * {
      box-sizing: border-box;
    }

    &-list {
      width: 100%;
      height: 100%;
      padding-bottom: 3.75rem;
    }

    &-track {
      display: flex;
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
    }

    &-slide {
      flex-shrink: 0;
      height: 100%;
      padding: 0;
      margin: 0;
      list-style: none;
      position: relative;

      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: 0;
        background-color: map-get($theme-color-primary, reverse);
        box-shadow: 0 0 2px
          fade-out(map-get($theme-color-accent, lighter), map-get($fading-out, 7));
      }
    }

    &-next,
    &-prev {
      width: 2.25rem;
      height: 2.25rem;
      padding: 0;
      border: none;
      position: absolute;
      bottom: 0;
      left: 50vw;
      background-color: transparent;
      cursor: pointer;

      &.is-disabled {
        opacity: 0.3;
        cursor: pointer;
      }

      .icon {
        opacity: 0;
      }

      &::before,
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
      }

      &::before {
        width: map-get($spacers, 6);
        height: map-get($spacers, 6);
        border: 1px solid map-get($theme-color-secondary, darker);
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }

      &::after {
        width: map-get($spacers, 3);
        height: map-get($spacers, 3);
        border-top: 2px solid map-get($theme-color-accent, lighter);
        border-right: 2px solid map-get($theme-color-accent, lighter);
        transform: translate(-60%, -50%) rotate(45deg);
      }
    }

    &-next {
      transform: translateX(map-get($spacers, 3));
    }

    &-prev {
      transform: translateX((2.25rem + map-get($spacers, 3)) * -1) rotate(180deg);
    }

    &-sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }
  }

  &__item {
    height: 100%;
    position: absolute;
    left: map-get($spacers, 4) + map-get($spacers, 6);
    right: 0;

    &__link {
      display: flex;
      width: 100%;
      max-width: 54rem;
      height: 100%;
      padding-right: map-get($spacers, 8);
      position: absolute;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      text-decoration: none;

      &__marker {
        width: 2.75rem;
        height: 2.75rem;
        position: absolute;
        bottom: 0;
        left: map-get($spacers, 3) * -1;
        z-index: map-get($z-index, base-increase);
        background-color: map-get($theme-color-primary, base);
        transform: translate(-50%, 50%) rotate(45deg);

        &::before,
        &::after {
          content: "";
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        &::before {
          content: "";
          width: map-get($spacers, 7);
          height: map-get($spacers, 7);
          border: 1px solid map-get($theme-color-accent, base);
          background: linear-gradient(
            to bottom,
            fade-out(map-get($theme-color-accent, darker), map-get($fading-out, 5)),
            33%,
            fade-out(map-get($theme-color-accent, lighter), map-get($fading-out, 2))
          );
        }

        &::after {
          content: "";
          width: .275rem;
          height: .275rem;
          background: map-get($theme-color-primary, reverse);
          box-shadow: 0 0 2px
            fade-out(map-get($theme-color-accent, lighter), map-get($fading-out, 7));
        }
      }

      &__title {
        margin-bottom: map-get($spacers, 10);
        position: relative;

        &::before {
          content: "";
          display: block;
          width: 0;
          border-left: 1px dashed map-get($theme-color-primary, lighter-2);
          position: absolute;
          top: 0;
          bottom: map-get($spacers, 8) * -1;
          left: map-get($spacers, 3) * -1;
        }
      }

      &__visual {
        display: flex;
        padding-left: map-get($spacers, 8);
        position: absolute;
        top: 0;
        right: 0;
        bottom: map-get($spacers, 8);
        left: map-get($spacers, 8);
        z-index: map-get($z-index, base-decrease);
        overflow: hidden;
        justify-content: flex-end;
        align-items: center;
        background: linear-gradient(
          -15deg,
          fade-out(map-get($theme-color-accent, darker), map-get($fading-out, 5)),
          map-get($theme-color-primary, base),
          fade-out(map-get($theme-color-accent, darker), map-get($fading-out, 5))
        );
        box-shadow: map-get($spacers, 2) * -1
          map-get($spacers, 1)
          map-get($spacers, 2)
          fade-out(map-get($theme-color-accent, lighter), map-get($fading-out, 3));

        &__image {
          max-width: 100%;

          &-wrapper {
            position: relative;
            z-index: map-get($z-index, base-increase);
            line-height: 0;

            &::after {
              content: "";
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              opacity: map-get($opacities, 5);
              background-color: map-get($theme-color-accent, base);
              mix-blend-mode: multiply;
            }
          }
        }

        &__line {
          height: 0;
          border-top: 2px solid map-get($theme-color-accent, lighter);
          border-top-style: solid;
          position: absolute;
          transform-origin: bottom left;
          transform: rotate(-15deg);

          &--1 {
            width: 100%;
            top: 15%;
            left: 0;
          }

          &--2 {
            width: 100%;
            top: 20%;
            left: 4%;
            opacity: map-get($opacities, 2);
          }

          &--3 {
            width: 120%;
            bottom: 0;
            left: 0;
            opacity: map-get($opacities, 3);
          }
        }
      }
    }
  }

  @media screen and (min-width: $breakpoint-s) {
    &__item {
      &__link {
        &__visual {
          padding-right: map-get($spacers, 7);
          padding-left: 25%;
        }
      }
    }
  }

  @media screen and (min-width: $breakpoint-m) {
    .hooper {
      max-height: 35rem;
      top: 10%;
      bottom: 7rem;

      &-navigation {
        max-width: $container-max-width;
        position: relative;
        margin: 0 auto;
      }

      &-prev,
      &-next {
        width: map-get($spacers, 9);
        height: map-get($spacers, 9);
        bottom: 10rem;
        transform: none;

        &::before {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          border-width: 2px;
        }

        &::after {
          width: map-get($spacers, 5);
          height: map-get($spacers, 5);
          border-top-width: 4px;
          border-right-width: 4px;
        }
      }

      &-prev {
        left: 0;
        transform: rotate(180deg);
      }

      &-next {
        right: 0;
        left: auto;
        transform: none;
      }
    }

    &__item {
      max-width: $container-max-width;
      margin: 0 auto;
      left: 0;

      &__link {
        right: map-get($spacers, 7) + map-get($spacers, 9);

        &__marker {
          left: map-get($spacers, 4) * -1;
        }

        &__title {
          &::before {
            left: map-get($spacers, 4) * -1;
          }
        }

        &__visual {
          padding-right: map-get($spacers, 8);
          padding-left: 30%;

          &__line {
            &--2 {
              width: 120%;
              border-top-style: dashed;
              top: 25%;
              left: 0;
            }

            &--3 {
              width: 35%;
              left: 70%;
            }
          }
        }
      }
    }
  }
}
</style>
