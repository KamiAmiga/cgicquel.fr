<template>
  <div class="project-main-images">
    <figure v-for="imagesGroup in imagesGroups"
      :key="imagesGroup.id"
      class="project-main-images__group">
      {{ key }}
      <picture>
        <source :srcSet="require(`@/assets/images/projectsImages/${name}_${imagesGroup.baseImage}` + '?webp')"
          media="(min-width: 30em)"
          type="image/webp"
          class="project-main-images__group__image-base"
          :class="'project-main-images__group__image-base--' + type">
        <source :srcSet="require(`@/assets/images/projectsImages/${name}_${imagesGroup.baseImage}`)"
          media="(min-width: 30em)"
          class="project-main-images__group__image-base"
          :class="'project-main-images__group__image-base--' + type">
        <source :srcSet="require(`@/assets/images/projectsImages/${name}_${imagesGroup.mobileImage}` + '?webp')"
          type="image/webp"
          class="project-main-images__group__image-base"
          :class="'project-main-images__group__image-base--' + type">
        <img :src="require(`@/assets/images/projectsImages/${name}_${imagesGroup.mobileImage}`)"
          :alt="imagesGroup.alt"
          class="project-main-images__group__image-base"
          :class="'project-main-images__group__image-base--' + type">
      </picture>
      <div v-if="imagesGroup.zoomImages"
        class="project-main-images__group__zoom">
        <div v-for="zoomImage in imagesGroup.zoomImages"
          :key="zoomImage.id"
          class="project-main-images__group__zoom__image-wrapper">
          <img :src="zoomImage"
            alt=""
            class="project-main-images__group__zoom__image">
          <div class="project-main-images__group__zoom__image-frame" />
          <div class="project-main-images__group__zoom__image-focus
            project-main-images__group__zoom__image-focus--left" />
          <div class="project-main-images__group__zoom__image-focus
            project-main-images__group__zoom__image-focus--right" />
        </div>
      </div>
    </figure>
    <div v-if="test">
      <img :src="require(`@/assets/images/projectsImages/${test}`)">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imagesGroups: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
//
// Variables
//

$focus-border: 1px solid map-get($theme-color-secondary, lighter);
$focus-space: map-get($spacers, 3) + map-get($spacers, 1);
$focus-space_m: map-get($spacers, 3) + map-get($spacers, 2);

//
// Styling
//

.project-main-images {
  &__group {
    display: flex;
    margin-bottom: map-get($spacers, 4);
    flex-direction: column;
    line-height: 0;

    &__image-base {
      max-width: 100%;

      &--drawing {
        box-shadow: map-get($spacers, 2) * -1
          map-get($spacers, 1)
          map-get($spacers, 2)
          fade-out(map-get($theme-color-secondary, lighter), map-get($fading-out, 3));
      }

      &--design {
        box-shadow: map-get($spacers, 2) * -1
          map-get($spacers, 1)
          map-get($spacers, 2)
          fade-out(map-get($theme-color-accent, lighter), map-get($fading-out, 3));
      }
    }

    &__zoom {
      display: flex;
      padding-left: map-get($spacers, 6);
      margin-top: map-get($spacers, 5) * -1;
      flex-wrap: wrap;

      &__image {
        width: 8rem;

        &-wrapper {
          position: relative;
          margin-right: map-get($spacers, 3);

          &:last-child {
            margin-right: 0;
          }
        }

        &-frame {
          width: 100%;
          height: 100%;
          clip-path: polygon(0 0, 0 100%, 12.5% 100%, 12.5% 12.5%, 87.5% 12.5%, 87.5% 87.5%, 12.5% 87.5%, 12.5% 100%, 100% 100%, 100% 0);
          position: absolute;
          top: 0;
          left: 0;
          opacity: map-get($opacities, 9);
          background: linear-gradient(
            to bottom right,
            mix(map-get($theme-color-secondary, darker), map-get($theme-color-primary, base), 32%),
            25%,
            map-get($theme-color-primary, base),
            75%,
            mix(map-get($theme-color-secondary, darker), map-get($theme-color-primary, base), 32%)
          );
        }

        &-focus {
          position: absolute;
          top: $focus-space;
          bottom: $focus-space;

          &::before {
            content: '';
            display: block;
            width: map-get($spacers, 4);
            height: map-get($spacers, 4);
            border-top: $focus-border;
            border-left: $focus-border;
            position: absolute;
            top: 0;
            left: 0;
          }

          &::after {
            content: '';
            display: block;
            width: map-get($spacers, 3);
            height: map-get($spacers, 3);
            border-bottom: $focus-border;
            border-left: $focus-border;
            position: absolute;
            bottom: 0;
            left: 0;
          }

          &--left {
            left: $focus-space;
          }

          &--right {
            right: $focus-space;
            transform: rotate(180deg);
          }
        }
      }

    }

    &:nth-child(even) {
      transform: translateX(map-get($spacers, 4) * -1);
    }

    &:nth-child(odd) {
      align-items: end;
      transform: translateX(map-get($spacers, 4));

      .project-main-images__group__zoom {
        padding-left: 0;
        padding-right: map-get($spacers, 6);
        align-items: end;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: $breakpoint-m) {
    &__group {
      margin-bottom: map-get($spacers, 8);

      &__zoom {
        margin-top: map-get($spacers, 7) * -1;

        &__image {
          width: 15rem;

          &-wrapper {
            margin-right: map-get($spacers, 5);
          }

          &-frame {
            clip-path: polygon(0 0, 0 100%, 8% 100%, 8% 8%, 92% 8%, 92% 92%, 8% 92%, 8% 100%, 100% 100%, 100% 0);
          }

          &-focus {
            top: $focus-space_m;
            bottom: $focus-space_m;

            &::before {
              width: map-get($spacers, 6);
              height: map-get($spacers, 6);
            }

            &::after {
              width: map-get($spacers, 4);
              height: map-get($spacers, 4);
            }

            &--left {
              left: $focus-space_m;
            }

            &--right {
              right: $focus-space_m;
              transform: rotate(180deg);
            }
          }
        }
      }

      &:nth-child(even),
      &:nth-child(odd) {
        transform: translateX(0);
      }
    }
  }
}
</style>
