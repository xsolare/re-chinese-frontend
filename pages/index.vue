<template>
  <div class="home">
    <NuxtLink to="/pinyin">Пиньинь</NuxtLink>
    <NuxtLink to="/words">Слова</NuxtLink>
    <NuxtLink to="/">. . . . .</NuxtLink>
    <NuxtLink to="/notebook">Учебник</NuxtLink>
  </div>
</template>

<script lang="ts" setup></script>

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

    background-color: var(--color-background-content);
    padding: 5px 20px;
    border-radius: 10px;

    width: 320px;
    text-align: center;
  }
}
</style>
