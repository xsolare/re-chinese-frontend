<template>
  <div>
    <div class="word-layout-menu">
      <div class="word-layout-menu__item word-layout-menu__item_left">
        <NuxtLink to="/word/add">
          xD
        </NuxtLink>
      </div>
      <NuxtLink to="/word/" class="word-layout-menu__item">
        Ad
      </NuxtLink>
      <NuxtLink to="/word/all" class="word-layout-menu__item">
        Dobavit'
      </NuxtLink>
      <div class="word-layout-menu__item word-layout-menu__item_right">
        <NuxtLink to="/word/add">
          <IconsAdd />
        </NuxtLink>
      </div>
    </div>
    <IconsWave />
    <section class="word-layout">
      <slot />
    </section>
  </div>
</template>

<style scoped lang="scss">
.word-layout-menu {
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
    }

    &_right {
      margin-left: auto;
    }
  }
}
</style>
