<template>
  <nav class="menu"
    :class="{
      'menu--opened' : menuOpened,
      'menu--homepage' : homepage
    }">
    <div class="menu__overlay" />
    <div class="menu__content">
      <div v-if="!homepage" class="menu__content__title">
        <span class="font-mono font-mono--small">UI Design & Intégration</span>
        <span class="menu__content__title__name font-sans--capitalized">Camille Gicquel</span>
      </div>
      <button type="button"
        class="menu__content__opener"
        @click="menuOpened = !menuOpened">
        <span class="menu__content__opener__button">
          <span class="menu__content__opener__button__decoration
            menu__content__opener__button__decoration--left" />
          <span class="menu__content__opener__button__decoration
            menu__content__opener__button__decoration--right" />
          <span class="menu__content__opener__button__icon" />
          <span v-if="!menuOpened"
            class="menu__content__opener__button__label font-mono font-mono--small">
            Menu
          </span>
        </span>
        <span v-if="menuOpened" class="sr-only">Fermer le menu</span>
      </button>

      <ul class="menu__content__list">
        <li class="menu__content__list__item">
          <nuxt-link to="/"
            class="menu__content__list__item__link"
            @click.native="menuOpened = false">
            <span class="menu__content__list__item__link__label font-sans--bold">Accueil</span>
          </nuxt-link>
        </li>
        <li class="menu__content__list__item">
          <nuxt-link to="/projets"
            class="menu__content__list__item__link"
            @click.native="menuOpened = false">
            <span class="menu__content__list__item__link__label font-sans--bold">Projets</span>
          </nuxt-link>
        </li>
        <li class="menu__content__list__item">
          <nuxt-link to="/a-propos"
            class="menu__content__list__item__link"
            @click.native="menuOpened = false">
            <span class="menu__content__list__item__link__label font-sans--bold">A propos</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    homepage: Boolean
  },
  data () {
    return {
      menuOpened: false
    }
  }
}
</script>

