<template>
  <main role="main">
    <Header title="A propos"
      small
      type="about" />

    <div class="content">
      <section class="section section--full">
        <div class="intro-wrapper">
          <div class="text-container intro">
            <p>Bonjour, je suis <strong class="font-sans--capitalized">Camille, UI Designer et Intégratrice</strong>, travaillant dans le Nord de la France pour OVH. Mon cursus et mes expériences professionnelles m'ont permis de naviguer entre les domaines du <strong class="font-sans--capitalized">design</strong> et du <strong class="font-sans--capitalized">code</strong>.</p>
            <p><strong class="font-sans--capitalized">J'aime créer</strong> et n'hésite pas à découvrir de nouveaux champs d'expression, qu'ils soient artistiques ou informatiques.</p>
          </div>
        </div>
      </section>

      <section class="section section--full">
        <h2 class="heading--second">
          Parcours
        </h2>
        <ul class="history">
          <HistoryItem v-for="(career, id) in careerItems"
            :key="id"
            :type="career.type"
            :name="career.name"
            :company="career.company"
            :startDate="career.startDate"
            :endDate="career.endDate"
            :junction="career.junction" />
        </ul>
      </section>

      <section class="section section--full">
        <h2 class="heading--second">
          Compétences
        </h2>
        <div class="skill">
          <ul v-for="(skill_group, id) in skills"
            :key="id"
            class="skill__group"
            :class="'skill__group--' + id">
            <SkillItem v-for="(skill, id) in skill_group"
              :key="id"
              :name="skill.name"
              :icon="skill.icon"
              :level="skill.level" />
          </ul>
        </div>
      </section>

      <section class="section section--half">
        <h2 class="heading--second">
          Intérêts
        </h2>
        <div class="interests">
          <div class="interests__icon-wrapper icon-wrapper icon-wrapper--l icon-wrapper--circle">
            <svg-icon class="icon icon--xl" name="heart" />
          </div>
          <ul class="interests__list">
            <InterestItem v-for="(interest, id) in interests"
              :key="id"
              :name="interest.name"
              :icon="interest.icon" />
          </ul>
        </div>
      </section>

      <section class="section section--half">
        <h2 class="heading--second">
          Contacts
        </h2>
        <ul class="contact">
          <ContactItem v-for="(contact, id) in contacts"
            :key="id"
            :url="contact.url"
            :name="contact.name"
            :icon="contact.icon" />
        </ul>
      </section>
    </div>
  </main>
</template>

<script>
import Header from '@/components/Header'
import HistoryItem from '@/components/about/HistoryItem'
import SkillItem from '@/components/about/SkillItem'
import InterestItem from '@/components/about/InterestItem'
import ContactItem from '@/components/about/ContactItem'

export default {
  components: {
    Header,
    HistoryItem,
    SkillItem,
    InterestItem,
    ContactItem
  },
  data () {
    return {
      careerItems: [
        {
          name: 'MANAA',
          type: 'school',
          startDate: '2010',
          endDate: '2011'
        },
        {
          name: 'BTS Communication Visuelle option Multimédia',
          type: 'school',
          startDate: '2011',
          endDate: '2013'
        },
        {
          name: 'Webdesigner stagiaire',
          type: 'work',
          startDate: 'mai 2012',
          endDate: 'juin 2012',
          company: 'Seeweb',
          junction: true
        },
        {
          name: 'Licence Pro Webdesign Sensoriel',
          type: 'school',
          startDate: '2013',
          endDate: '2014',
          junction: true
        },
        {
          name: 'Webdesigner stagiaire',
          type: 'work',
          startDate: 'avril 2014',
          endDate: 'septembre 2014',
          company: 'ID Interactive'
        },
        {
          name: 'Intégratice',
          type: 'work',
          startDate: 'janvier 2015',
          endDate: 'février 2015',
          company: 'Créimprim'
        },
        {
          name: 'UI Designer & Intégratrice',
          type: 'work',
          startDate: 'mai 2015',
          endDate: 'aujourd\'hui',
          company: 'OVH'
        }
      ],
      skills: {
        lang: [
          {
            name: 'Anglais',
            icon: 'lang-en',
            level: 2
          },
          {
            name: 'Japonais',
            icon: 'lang-jp',
            level: 0
          }
        ],
        code: [
          {
            name: 'HTML5',
            icon: 'html5',
            level: 2
          },
          {
            name: 'CSS3',
            icon: 'css3',
            level: 2
          },
          {
            name: 'Sass',
            icon: 'sass',
            level: 2
          },
          {
            name: 'Drupal',
            icon: 'drupal',
            level: 1
          },
          {
            name: 'BEM',
            icon: 'bem',
            level: 1
          },
          {
            name: 'Bootstrap 4',
            icon: 'bootstrap',
            level: 1
          },
          {
            name: 'Git',
            icon: 'git',
            level: 0
          }
        ],
        design: [
          {
            name: 'Photoshop',
            icon: 'adobephotoshop',
            level: 1
          },
          {
            name: 'Illustrator',
            icon: 'adobeillustrator',
            level: 1
          },
          {
            name: 'InDesign',
            icon: 'adobeindesign',
            level: 0
          },
          {
            name: 'Blender',
            icon: 'blender',
            level: 0
          },
          {
            name: 'Dessin',
            icon: 'pen',
            level: 2
          }
        ],
        web: [
          {
            name: 'Accessibility',
            icon: 'accessibility',
            level: 1
          },
          {
            name: 'Mobile first',
            icon: 'mobile-phone',
            level: 2
          }
        ]
      },
      interests: [
        {
          name: 'Lecture',
          icon: 'book'
        },
        {
          name: 'Jeux vidéos',
          icon: 'game-pad'
        },
        {
          name: 'Cuisine',
          icon: 'toque'
        },
        {
          name: 'Dessin',
          icon: 'pen'
        }
      ],
      contacts: [
        {
          url: 'https://twitter.com/KamiAmiga',
          name: 'Mes tweets',
          icon: 'twitter'
        },
        {
          url: 'https://www.instagram.com/kamiamiga/',
          name: 'Mes dessins, ma cuisine',
          icon: 'instagram'
        },
        {
          url: 'https://www.behance.net/cgicquel',
          name: 'Mes travaux de design',
          icon: 'behance'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.intro {
  @media screen and (min-width: $breakpoint-m) {
    padding-top: map-get($spacers, 6);
    padding-left: map-get($spacers, 6);
    position: relative;

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 10rem;
      height: 10rem;
      top: 0;
      left: 0;
      z-index: -1;;
      background: linear-gradient(
        to bottom right,
        fade-out(map-get($theme-color-accent, darker), .68),
        16.5%,
        fade-out(map-get($theme-color-accent, base), 1) 50%
      );
    }

    &-wrapper {
      display: inline-block;
      padding: map-get($spacers, 3);
      position: relative;

      &::before,
      &::after {
        content: "";
        display: block;
        width: map-get($spacers, 7);
        height: map-get($spacers, 7);
        border-top: 1px solid map-get($theme-color-accent, base);
        border-left: 1px solid map-get($theme-color-accent, base);
        position: absolute;
      }

      &::before {
        top: 0;
        left: 0;
      }

      &::after {
        right: 0;
        bottom: 0;
        transform: rotate(180deg);
      }
    }
  }
}
</style>
