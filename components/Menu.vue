<template>
  <nav class="menu">
    <button type="button">
        <span>Menu</span>
    </button>
    <ul>
      <li>
        <nuxt-link to="/projets">
          Projets
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/journal">
          Journal
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/a-propos">
          A propos
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.menu {
  position: fixed;
  bottom: 0;
}
button {
  color: map-get($theme-color-accent, base);
}
</style>
