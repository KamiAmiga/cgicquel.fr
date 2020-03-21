<template>
  <div class="homepage">
    <h1 class="homepage__title-container">
      <span class="homepage__title-sub font-sans--md-capitalized">Camille Gicquel</span>
      <span class="homepage__title-main">UI Design & Intégration</span>
    </h1>

    <div class="homepage__illustration">
      <div class="homepage__illustration__cityscape">
        <div class="homepage__illustration__skyline
          homepage__illustration__skyline--left-1"></div>
        <div class="homepage__illustration__skyline
          homepage__illustration__skyline--right-1
          homepage__illustration__skyline--dashes"></div>
        <div class="homepage__illustration__skyline
          homepage__illustration__skyline--right-2"></div>
        <div class="homepage__illustration__skyline
          homepage__illustration__skyline--right-3
          homepage__illustration__skyline--dashes"></div>

        <div class="homepage__illustration__cityscape__building
          homepage__illustration__cityscape__building--back-left-1">
          <div class="homepage__illustration__cityscape__building__lights
            homepage__illustration__cityscape__building__lights--back-left-1"></div>
        </div>
        <div class="homepage__illustration__cityscape__building
          homepage__illustration__cityscape__building--back-left-2"></div>
        <div class="homepage__illustration__cityscape__building
          homepage__illustration__cityscape__building--back-left-3"></div>
        <div class="homepage__illustration__cityscape__building
          homepage__illustration__cityscape__building--back-center-1"></div>
        <div class="homepage__illustration__cityscape__building
          homepage__illustration__cityscape__building--back-center-2"></div>
        <div class="homepage__illustration__cityscape__building
          homepage__illustration__cityscape__building--back-right-1">
          <div class="homepage__illustration__cityscape__building__lights
            homepage__illustration__cityscape__building__lights--back-right-1"></div>
        </div>
        <div class="homepage__illustration__cityscape__building
          homepage__illustration__cityscape__building--back-right-2"></div>
        <div class="homepage__illustration__cityscape__building
          homepage__illustration__cityscape__building--back-right-3"></div>
        <div class="homepage__illustration__cityscape__building
          homepage__illustration__cityscape__building--fore-left">
          <img class="homepage__illustration__cityscape__building__image
            homepage__illustration__cityscape__building__image--left"
            src=""
            alt="">
        </div>
        <div class="homepage__illustration__cityscape__building
          homepage__illustration__cityscape__building--fore-right">
          <img class="homepage__illustration__cityscape__building__image
            homepage__illustration__cityscape__building__image--right"
            src=""
            alt="">
        </div>
        <div class="homepage__illustration__cityscape__light
          homepage__illustration__cityscape__light--left"></div>
        <div class="homepage__illustration__cityscape__light
          homepage__illustration__cityscape__light--right"></div>
      </div>

      <div class="homepage__illustration__horizon">
        <div class="homepage__illustration__horizon__line"></div>
        <div class="homepage__illustration__horizon__shape-container">
          <div class="homepage__illustration__horizon__shape">
            <div class="homepage__illustration__horizon__shape__inner
              homepage__illustration__horizon__shape__inner--dark"></div>
            <div class="homepage__illustration__horizon__shape__inner
              homepage__illustration__horizon__shape__inner--light"></div>
          </div>
        </div>
      </div>

      <div class="homepage__illustration__ground">
        <div class="homepage__illustration__skyline
          homepage__illustration__skyline--left-2"></div>
        <div class="homepage__illustration__skyline
          homepage__illustration__skyline--right-4"></div>
        <div class="homepage__illustration__skyline
          homepage__illustration__skyline--right-5
          homepage__illustration__skyline--dashes"></div>

        <div class="homepage__illustration__ground__shape"></div>
        <div class="homepage__illustration__ground__reflexion
          homepage__illustration__ground__reflexion--left"></div>
        <div class="homepage__illustration__ground__reflexion
          homepage__illustration__ground__reflexion--right"></div>
        <div class="homepage__illustration__ground__light"></div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
//
// Variables
//

$triangle-ratio: 86.667%;
$triangle-base-angle: 30deg;
$triangle-reverse-angle: 46.667deg;

//
// Styling
//

