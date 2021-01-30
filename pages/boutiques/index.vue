<template>
  <main role="main" class="boutiques">
    <div class="content">
      <section class="section section--full">
        <h1 class="boutiques__title">
          <div class="boutiques__title__main font-sans--md-capitalized">Camille Gicquel</div>
          <div class="font-sans--small">aka @kamiamiga</div>
        </h1>
      </section>
      <section class="section section--full">
        <ul class="boutiques__list">
          <li>
            <a href="https://www.redbubble.com/fr/people/kamiamiga/shop?asc=u"
              class="boutiques__list__link">
              <svg-icon name="redbubble"
                class="boutiques__list__link__icon icon--xl" />
              <span>Redbubble</span>
            </a>
          </li>
          <li>
            <a href="https://displate.com/kamiamiga?art=5ee77d5938e4a"
              class="boutiques__list__link">
              <svg-icon name="displate"
                class="boutiques__list__link__icon icon--xl" />
              <span>Displate</span>
            </a>
          </li>
          <li>
            <a href="https://www.spreadshirt.fr/shop/user/kami+amiga/"
              class="boutiques__list__link">
              <svg-icon name="spreadshirt"
                class="boutiques__list__link__icon icon--xl" />
              <span>Spreadshirt</span>
            </a>
          </li>
          <li>
            <a href=" https://www.fiverr.com/cgicquel"
              class="boutiques__list__link">
              <svg-icon name="fiverr"
                class="boutiques__list__link__icon icon--xl" />
              <span>Fiverr</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<style lang="scss">
.boutiques {
  &__title {
    padding-bottom: map-get($spacers, 4);
    margin: 0;
    text-align: center;

    &__main {
      margin-bottom: map-get($spacers, 3);
    }
  }

  &__list {
    max-width: 60rem;
    padding: 0;
    margin: 0 auto;
    list-style-type: none;

    &__link {
      @include font-sans(bold);
      display: flex;
      padding: map-get($spacers, 5) map-get($spacers, 4);
      border: 1px solid map-get($theme-color-accent, darker);
      margin-bottom: map-get($spacers, 3);
      justify-content: flex-start;
      align-items: center;
      background: linear-gradient(
        to right,
        fade-out(map-get($theme-color-accent, darker),
          map-get($fading-out, 5)),
        16.5%,
        fade-out(map-get($theme-color-accent, darker),
          map-get($fading-out, 0)) 50%,
      );
      text-decoration: none;

      &__icon {
        flex-shrink: 0;
        flex-grow: 0;
        margin-right: map-get($spacers, 3);
        fill: #fff;
      }
    }
  }

  @media screen and (min-width: $breakpoint-m) {
    padding-bottom: map-get($spacers, 7);
    margin-top: map-get($spacers, 4);

    &__list {
      &__link {
        @include font-sans(md);
        padding: map-get($spacers, 7) map-get($spacers, 4);

        &__icon {
          margin-right: map-get($spacers, 4);
        }
      }
    }
  }
}
</style>
