<template>
  <dl class="project-stats">
    <dt class="project-stats__property font-sans--md-capitalized">Année</dt>
    <dd class="project-stats__value font-mono font-mono--small">{{ year }}</dd>
    <dt class="project-stats__property font-sans--md-capitalized">Outils</dt>
    <dd class="project-stats__value font-mono font-mono--small">
      <ul class="project-stats__tools-list"
        v-if="tools.length > 1">
        <li class="project-stats__tool project-stats__tool--list-item"
          v-for="tool in tools"
          :key="tool.id">
          <div class="project-stats__tool__icon-wrapper
            icon-wrapper
            icon-wrapper--square
            icon-wrapper--m"
            :class="'project-stats__tool__icon-wrapper--' + tool.category">
            <svg-icon class="project-stats__tool__icon icon--m" :name="tool.icon" />
          </div>
          {{ tool.name }}
        </li>
      </ul>
      <div class="project-stats__tool" v-else>
        <div class="project-stats__tool__icon-wrapper
          icon-wrapper
          icon-wrapper--square
          icon-wrapper--m"
          :class="'project-stats__tool__icon-wrapper--' + tools[0].category">
          <svg-icon class="project-stats__tool__icon icon--m" :name="tools[0].icon" />
        </div>
        {{ tools[0].name }}
      </div>
    </dd>
  </dl>
</template>

<script>
export default {
  props: {
    year: Number,
    tools: Array
  }
}
</script>

<style lang="scss">
//
// Variables
//

$tools-types:
  "code" $theme-color-tertiary,
  "design" $theme-color-secondary;

//
// Styling
//

.project-stats {
  box-sizing: border-box;
  padding: 0;
  border-bottom: 1px solid map-get($theme-color-primary, lighter-2);
  margin: 0;
  z-index: map-get($z-index, base-increase);

  &__property {
    margin-bottom: map-get($spacers, 3);
    color: map-get($theme-color-accent, lighter);
  }

  &__value {
    margin-left: 0;
    margin-bottom: map-get($spacers, 8);

    &:last-child {
      margin-bottom: map-get($spacers, 6);
    }
  }

  &__tools-list {
    display: flex;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
    list-style: none;
  }

  &__tool {
    display: flex;
    align-items: center;

    &__icon {
      fill: map-get($theme-color-primary, reverse);

      &-wrapper {
        flex-grow: 0;
        flex-shrink: 0;
        margin-right: map-get($spacers, 3);

        &::before {
          width: 2rem;
          height: 2rem;
        }

        @each $type, $theme-color in $tools-types {
          &--#{$type} {
            &::before {
              border: 1px solid map-get($theme-color, base);
              background: linear-gradient(
                to bottom right,
                fade-out(map-get($theme-color, darker), map-get($fading-out, 5)),
                33%,
                fade-out(map-get($theme-color, base), map-get($fading-out, 0))
              );
            }
          }
        }
      }
    }

    &--list-item {
      display: flex;
      box-sizing: border-box;
      flex-basis: 50%;
      flex-grow: 0;
      flex-shrink: 0;
      max-width: 10rem;
      padding: map-get($spacers, 3) map-get($spacers, 2);
      flex-direction: column;

      .project-stats__tool__icon-wrapper {
        margin-top: map-get($spacers, 2);
        margin-right: 0;
      }
    }
  }

  @media screen and (min-width: $breakpoint-m) {
    width: 20rem;
    flex-grow: 0;
    flex-shrink: 0;
    padding: map-get($spacers, 8) map-get($spacers, 7) map-get($spacers, 6) map-get($spacers, 7);
    border: none;
    margin: -12rem 0 0 0;
    background-color: map-get($theme-color-primary, reverse);

    &__property {
      color: map-get($theme-color-accent, darker);
    }

    &__value {
      color: map-get($theme-color-primary, lighter-2);
    }

    &__tool {
      &__icon {
        fill: map-get($theme-color-primary, base);
      }
    }
  }
}
</style>
