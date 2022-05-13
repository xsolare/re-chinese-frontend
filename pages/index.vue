<template>
  <div class="home">
    <h1>yep</h1>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "app"
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  gap: 5px;

  > * {
    font-size: 2rem;
    text-decoration: none;
    color: var(--color-text);

    background-color: var(--color-background);
    padding: 5px 20px;
    border-radius: 10px;

    width: 320px;
    text-align: center;
  }
}
</style>
