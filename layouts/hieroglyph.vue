<template>
  <div>
    <div class="hieroglyph-layout-menu">
      <div class="hieroglyph-layout-menu__item hieroglyph-layout-menu__item_left">
        <!-- <NuxtLink to="/hieroglyph/add">
          <IconsMenu />
        </NuxtLink> -->
      </div>
      <NuxtLink to="/hieroglyph/" class="hieroglyph-layout-menu__item">Collection</NuxtLink>
      <NuxtLink to="/hieroglyph/all" class="hieroglyph-layout-menu__item">All</NuxtLink>
      <div class="hieroglyph-layout-menu__item hieroglyph-layout-menu__item_right">
        <!-- <NuxtLink to="/hieroglyph/add">
          <IconsAdd />
        </NuxtLink> -->
      </div>
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

  padding-top: 5px;
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
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &_left {
      margin-right: auto;
      min-width: 60px;
    }

    &_right {
      margin-left: auto;
      min-width: 60px;
    }
  }
}

// .hieroglyph-layout {
//   height: 100%;
// }
</style>
