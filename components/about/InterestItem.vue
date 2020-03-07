<template>
  <li class="interests-item">
    <div class="interests-item__icon-wrapper">
      <svg-icon class="interests-item__icon" :name="icon" />
    </div>
    <div class="interests-item__name font-mono font-mono--small">{{ name }}</div>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    icon: String
  }
}
</script>

<style lang="scss">
.interests {
  display: flex;
  position: relative;
  margin-top: map-get($spacers, 10); // calculate from font line-height + half item-icn wrapper + 32
  margin-bottom: map-get($spacers, 8); // calculate from font line-height + half item-icn wrapper
  align-items: center;
  justify-content: center;

  &__icon {
    width: map-get($spacers, 7);
    height: map-get($spacers, 7);
    fill: map-get($theme-color-primary, reverse);

    &-wrapper {
      display: flex;
      box-sizing: border-box;
      width: map-get($spacers, 9);
      height: map-get($spacers, 9);
      border: map-get($spacers, 1) solid map-get($theme-color-secondary, base);
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: map-get($theme-color-primary, base);
      border-radius: 50%;
      box-shadow: 0 0 map-get($spacers, 2) fade-out(map-get($theme-color-secondary, base), .52);
      transform: translate(-50%, -50%);
    }
  }

  &__list {
    box-sizing: border-box;
    width: 7.5rem;
    height: 7.5rem;
    padding: 0;
    border: 1px solid map-get($theme-color-primary, lighter-3);
    margin: 0;
    position: relative;
    list-style-type: none;
    border-radius: 50%;
  }

  &-item {
    position: absolute;

    &__icon {
      width: map-get($spacers, 6);
      height: map-get($spacers, 6);
      fill: map-get($theme-color-primary, lighter-3);

      &-wrapper {
        display: flex;
        width: map-get($spacers, 8);
        height: map-get($spacers, 8);
        align-items: center;
        justify-content: center;
        background-color: map-get($theme-color-primary, base);
        border-radius: 50%;
      }
    }

    &__name {
      max-width: map-get($spacers, 9);
      position: absolute;
    }

    &:first-child {
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);

      .interests-item__name {
        bottom: 100%;
        left: 50%;
        transform: translate(
          map-get($spacers, 6) / 2 * -1,
          map-get($spacers, 2)
        );
      }
    }

    &:nth-child(2) {
      top: 50%;
      left: 100%;
      transform: translate(-50%, -50%);

      .interests-item__name {
        top: 50%;
        left: 100%;
        transform: translate(
          map-get($spacers, 2) * -1,
          -50%
        );
      }
    }

    &:nth-child(3) {
      top: 100%;
      left: 50%;
      transform: translate(-50%, -50%);

      .interests-item__name {
        top: 100%;
        right: 50%;
        transform: translate(
          map-get($spacers, 6) / 2,
          map-get($spacers, 2) * -1,
        );
      }
    }

    &:nth-child(4) {
      top: 50%;
      right: 100%;
      transform: translate(50%, -50%);

      .interests-item__name {
        top: 50%;
        right: 100%;
        transform: translate(
          map-get($spacers, 2),
          -50%
        );
      }
    }
  }

  @media screen and (min-width: $breakpoint-m) {
    width: 20rem;
    height: 20rem;

    &__icon {
      width: 2.5rem;
      height: 2.5rem;
      fill: map-get($theme-color-primary, reverse);

      &-wrapper {
        width: map-get($spacers, 10);
        height: map-get($spacers, 10);
      }
    }

    &__list {
      width: 12.5rem;
      height: 12.5rem;
    }

    &-item {
      &__icon {
        width: map-get($spacers, 7);
        height: map-get($spacers, 7);

        &-wrapper {
          width: map-get($spacers, 9);
          height: map-get($spacers, 9);
        }
      }
    }
  }
}
</style>
