<template>
  <header
    class="header"
    :class="[
      { 'header--small' : small },
      'header--' + type
    ]">
    <div class="header__illustration">
      <template v-if="type == 'drawing'">
        <div class="header__illustration__drawing-triangle
          header__illustration__drawing-triangle--1" />
        <div class="header__illustration__drawing-image-wrapper">
          <img :src="image"
            alt=""
            class="header__illustration__drawing-image">
          <div class="header__illustration__drawing-image-filter" />
          <div class="header__illustration__drawing-image-focus
            header__illustration__drawing-image-focus--left" />
          <div class="header__illustration__drawing-image-focus
            header__illustration__drawing-image-focus--right" />
        </div>
        <div class="header__illustration__drawing-line
          header__illustration__drawing-line--left-1" />
        <div class="header__illustration__drawing-line
          header__illustration__drawing-line--left-2" />
        <div class="header__illustration__drawing-line
          header__illustration__drawing-line--left-3" />
        <div class="header__illustration__drawing-line
          header__illustration__drawing-line--right-1" />
        <div class="header__illustration__drawing-line
          header__illustration__drawing-line--right-2" />
        <div class="header__illustration__drawing-triangle
          header__illustration__drawing-triangle--2" />
      </template>
      <template v-else-if="type == 'design'">
        <div class="header__illustration__design-section
          header__illustration__design-section--top">
          <div class="header__illustration__design-section__image-wrapper
            header__illustration__design-section__image-wrapper--top">
            <img :src="image"
              alt=""
              class="header__illustration__design-section__image">
            <div class="header__illustration__design-section__image-triangle
              header__illustration__design-section__image-triangle--1" />
            <div class="header__illustration__design-section__image-triangle
              header__illustration__design-section__image-triangle--2" />
          </div>
        </div>
        <div class="header__illustration__design-section
          header__illustration__design-section--bottom">
          <div class="header__illustration__design-section__image-wrapper
            header__illustration__design-section__image-wrapper--bottom">
            <img :src="image"
              alt=""
              class="header__illustration__design-section__image">
            <div class="header__illustration__design-section__image-triangle
              header__illustration__design-section__image-triangle--3" />
            <div class="header__illustration__design-section__image-triangle
              header__illustration__design-section__image-triangle--4" />
          </div>
        </div>
        <div class="header__illustration__design-line
          header__illustration__design-line--1" />
        <div class="header__illustration__design-line
          header__illustration__design-line--2" />
        <div class="header__illustration__design-line
          header__illustration__design-line--3" />
      </template>
      <template v-else-if="type == 'about'">
        <img src="~/assets/images/aboutHeader.svg"
          alt=""
          class="header__illustration__about-image">
      </template>
    </div>
    <div class="header__title"
      :class="{ 'header__title--translate' : type != 'about' }">
      <h1 class="heading--main">
        {{ title }}
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    small: Boolean,
    type: {
      type: String,
      required: true
    },
    image: Function
  }
}
</script>

<style lang="scss">
//
// Variables
//

$header-height: 25rem;
$drawing-gradient: linear-gradient(
  -30deg,
  map-get($theme-color-primary, base),
  33%,
  fade-out(map-get($theme-color-secondary, base),
    map-get($fading-out, 3)),
  66%,
  map-get($theme-color-primary, base),
);
$design-angle: 15deg;

//
// Styling
//

