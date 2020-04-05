<template>
  <main class="project" role="main">
    <Header :title="work.title"
      color="accent" />

    <div class="content">
      <div class="section section--full">
        <ProjectStats :year="work.year"
          :tools="work.tools" />

        <div class="project__description text-container">
          <p v-for="paragraph in work.description"
            :key="paragraph.id"
            v-html="paragraph">
          </p>
        </div>
      </div>

      <div class="project__mainImages">
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
