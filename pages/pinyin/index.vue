<template>
  <div class="pinyin">
    <div class="pinyin-description" v-html="$t('pinyin.description')"></div>
    <PinyinTable />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "app",
})
</script>

<style lang="scss" scoped>
.pinyin {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
}

.pinyin-description {
  font-size: 1rem;
  padding: 5px;
  max-width: 1200px;

  @include mobile {
    font-size: 0.9rem;
  }
}
</style>