.header {
  height: $header-height;
  display: flex;
  margin-bottom: map-get($spacers, 4);
  position: relative;
  flex-direction: column;
  justify-content: flex-end;

  &__title {
    box-sizing: border-box;
    width: 100%;
    max-width: $container-max-width;
    padding-right: map-get($spacers, 4);
    margin: 0 auto;
    z-index: map-get($z-index, base-increase);
  }

  &--small {
    height: 15rem;
  }

  &__illustration {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: map-get($z-index, base-increase);
    overflow: hidden;

    &__drawing {
      &-image {
        height: 100%;

        &-wrapper {
          height: 100%;
          position: absolute;
          bottom: 0;
          left: 50%;
          z-index: map-get($z-index, base-decrease);
          transform: translateX(-50%);
        }

        &-filter {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: $drawing-gradient;
          mix-blend-mode: multiply;
        }

        &-focus {
          width: map-get($spacers, 10);
          height: 100%;
          position: absolute;
          top: 0;
          background: linear-gradient(
            to right,
            fade-out(map-get($theme-color-primary, base),
              map-get($fading-out, 5)),
            fade-out(map-get($theme-color-primary, base),
              map-get($fading-out, 0)),
          );

          &--left {
            left: 0;
          }

          &--right {
            right: 0;
            transform: rotate(180deg);
          }
        }
      }

      &-line {
        height: 0;
        border-top-width: 2px;
        border-top-color: map-get($theme-color-primary, reverse);
        position: absolute;
        transform: rotate($triangle-base-angle * -1);

        &--left-1 {
          width: 44%;
          border-top-style: dashed;
          top: 18%;
          left: 0;
          opacity: map-get($opacities, 7);
          transform-origin: top left;
        }

        &--left-2 {
          width: 52%;
          border-top-style: solid;
          top: 20%;
          left: map-get($spacers, 4);
          opacity: map-get($opacities, 7);
          transform-origin: top left;
        }

        &--left-3 {
          width: 22%;
          border-top: 1px solid map-get($theme-color-secondary, lighter);
          top: 50%;
          left: 0;
          transform-origin: top left;
        }

        &--right-1 {
          width: 50vw;
          border-top-style: dashed;
          bottom: 30%;
          right: 0;
          opacity: map-get($opacities, 7);
          transform-origin: top right;
        }

        &--right-2 {
          width: 45vw;
          border-top-style: solid;
          border-top-color: map-get($theme-color-tertiary, lighter);
          bottom: 18%;
          right: 0;
          opacity: map-get($opacities, 5);
          transform-origin: top right;
        }
      }
    }

    &__design {
      &-section {
        display: flex;
        width: 100%;
        max-width: 57.5rem;
        position: absolute;
        left: 50%;
        overflow: hidden;
        transform: translateX(-50%) skewY($design-angle * -1);

        &--top {
          border-bottom: .25rem solid map-get($theme-color-accent, darker);
          top: 0;
          bottom: 45%;
          align-items: flex-end;
          transform-origin: bottom left;
        }

        &--bottom {
          top: 55%;
          align-items: flex-start;
          transform-origin: top left;
        }

        &__image {
          width: 100%;

          &-wrapper {
            flex-grow: 0;
            flex-shrink: 0;
            margin: 0 auto;
            position: relative;
            line-height: 0;

            &--top {
              width: 75%;
              transform: translateY(50%) skewY($design-angle);
            }

            &--bottom {
              width: 70%;
              transform: translate(2%, -48%) skewY($design-angle);

              &::before,
              &::after {
                content: "";
                display: block;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
              }

              &::before {
                background: fade-out(map-get($theme-color-primary, base), map-get($fading-out, 5));
              }

              &::after {
                background: linear-gradient(
                  -15deg,
                  transparent 32%,
                  44%,
                  map-get($theme-color-primary, base) 52%
                );
              }
            }
          }
        }
      }

      &-line {
        height: 0;
        border-top-width: 2px;
        border-top-color: map-get($theme-color-accent, lighter);
        position: absolute;
        z-index: map-get($z-index, base-decrease);
        transform-origin: bottom left;
        transform: rotate($design-angle * -1);

        &--1 {
          width: 75%;
          border-top-style: solid;
          left: 0;
          bottom: 25rem;
        }

        &--2 {
          width: 88%;
          border-top-style: dashed;
          right: 0;
          bottom: 24rem;
          opacity: map-get($opacities, 2);
        }

        &--3 {
          width: 80%;
          border-top-style: solid;
          left: 15%;
          bottom: 8.5rem;
          opacity: map-get($opacities, 3);
        }
      }
    }

    &__about-image {
      width: auto;
      height: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &--about,
  &--design {
    background: linear-gradient(
      to bottom,
      fade-out(map-get($theme-color-accent, base),
        map-get($fading-out, 0)),
      66%,
      fade-out(map-get($theme-color-accent, darker),
        map-get($fading-out, 5)),
    );
  }

  &--drawing {
    background: $drawing-gradient;
  }

  @media screen and (min-width: $breakpoint-s) {
    &__illustration {
      &__design {
        &-section {
          &--top {
            bottom: 30%;
          }

          &--bottom {
            top: 70%;
          }
        }

        &-line {
          &--3 {
            left: 40%;
            bottom: 0;
          }
        }
      }
    }
  }

  @media screen and (min-width: $breakpoint-m) {
    &__title {
      padding-left: map-get($spacers, 4);

      &--translate {
        padding-left: map-get($spacers, 4) + 20rem;
      }
    }

    &__illustration {
      &__drawing {
        &-image {
          &-wrapper {
            height: $header-height - map-get($spacers, 10);
          }
        }

        &-line {
          &--left-1 {
            width: 16%;
            top: 36%;
          }

          &--left-2 {
            width: 20%;
            top: 32%;
            left: 14%;
          }

          &--left-3 {
            width: 14%;
            top: auto;
            bottom: map-get($spacers, 10);
          }
        }

        &-triangle {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);

          &--1 {
            width: 8.5rem;
            height: 8.5rem * $triangle-ratio;
            border-top: 1px solid map-get($theme-color-tertiary, lighter);
            top: map-get($spacers, 8);
            z-index: map-get($z-index, base-decrease);
            opacity: map-get($opacities, 3);

            &::before,
            &::after {
              content: "";
              width: 100%;
              border-top: 1px solid map-get($theme-color-tertiary, lighter);
              position: absolute;
              bottom: 0;
            }

            &::before {
              right: 50%;
              transform-origin: bottom right;
              transform: rotate(60deg);
            }

            &::after {
              left: 50%;
              transform-origin: top left;
              transform: rotate(-60deg);
            }
          }

          &--2 {
            width: 5rem;
            height: 5rem * $triangle-ratio;
            top: map-get($spacers, 7);
            clip-path: polygon(100% 0, 0 0, 50% 100%);
            background-color: map-get($theme-color-secondary, lighter);
          }
        }
      }

      &__design {
        &-section {
          &--top {
            bottom: 16%;
          }

          &--bottom {
            top: 84%;
          }

          &__image {
            &-wrapper {
              &--top {
                width: 70%;
                transform: translateY(40%) skewY($design-angle);
              }

              &--bottom {
                width: 66%;
                transform: translate(2%, -58%) skewY($design-angle);

                &::after {
                  background: linear-gradient(
                    -15deg,
                    transparent 25%,
                    38%,
                    map-get($theme-color-primary, base) 44%
                  );
                }
              }
            }

            &-triangle {
              position: absolute;

              &--1 {
                width: map-get($spacers, 9);
                height: map-get($spacers, 9) * $triangle-ratio;
                top: map-get($spacers, 6) * -1;
                left: 0;
                clip-path: polygon(100% 0, 0 0, 50% 100%);
                background-color: map-get($theme-color-accent, darker);
                transform: translateX(-50%);
              }

              &--2 {
                width: 8.5rem;
                height: 8.5rem * $triangle-ratio;
                border-top: solid 1px map-get($theme-color-fourth, lighter);
                top: map-get($spacers, 3) * -1;
                left: -5.5rem;
                z-index: map-get($z-index, base-decrease);
                opacity: map-get($opacities, 3);

                &::before,
                &::after {
                  content: "";
                  width: 100%;
                  border-top: solid 1px map-get($theme-color-fourth, lighter);
                  position: absolute;
                  bottom: 0;
                }

                &::before {
                  right: 50%;
                  transform-origin: bottom right;
                  transform: rotate(60deg);
                }

                &::after {
                  left: 50%;
                  transform-origin: top left;
                  transform: rotate(-60deg);
                }
              }

              &--3 {
                width: map-get($spacers, 9);
                height: map-get($spacers, 9) * $triangle-ratio;
                right: 0;
                bottom: map-get($spacers, 7);
                clip-path: polygon(100% 100%, 50% 0, 0 100%);
                background-color: map-get($theme-color-accent, darker);
                transform: translateX(50%);
              }

              &--4 {
                width: 14.5rem;
                height: 14.5rem * $triangle-ratio;
                border-bottom: solid 1px map-get($theme-color-tertiary, lighter);
                right: 0;
                bottom: -9.5rem;
                z-index: map-get($z-index, base-decrease);
                opacity: map-get($opacities, 2);
                transform: translateX(50%);

                &::before,
                &::after {
                  content: "";
                  width: 100%;
                  border-top: solid 1px map-get($theme-color-tertiary, lighter);
                  position: absolute;
                  top: 0;
                }

                &::before {
                  right: 50%;
                  transform-origin: bottom right;
                  transform: rotate(-60deg);
                }

                &::after {
                  left: 50%;
                  transform-origin: top left;
                  transform: rotate(60deg);
                }
              }
            }
          }
        }

        &-line {
          &--1 {
            bottom: 50%;
          }

          &--2 {
            bottom: 48%;
          }
        }
      }
    }
  }
}
</style>
