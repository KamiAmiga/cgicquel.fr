<template>
  <main class="project" role="main">
    <Header :title="project.title"
      :type="project.type"
      :image="project.mainIlluDesktop" />

    <div class="content">
      <section class="section section--full section--flex">
        <ProjectStats :year="project.year"
          :tools="project.tools" />

        <div class="project__description">
          <div class="text-container">
            <p v-for="paragraph in project.description"
              :key="paragraph.id"
              v-html="paragraph" />
          </div>
        </div>
      </section>

      <section id="main-images" class="section section--full">
        <h2 class="sr-only">
          Le projet {{ project.title }} en images
        </h2>
        <ProjectMainImages :imagesGroups="project.imagesGroups"
          :name="project.id"
          :type="project.type" />
      </section>

      <template v-if="project.type === 'design'">
        <section class="project__fonts section section--half">
          <h2 class="heading--second">
            Typographie
          </h2>
          <ProjectTypography :fonts="project.fonts" />
        </section>
        <section class="project__colors section section--half">
          <h2 class="heading--second">
            Couleurs
          </h2>
          <ProjectColors :colors="project.colors" />
        </section>
      </template>

      <template v-if="project.secondaryImages">
        <section class="section section--full">
          <h2 class="sr-only">
            Plus d'images du projet {{ project.title }}
          </h2>
          <ProjectSecondaryImages :images="project.secondaryImages" />
        </section>
      </template>
    </div>

    <ProjectNext :name="nextProject.title"
      :link="nextProject.id"
      :image="nextProject.mainIlluDesktop" />
  </main>
</template>

<script>
import Header from '@/components/Header'
import ProjectStats from '@/components/project/ProjectStats'
import ProjectMainImages from '@/components/project/ProjectMainImages'
import ProjectTypography from '@/components/project/ProjectTypography'
import ProjectColors from '@/components/project/ProjectColors'
import ProjectSecondaryImages from '@/components/project/ProjectSecondaryImages'
import ProjectNext from '@/components/project/ProjectNext'

export default {
  components: {
    Header,
    ProjectStats,
    ProjectMainImages,
    ProjectTypography,
    ProjectColors,
    ProjectSecondaryImages,
    ProjectNext
  },
  data () {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    project () {
      return this.$store.state.projects.list.find(project => project.id === this.id)
    },
    nextProject () {
      const currentIndex = this.$store.state.projects.list.findIndex(project => project.id === this.id)
      if (currentIndex + 1 < this.$store.state.projects.list.length) {
        return this.$store.state.projects.list[currentIndex + 1]
      } else {
        return this.$store.state.projects.list[0]
      }
    }
  }
}
</script>

<style lang="scss">
.project {
  &__description {
    padding-top: map-get($spacers, 7);
  }

  @media screen and (min-width: $breakpoint-m) {
    &__description {
      padding: map-get($spacers, 4) map-get($spacers, 9) 0 map-get($spacers, 9);
    }
  }
}
</style>
