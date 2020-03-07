<template>
  <li class="contact-item">
    <a class="contact-item__link" :href="url">
      <div class="contact-item__link__icon-wrapper">
        <svg-icon class="contact-item__link__icon" :name="icon" />
      </div>
      <span class="contact-item__link__name">{{ name }}</span>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    url: String,
    name: String,
    icon: String
  }
}
</script>

<style lang="scss">
.contact {
  margin: 0;
  padding: 0;
  list-style-type: none;

  &-item {
    padding-left: map-get($spacers, 4);
    margin-top: map-get($spacers, 3);
    margin-bottom: map-get($spacers, 3);
    position: relative;

    &__link {
      display: flex;
      align-items: center;
      justify-content: start;
      position: relative;
      color: map-get($theme-color-primary, reverse);
      text-decoration: none;

      &::before {
        content: "";
        display: block;
        width: 56px;
        height: map-get($spacers, 3);
        position: absolute;
        right: 100%;
        bottom: 50%;
        z-index: -1;
        background-color: map-get($theme-color-accent, base);
        transform: translateX(map-get($spacers, 4));
      }

      &::after {
        content: "";
        display: block;
        width: auto;
        height: map-get($spacers, 3);
        position: absolute;
        top: 50%;
        right: calc(100% - 5.25rem);
        left: map-get($spacers, 5);
        z-index: -2;
        background: linear-gradient(
          to right,
          fade-out(map-get($theme-color-accent, lighter), .8),
          transparent);
        transform: translateY(0);
        transition: right .2s .1s ease-out,
          transform .12s ease-out;
      }

      &__icon {
        width: map-get($spacers, 4);
        height: map-get($spacers, 4);
        fill: map-get($theme-color-primary, base);

        &-wrapper {
          display: flex;
          width: 40px;
          height: 40px;
          flex-grow: 0;
          flex-shrink: 0;
          position: relative;
          align-items: center;
          justify-content: center;

          &::before {
            content: "";
            display: block;
            box-sizing: border-box;
            width: 28px;
            height: 28px;
            border: map-get($spacers, 1) solid map-get($theme-color-accent, darker);
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: -1;
            background-color: map-get($theme-color-primary, reverse);
            box-shadow: 0 0 map-get($spacers, 2) fade-out(map-get($theme-color-accent, lighter), .36);
            transform-origin: center;
            transform: translate(-50%, -50%)
              rotate(45deg);
            transition: transform .32s cubic-bezier(0, -0.8, .4, 1.25);
          }
        }
      }

      &__name {
        margin-left: map-get($spacers, 3);
      }

      &:hover,
      &:focus,
      &:active {
        &::after {
          right: 0;
          background: linear-gradient(
            to right,
            fade-out(map-get($theme-color-accent, lighter), .52),
            transparent);
          transform: translateY(6px);
        }

        .contact-item__link__icon-wrapper::before {
          transform: translate(-50%, -50%) rotate(180deg);
        }
      }
    }
  }

  @media screen and (min-width: $breakpoint-m) {
    &-item {
      padding-left: map-get($spacers, 10);
      margin-top: map-get($spacers, 4);
      margin-bottom: map-get($spacers, 4);

      &__link {
        display: inline-flex;

        &::before {
          width: map-get($spacers, 7);
          height: map-get($spacers, 1);
          left: map-get($spacers, 8) * -1;
          transform: translateY(50%);
          transition: width .12s ease-out,
            left .12s ease-out;
        }

        &::after {
          left: map-get($spacers, 6);
        }

        &__icon {
          width: map-get($spacers, 5);
          height: map-get($spacers, 5);

          &-wrapper {
            width: map-get($spacers, 8);
            height: map-get($spacers, 8);

            &::before {
              width: 34px;
              height: 34px;
            }
          }
        }

        &:hover,
        &:focus,
        &:active {
          &::before {
            width: map-get($spacers, 5);
            left: map-get($spacers, 5) * -1;
          }
        }
      }
    }
  }
}
</style>