.homepage {
  display: block;
  width: 100%;
  max-width: $container-max-width;
  min-height: 100vh;
  position: relative;
  margin: 0 auto;
  overflow-x: hidden;

  &__title {
    &-container {
      position: absolute;
      margin: 0;
      left: 0;
      bottom: 6rem;
      z-index: map-get($z-index, base-increase);
    }

    &-sub {
      display: inline-block;
      margin: 0 0 map-get($spacers, 5) map-get($spacers, 7);
    }

    &-main {
      // turn into mixin
      font-size: $font-size-base * $font-size-scale-ratio * $font-size-scale-ratio * $font-size-scale-ratio;
      color: map-get($theme-color-primary, reverse);
      font-weight: $font-weight-semibold;
      line-height: $line-height-small;
      letter-spacing: $letter-spacing-small-2;
      // turn into mixin
      display: inline-block;
      box-sizing: border-box;
      padding: map-get($spacers, 4)
        map-get($spacers, 4)
        map-get($spacers, 4)
        (map-get($spacers, 7) - map-get($spacers, 2));
      border-left: map-get($spacers, 2) solid map-get($theme-color-secondary, darker);
      background: linear-gradient(
        to right,
        fade-out(map-get($theme-color-secondary, darker), .68),
        16.5%,
        fade-out(map-get($theme-color-secondary, darker), 1) 50%,
      );
    }
  }

  &__illustration {
    width: 100%;
    min-width: 20rem;
    max-width: 25rem;
    min-height: 100vh;
    position: absolute;
    right: map-get($spacers, 7) * -1;
    z-index: map-get($z-index, base);
    overflow: hidden;

    &__skyline {
      height: 0;
      position: absolute;
      border-top-width: 2px;
      border-top-color: map-get($theme-color-primary, reverse);
      transform: rotate($triangle-base-angle * -1);

      &--left-1 {
        width: 33.783%;
        border-top-style: solid;
        left: 0;
        bottom: 0;
        opacity: .08;
        transform-origin: top left;
      }

      &--right-1 {
        width: 33.783%;
        border-top-style: dashed;
        top: 9.375%;
        right: 10.546%;
        opacity: .32;
        transform-origin: top right;
      }

      &--right-2 {
        width: 33.783%;
        border-top-style: solid;
        top: 9.375%;
        right: 2.685%;
        opacity: .48;
        transform-origin: top right;
      }

      &--right-3 {
        width: 33.783%;
        border-top-style: dashed;
        right: 0;
        bottom: 21%;
        opacity: .16;
        transform-origin: top right;
      }

      &--left-2 {
        width: 8.784%;
        border-top-style: solid;
        top: 3.125%;
        left: 6.757%;
        opacity: .04;
        transform-origin: top right;
      }

      &--right-4 {
        width: 27.027%;
        border-top-style: solid;
        top: 9.375%;
        right: 6.757%;
        opacity: .04;
        transform-origin: top right;
      }

      &--right-5 {
        width: 24.324%;
        border-top-style: dashed;
        top: 15.625%;
        right: 9.459%;
        opacity: .08;
        transform-origin: top right;
      }
    }

    &__cityscape {
      padding-bottom: 80%;
      position: absolute;
      left: 12px;
      right: 12px;
      overflow: hidden;

      &__building {
        position: absolute;
        bottom: 0;
        overflow: hidden;

        &__lights {
          position: absolute;
          bottom: 0;

          &::before,
          &::after {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
          }

          &--back {
            &-left-1 {
              width: 2.778%;
              top: 3.226%;
              left: 27.778%;
              background: linear-gradient(
                to bottom,
                fade-out(map-get($theme-color-fourth, darker), 1),
                fade-out(map-get($theme-color-primary, reverse), .84),
              );

              &::before,
              &::after {
                background: linear-gradient(
                  to bottom,
                  fade-out(map-get($theme-color-fourth, darker), 1),
                  fade-out(map-get($theme-color-primary, reverse), .84),
                );
              }

              &::before {
                right: 400%;
              }

              &::after {
                left: 400%;
              }
            }

            &-right-1 {
              width: 2%;
              top: 10%;
              right: 30.769%;
              background: linear-gradient(
                to bottom,
                fade-out(map-get($theme-color-tertiary, darker), .92),
                fade-out(map-get($theme-color-tertiary, base), .52),
              );

              &::before,
              &::after {
                background: linear-gradient(
                  to bottom,
                  fade-out(map-get($theme-color-tertiary, darker), .92),
                  fade-out(map-get($theme-color-tertiary, base), .52),
                );
              }

              &::before {
                right: 600%;
              }

              &::after {
                left: 600%;
              }
            }
          }
        }

        &--fore {
          &-left {
            width: 21.622%;
            height: 67.188%;
            left: 18.92%;
            z-index: map-get($z-index, base-increase);
            background: white;
            box-shadow: 0 0 map-get($spacers, 2) fade-out(map-get($theme-color-fourth, lighter), .36);
            transform-origin: top left;
            transform: skewY($triangle-base-angle);
          }

          &-right {
            width: 24.324%;
            height: 84.375%;
            left: 43.243%;
            z-index: map-get($z-index, base-increase);
            background: white;
            box-shadow: 0 0 map-get($spacers, 2) fade-out(map-get($theme-color-tertiary, lighter), .36);
            transform-origin: top right;
            transform: skewY($triangle-base-angle * -1);
          }
        }

        &__image {
          width: 120%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: top right;
          transform: translate(-50%, -50%) skewY($triangle-base-angle);

          &--left {
            transform-origin: top left;
            transform: translate(-50%, -50%) skewY($triangle-base-angle * -1);
          }
        }

        &--back {
          &-left-1 {
            width: 12.162%;
            height: 96.875%;
            left: 8.784%;
            background: linear-gradient(
              to bottom,
              fade-out(map-get($theme-color-fourth, darker), .92),
              33%,
              fade-out(map-get($theme-color-fourth, base), .68)
            );
            transform-origin: top right;
            transform: skewY($triangle-base-angle * -1);
          }

          &-left-2 {
            width: 6.757%;
            height: 85.156%;
            left: 18.92%;
            z-index: map-get($z-index, base-decrease);
            background: linear-gradient(
              to bottom,
              fade-out(map-get($theme-color-primary, reverse), .96),
              fade-out(map-get($theme-color-primary, reverse), .2)
            );
          }

          &-left-3 {
            width: 5.405%;
            height: 93.75%;
            left: 32.432%;
            z-index: map-get($z-index, base-decrease);
            background: linear-gradient(
              to bottom,
              transparent,
              67%,
              fade-out(map-get($theme-color-primary, reverse), .2)
            );
          }

          &-center-1 {
            width: 27.702%;
            height: 86.719%;
            left: 36.149%;
            z-index: map-get($z-index, base-decrease);
            background: linear-gradient(
              to bottom,
              fade-out(map-get($theme-color-accent, darker), .92),
              33%,
              fade-out(map-get($theme-color-tertiary, lighter), .84),
            );
            transform-origin: top right;
            transform: skewY($triangle-base-angle * -1);
          }

          &-center-2 {
            width: 22.973%;
            height: 26.563%;
            left: 55.405%;
            z-index: map-get($z-index, base-decrease);
            background: linear-gradient(
              to bottom,
              fade-out(map-get($theme-color-primary, reverse), .96),
              67%,
              fade-out(map-get($theme-color-primary, reverse), .52),
            );
          }

          &-right-1 {
            width: 20.312%;
            height: 62.5%;
            left: 70.95%;
            background: linear-gradient(
              to bottom,
              fade-out(map-get($theme-color-primary, base), .92),
              33%,
              fade-out(map-get($theme-color-secondary, darker), .2)
            );
            transform-origin: top right;
            transform: skewY($triangle-base-angle * -1);
          }

          &-right-2 {
            width: 5.405%;
            height: 93.75%;
            left: 75.676%;
            z-index: map-get($z-index, base-decrease);
            background: linear-gradient(
              to bottom,
              fade-out(map-get($theme-color-tertiary, darker), 1),
              67%,
              fade-out(map-get($theme-color-tertiary, base), .52)
            );
          }

          &-right-3 {
            width: 14.86%;
            height: 93.75%;
            left: 81.76%;
            z-index: map-get($z-index, base-decrease);
            background: linear-gradient(
              to bottom,
              fade-out(map-get($theme-color-secondary, lighter), .92),
              33%,
              fade-out(map-get($theme-color-tertiary, base), .68)
            );
            transform-origin: top left;
            transform: skewY($triangle-base-angle);
          }
        }
      }

      &__light {
        position: absolute;
        bottom: 0;
        z-index: map-get($z-index, base-increase);
        transform: translateY(50%);

        &--left {
          width: 44.594%;
          padding-bottom: 44.594%;
          left: 5.405%;
          background: radial-gradient(
            circle closest-side,
            fade-out(map-get($theme-color-fourth, lighter), .52),
            67%,
            fade-out(map-get($theme-color-fourth, darker), 1),
          );
        }

        &--right {
          width: 66.216%;
          padding-bottom: 66.216%;
          left: 21.622%;
          background: radial-gradient(
            circle closest-side,
            fade-out(map-get($theme-color-tertiary, lighter), .36),
            fade-out(map-get($theme-color-tertiary, darker), 1),
          );
        }
      }
    }

    &__horizon {
      position: relative;
      margin-top: 80%;
      z-index: map-get($z-index, base-increase);

      &__line {
        width: 100%;
        height: map-get($spacers, 1);
        background-color: map-get($theme-color-accent, lighter);
        border-radius: .0625rem;
        box-shadow: 0 0 map-get($spacers, 1) fade-out(map-get($theme-color-accent, lighter), .36);
      }

      &__shape {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
        transform-origin: bottom right;
        transform: skewX($triangle-base-angle);

        &-container {
          width: 14.375%;
          padding-bottom: 14.375%;
          position: absolute;
          top: 0;
          left: 29.375%;
          transform: translateY(-50%) rotate(-90deg);
        }

        &::before {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          background: linear-gradient(
            to bottom,
            map-get($theme-color-accent, base),
            67%,
            map-get($theme-color-accent, darker)
          );
          box-shadow: -1px
            0
            map-get($spacers, 2)
            fade-out(map-get($theme-color-accent, lighter), .8);
          transform-origin: bottom left;
          transform: skewX($triangle-reverse-angle * -1);
        }

        &__inner {
          position: absolute;
          overflow: hidden;

          &::before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            transform-origin: bottom right;
            transform: skewX($triangle-reverse-angle * -1);
          }

          &--dark {
            width: 50%;
            padding-bottom: 50%;
            top: 25%;
            right: 12.5%;

            &::before {
              background-color: map-get($theme-color-primary, base);
            }
          }

          &--light {
            width: 20%;
            padding-bottom: 20%;
            top: 66%;
            right: 25%;

            &::before {
              background-color: map-get($theme-color-primary, reverse);
            }
          }
        }
      }
    }

    &__ground {
      position: absolute;
      left: 12px;
      right: 12px;
      padding-bottom: 80%;
      overflow: hidden;

      &__shape {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
        transform-origin: top left;
        transform: skewX($triangle-base-angle);

        &::before {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          background: linear-gradient(
            to bottom,
            fade-out(map-get($theme-color-accent, lighter), .84),
            33%,
            fade-out(map-get($theme-color-accent, darker), 1)
          );
          transform-origin: top right;
          transform: skewX($triangle-reverse-angle * -1);
        }
      }

      &__reflexion {
        position: absolute;
        top: 0;
        z-index: map-get($z-index, base-decrease);

        &--left {
          width: 21.622%;
          height: 39.844%;
          left: 18.92%;
          background: linear-gradient(
            to bottom,
            fade-out(map-get($theme-color-fourth, darker), .76),
            fade-out(map-get($theme-color-primary, base), 1),
          );
          transform-origin: top right;
          transform: skewY($triangle-base-angle);
        }

        &--right {
          width: 24.324%;
          height: 53.125%;
          left: 43.243%;
          background: linear-gradient(
            to bottom,
            fade-out(map-get($theme-color-tertiary, darker), .76),
            fade-out(map-get($theme-color-primary, base), 1),
          );
          transform-origin: top left;
          transform: skewY($triangle-base-angle * -1);
        }
      }

      &__light {
        width: 80%;
        padding-bottom: 80%;
        position: absolute;
        top: 0;
        left: 50%;
        background: radial-gradient(
          circle closest-side,
          fade-out(map-get($theme-color-accent, darker), .68),
          fade-out(map-get($theme-color-primary, base), 1),
        );
        transform: translate(-50%, -50%);
      }
    }
  }

  @media screen and (min-width: $breakpoint-m) {
    overflow: hidden;

    &__title {
      &-container {
        box-sizing: border-box;
        width: 50%;
        padding-left: map-get($spacers, 4);
        bottom: 50%;
        transform: translateY(50%);
      }

      &-sub {
        margin-bottom: map-get($spacers, 8);
      }

      &-main {
        // turn into mixin
        font-size: $font-size-base * $font-size-scale-ratio * $font-size-scale-ratio * $font-size-scale-ratio * $font-size-scale-ratio * $font-size-scale-ratio;
        color: map-get($theme-color-primary, reverse);
        font-weight: $font-weight-semibold;
        line-height: $line-height-small;
        letter-spacing: $letter-spacing-small-1;
        // turn into mixin
        border-left: none;
        position: relative;

        &::after {
          content: "";
          display: block;
          width: 50%;
          height: map-get($spacers, 3);
          position: absolute;
          top: 100%;
          left: 0;
          background-color: map-get($theme-color-secondary, darker);
        }
      }
    }

    &__illustration {
      box-sizing: border-box;
      width: 50%;
      max-width: 36rem;
      top: 12%;
      right: 0;
    }
  }
}
</style>
