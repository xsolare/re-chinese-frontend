<template>
  <div class="pinyin">
    <PinyinTable />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "app",
  ssr: true,
})
</script>

<style lang="scss" scoped>
.pinyin {
  width: 100%;
  height: 100%;
}
</style>
