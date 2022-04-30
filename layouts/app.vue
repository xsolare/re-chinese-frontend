<template>
  <div>
    <UiHeader />
    <main class="app-layout">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.app-layout {
  position: relative;

  width: 100%;
  z-index: 10;

  padding-top: var(--header-height);

  // min-height: calc(100vh - var(--footer-height));
  min-height: 100vh;
  height: 100%;

  @include mobile {
    padding-top: 0;
  }
}
</style>
