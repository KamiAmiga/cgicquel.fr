<template>
  <main class="project" role="main">
    <Header :title="work.title"
      color="accent" />

    <div class="content">
      <dl class="project-stats">
        <dt class="project-stats__property font-sans--md-capitalized">Année</dt>
        <dd class="project-stats__value font-mono font-mono--small">{{ work.year }}</dd>
        <dt class="project-stats__property font-sans--md-capitalized">Outils</dt>
        <dd class="project-stats__value font-mono font-mono--small">
          <ul class="project-stats__tools-list"
            v-if="work.tools.length > 1">
            <li class="project-stats__tool project-stats__tool--list-item"
              v-for="tool in work.tools"
              :key="tool.id">
              <svg-icon class="project-stats__tool__icon icon--m"
                :class="'project-stats__tool__icon--' + category"
                :name="tool.icon" />
              {{ tool.name }}
            </li>
          </ul>
          <div class="project-stats__tool" v-else>
            <svg-icon class="project-stats__tool__icon icon--m"
            :class="'project-stats__tool__icon--' + category"
              :name="work.tools[0].icon" />
            {{ work.tools[0].name }}
          </div>
        </dd>
      </dl>

      <div class="project__description text-container">
        <p v-for="paragraph in work.description"
          :key="paragraph.id"
          v-html="paragraph">
        </p>
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

export default {
  components: {
    Header
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
