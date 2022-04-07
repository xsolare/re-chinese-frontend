<template>
  <div>
    <div class="hieroglyph-layout-menu">
      <NuxtLink to="/hieroglyph/" class="hieroglyph-layout-menu__item">Collection</NuxtLink>
      <NuxtLink to="/hieroglyph/all" class="hieroglyph-layout-menu__item">All</NuxtLink>
      <!-- <NuxtLink to="/hieroglyph/my" class="first__item">Мои</NuxtLink> -->
    </div>
    <IconsWave />
    <section class="hieroglyph-layout">
      <slot />
    </section>
  </div>
</template>

<style scoped lang="scss">
.hieroglyph-layout-menu {
  position: relative;

  height: 40px;
  width: 100%;
  z-index: 15;
  background-color: var(--color-header-content-bg);

  display: flex;
  align-items: center;
  justify-content: center;

  &__item {
    text-decoration: none;
    color: var(--color-text);
    min-width: 100px;
    font-size: 1rem;
    text-align: center;
  }
}

// .hieroglyph-layout {
//   height: 100%;
// }
</style>
