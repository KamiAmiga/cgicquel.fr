<template>
  <main class="project" role="main">
    <Header :title="work.title"
      color="accent" />

    <div class="content">
      <div class="section section--full section--flex">
        <ProjectStats :year="work.year"
          :tools="work.tools" />

        <div class="project__description">
          <div class="text-container">
            <p v-for="paragraph in work.description"
              :key="paragraph.id"
              v-html="paragraph">
            </p>

          </div>
        </div>
      </div>

      <div class="section section--full">
        <a href="#main-images"
          class="project__scrollto"
          :aria-label="'Les images du projet' + work.title"></a>
      </div>

      <div id="main-images" class="project__mainImages">
        <h2 class="sr-only">Le projet {{ work.title }} en images</h2>
        <template v-for="imagesGroup in work.imagesGroups">
          <figure :key="imagesGroup.id" v-if="Array.isArray(imagesGroup)">
            <img :src="image"
              alt=""
              v-for="image in imagesGroup"
              :key="image.id">
          </figure>
          <figure :key="imagesGroup.id" v-else>
            <img :src="imagesGroup" alt="">
          </figure>
        </template>
      </div>

      <div v-if="work.type === 'design'">
        <div class="project__fonts section section--half">
          <h2 class="heading--second">Typographie</h2>
        </div>
        <div class="project__colors section section--half">
          <h2 class="heading--second">Couleurs</h2>
          <ul>
            <li v-for="color in work.colors"
              :key="color.id">
              {{ color.name }}
            </li>
          </ul>
        </div>
      </div>

      <template v-if="secondaryImages">
        <div class="project__secondaryImages">
          <figure v-for="secondaryImage in work.secondaryImages"
            :key="secondaryImage.id">
            <img :src="secondaryImage" alt="">
          </figure>
        </div>
      </template>
    </div>
  </main>
</template>

<script>
import Header from '@/components/Header'
import ProjectStats from '@/components/project/ProjectStats'

export default {
  components: {
    Header,
    ProjectStats
  },
  data () {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    work () {
      return this.$store.state.works.list.find(work => work.id === this.id)
    }
  }
}
</script>

<style lang="scss">
.project {
  &__description {
    padding-top: map-get($spacers, 7);
  }

  &__scrollto {
    display: flex;
    box-sizing: border-box;
    width: map-get($spacers, 8);
    height: map-get($spacers, 8);
    border: .125rem solid map-get($theme-color-secondary, darker);
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    background-color: map-get($theme-color-primary, base);
    border-radius: 50%;
    box-shadow: 0 0 3px
      fade-out(map-get($theme-color-secondary, lighter), map-get($fading-out, 5));

    &::before {
      content: '';
      display: block;
      width: .75rem;
      height: .75rem;
      border-left: .25rem solid map-get($theme-color-accent, base);
      border-bottom: .25rem solid map-get($theme-color-accent, base);
      margin-top: map-get($spacers, 2) * -1;
      transform: rotate(-45deg);
    }
  }

  @media screen and (min-width: $breakpoint-m) {
    &__description {
      padding: map-get($spacers, 4) map-get($spacers, 9) 0 map-get($spacers, 9);
    }

    &__scrollto {
      width: map-get($spacers, 9);
      height: map-get($spacers, 9);

      &::before {
        width: 1.25rem;
        height: 1.25rem;
        margin-top: map-get($spacers, 3) * -1;
      }
    }
  }
}
</style>