<style lang="scss">
.menu {
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: map-get($z-index, nav);
  background-color: map-get($theme-color-primary, base);

  &__overlay {
    position: absolute;
    width: 100%;
    height: 100vh;
    bottom: 0;
    z-index: map-get($z-index, base-decrease);
    opacity: 0;
    background-color: fade-out(map-get($theme-color-primary, base), map-get($fading-out, 8));
    transform-origin: bottom;
    transform: scaleY(0);
  }

  &__content {
    display: flex;
    flex-direction: column-reverse;

    &::before {
      content: "";
      display: block;
      height: 1px;
      position: absolute;
      top: 0;
      right: map-get($spacers, 4);
      left: map-get($spacers, 4);
      background-color: fade-out(map-get($theme-color-accent, base), map-get($fading-out, 2));
      transition: all .1s .2s cubic-bezier(.5, -0.5, .75, 1);
    }

    &__title {
      display: flex;
      box-sizing: border-box;
      width: 100%;
      padding: map-get($spacers, 4)
        map-get($spacers, 4)
        map-get($spacers, 4)
        map-get($spacers, 4) + map-get($spacers, 8) + map-get($spacers, 6);
      position: absolute;
      z-index: map-get($z-index, base-decrease);
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      &__name {
        margin-top: map-get($spacers, 1);
      }
    }

    &__opener {
      display: flex;
      box-sizing: border-box;
      width: 100%;
      padding: map-get($spacers, 4);
      border: none;
      justify-content: flex-start;
      background: transparent;
      cursor: pointer;

      &__button {
        display: flex;
        box-sizing: border-box;
        width: map-get($spacers, 8);
        height: map-get($spacers, 8);
        padding: map-get($spacers, 1);
        flex-grow: 0;
        flex-shrink: 0;
        position: relative;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        background: linear-gradient(
          135deg,
          fade-out(map-get($theme-color-accent, darker), map-get($fading-out, 5)),
          33%,
          fade-out(map-get($theme-color-accent, lighter), map-get($fading-out, 0)) 50%,
        );

        &__decoration {
          display: block;
          position: absolute;
          transform-origin: top left;

          &::before,
          &::after {
            content: "";
            display: block;
            width: map-get($spacers, 7);
            height: 1px;
            position: absolute;
            top: 0;
            left: 0;
            background-color: map-get($theme-color-accent, base);
            box-shadow: 0 0 map-get($spacers, 1)
              fade-out(map-get($theme-color-accent, lighter), map-get($fading-out, 7));
            transition: all .12s cubic-bezier(.5, -0.5, .75, 1);
          }

          &::after {
            transform-origin: top left;
            transform: rotate(90deg)
          }

          &--left {
            top: map-get($spacers, 2) * -1;
            left: map-get($spacers, 2) * -1;
            transform: scale(1);
          }

          &--right {
            right: map-get($spacers, 2) * -1;
            bottom: map-get($spacers, 2) * -1;
            transform: scale(1) rotate(180deg);
          }
        }

        &__icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, map-get($spacers, 3) * -1);
          transition: all .3s cubic-bezier(.5, -0.5, .75, 1);

          &,
          &::before,
          &::after {
            display: block;
            width: .75rem;
            height: map-get($spacers, 1);
            background-color: map-get($theme-color-accent, base);
            border-radius: 1px;
            transform-origin: center;
            transition: all .3s cubic-bezier(.5, -0.5, .75, 1);
          }

          &::before,
          &::after {
            content: "";
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }

          &::before {
            top: -.375rem;
          }

          &::after {
            bottom: -.375rem;
          }
        }

        &__label {
          color: map-get($theme-color-primary, reverse);
        }
      }

      &:hover,
      &:focus,
      &:active {
        .menu__content__opener__button__decoration {
          &::before,
          &::after {
            width: map-get($spacers, 5);
            background-color: map-get($theme-color-accent, darker);
            box-shadow: 0 0 0 transparent;
          }
        }
      }
    }

    &__list {
      max-height: 0;
      padding: 0;
      border-left: 1px dashed map-get($theme-color-primary, lighter-2);
      margin: 0 0 0 map-get($spacers, 4);
      overflow: hidden;
      list-style: none;
      transition: all .4s ease-in;

      &__item {
        &__link {
          display: block;
          padding: map-get($spacers, 4) 0;
          margin-left: map-get($spacers, 7);
          opacity: 0;
          text-decoration: none;
          transform: translateX(map-get($spacers, 7));
          transition: opacity .1s .2s ease-out
            transform .2s ease-in;

          &__label {
            display: inline-block;
            position: relative;

            &::after {
              content: "";
              display: block;
              width: map-get($spacers, 7);
              height: map-get($spacers, 1);
              position: absolute;
              bottom: map-get($spacers, 1) * -1;
              left: 0;
              background-color: map-get($theme-color-accent, base);
              box-shadow: 0 0 map-get($spacers, 2)
                fade-out(map-get($theme-color-accent, lighter), map-get($fading-out, 7));
              transition: all .16s .04s ease-out;
            }
          }

          &:hover,
          &:focus,
          &:active {
            .menu__content__list__item__link__label::after {
              width: 100%;
              height: 1px;
              background-color: map-get($theme-color-accent, darker);
              box-shadow: 0 0 0 transparent;
            }
          }
        }
      }
    }
  }

  &--homepage {
    background-color: transparent;
    transition: background-color .3s .1s ease-out;

    .menu {
      &__content {
        &::before {
          height: 0;
          left: 50%;
          right: 50%;
        }

        &__opener {
          &__button {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            transition: all .3s ease-out;
          }
        }
      }
    }

    &.menu--opened {
      .menu {
        &__content {
          &::before {
            height: 1px;
            left: 0;
            right: 0;
          }

          &__opener {
            &__button {
              left: 0;
              transform: translateX(0);
            }
          }
        }
      }
    }
  }

  &--opened {
    background-color: map-get($theme-color-primary, base);
    box-shadow: 0
      map-get($spacers, 2) * -1
      map-get($spacers, 2)
      fade-out(map-get($theme-color-accent, base), map-get($fading-out, 3));

    .menu {
      &__overlay {
        opacity: 1;
        transform: scaleY(1);
      }

      &__content {
        &::before {
          right: 0;
          left: 0;
          background-color: map-get($theme-color-accent, base);
        }

        &__opener {
          &__button {
            &__decoration {
              &--left {
                transform: scale(0);
              }

              &--right {
                transform: scale(0) rotate(180deg);
              }
            }

            &__icon {
              width: 0;
              height: 0;
              transform: translate(-50%, -50%);

              &::before,
              &::after {
                width: map-get($spacers, 7);
                height: 1px;
              }

              &::before {
                top: 0;
                transform: translate(-50%, -50%) rotate(45deg);
              }

              &::after {
                bottom: 0;
                transform: translate(-50%, -50%) rotate(-45deg);
              }
            }
          }
        }

        &__list {
          max-height: 100vh;
          margin: map-get($spacers, 7) 0 map-get($spacers, 4) map-get($spacers, 4);

          &__item {
            &__link {
              opacity: 1;
              transform: translateX(0);
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: $breakpoint-m) {
    &__overlay {
      display: none;
    }

    &__content {
      max-width: $container-max-width;
      margin: 0 auto;
      position: relative;
      flex-direction: row;

      &::before {
        left: 0;
        right: 0;
      }

      &__title {
        width: auto;
        padding-left: map-get($spacers, 7);
        flex-grow: 0;
        flex-shrink: 0;
        position: static;
      }

      &__opener {
        display: none;
      }

      &__list {
        display: flex;
        max-height: none;
        padding-top: map-get($spacers, 7);
        border-left: none;
        margin-left: map-get($spacers, 10);

        &__item {
          flex-grow: 0;
          flex-shrink: 0;
          padding-right: map-get($spacers, 10);
          border-left: 1px dashed map-get($theme-color-primary, lighter-2);

          &__link {
            padding: 0;
            margin-left: map-get($spacers, 4);
            opacity: 1;
            transform: translateX(0);
          }
        }
      }
    }

    &--homepage {
      .menu {
        &__content {
          &__list {
            padding: 0 0 map-get($spacers, 10) 0;
            border-left: 1px dashed map-get($theme-color-primary, lighter-2);
            margin: 0 0 0 map-get($spacers, 4);
            flex-direction: column;

            &__item {
              border-left: none;
              padding-bottom: map-get($spacers, 5);

              &__link {
                margin-left: map-get($spacers, 7);
              }

              &:last-child {
                padding-bottom: 0;
              }
            }
          }
        }
      }
    }

    &--opened {
      box-shadow: none;

      .menu {
        &__content {
          &::before {
            background-color: fade-out(map-get($theme-color-accent, base), map-get($fading-out, 2));
          }

          &__list {
            margin: 0 0 0 map-get($spacers, 10);
          }
        }
      }
    }
  }
}
</style>
