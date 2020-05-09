<template>
  <li class="skill-item">
    <div class="skill-item__icon-wrapper">
      <svg-icon :name="icon" class="icon--xl" />
    </div>
    <span class="skill-item__name">{{ name }}</span>
    <template v-if="level > 0">
      <template v-if="level == 1">
        <span class="sr-only">Niveau correct</span>
        <svg-icon class="skill-item__level icon--s" name="star" />
      </template>
      <template v-else>
        <span class="sr-only">Bon niveau</span>
        <svg-icon class="skill-item__level icon--s" name="stars" />
      </template>
    </template>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    level: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
//
// Variables
//

$types:
 "lang" $theme-color-fourth,
 "code" $theme-color-tertiary,
 "design" $theme-color-secondary,
 "web" $theme-color-accent;

$skill-item-size: 7.5rem;
$skill-grid-gap: .0625rem;

//
// Styling
//

.skill {
  &__group {
    display: grid;
    width: 100%;
    padding: 0;
    margin: 0;
    grid-template-columns: repeat(auto-fit, $skill-item-size);
    grid-auto-rows: $skill-item-size;
    grid-auto-flow: row;
    grid-gap: $skill-grid-gap;
    list-style-type: none;

    + .skill__group {
      margin-top: $skill-grid-gap;
    }
  }

  &-item {
    display: flex;
    box-sizing: border-box;
    padding: map-get($spacers, 3);
    position: relative;
    flex-direction: column;
    fill: map-get($theme-color-primary, reverse);

    &__icon-wrapper {
      display: flex;
      flex-grow: 1;
      align-items: flex-end;
    }

    &__name {
      padding-top: map-get($spacers, 4);
    }

    &__level {
      position: absolute;
      top: map-get($spacers, 3);
      right: map-get($spacers, 3);
    }

    @each $name, $theme-color in $types {
      .skill__group--#{$name} & {
        background: linear-gradient(
          to top right,
          fade-out(map-get($theme-color, darker),
            map-get($fading-out, 5)),
          33%,
          fade-out(map-get($theme-color, base),
            map-get($fading-out, 2))
        );
        border: .0625rem solid map-get($theme-color, base);
      }
    }
  }

  &__group--code {
    .skill-item:nth-child(6) {
      grid-column-start: 1;
    }
  }

  @media screen and (min-width: $breakpoint-xs) {
    &__group {
      grid-template-columns: repeat(4, $skill-item-size);
    }
  }

  @media screen and (min-width: $breakpoint-m) {
    display: grid;
    width: min-content;
    margin: 0 auto;
    grid-template-columns: repeat(7, $skill-item-size);
    grid-template-areas:
      "lang code code code design design web"
      "lang code code code design design web"
      ".... code code code design design web";
    grid-gap: $skill-grid-gap;

    &__group {
      grid-auto-flow: column;

      + .skill__group {
        margin-top: 0;
      }

      &--lang {
        grid-area: lang;
        grid-template-rows: repeat(2, $skill-item-size);
      }

      &--code {
        grid-area: code;
        grid-template-rows: repeat(3, $skill-item-size);

        .skill-item {
          &:nth-child(4),
          &:nth-child(6) {
            grid-column-start: auto;
            grid-row-start: 2;
          }
        }
      }

      &--design {
        grid-area: design;
        grid-template-rows: repeat(3, $skill-item-size);

        .skill-item:first-child {
          grid-row-start: 2;
        }
      }

      &--web {
        grid-area: web;
        grid-template-rows: repeat(3, $skill-item-size);
      }
    }
  }

  @media screen and (min-width: $breakpoint-l) {
    grid-template-columns: repeat(8, $skill-item-size);
    grid-template-areas:
      "lang .... .... .... .... design design web"
      "lang code code code code design design web"
      ".... code code code code design design ...";

    &__group {
      &--code {
        grid-template-rows: repeat(2, $skill-item-size);

        .skill-item {
          &:nth-child(3) {
            grid-row-start: 2;
          }

          &:nth-child(4),
          &:nth-child(6) {
            grid-row-start: auto;
          }
        }
      }

      &--design {
        .skill-item:first-child {
          grid-row-start: auto;
        }
      }

      &--web {
        grid-template-rows: repeat(2, $skill-item-size);
      }
    }
  }
}
</style>
